"use client";
import {
  useReadDecentralizedBettingBets,
  useReadDecentralizedBettingEvents,
  useReadTestTokensAllowance,
  useReadTestTokensBalanceOf,
  useWriteDecentralizedBettingClaimWinnings,
  useWriteDecentralizedBettingCreateEvent,
  useWriteDecentralizedBettingPlaceBet,
  useWriteDecentralizedBettingResolveEvent,
  useWriteSocialOracle,
  useWriteSocialOracleDetermineCorrectAnswer,
  useWriteSocialOracleSubmitAnswer,
  useWriteStakeContractStake,
  useWriteTestTokensIncreaseAllowance,
  useWriteTestTokensMint,
} from "~/generated";
import { Button } from "~/components/ui/button";
import { useAccount } from "wagmi";
import { Address, formatEther, parseEther } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const ADDRESSES = {
  "base-sepolia": {
    BetStakingToken: "0xE9C17E4AE48BFD39937cef331FBf286BCb90CF62",
    MatchNFT: "0x01A4c2f3eC2A506086cED32C15c49211f8E58527",
    TEST_LiqudityToken: "0xb9698522cB63101350379E703694F3325BA4B089",
    TEST_StakingToken: "0x98450B10D6B982d11df956169EB76792A45FDc47",
    TreasuryContract: "0xbB4b257F8cACF09949D4443221fC50c78C8E364B",
    StakeContract: "0xc4513603A38E438Dbd2e9750a89c25899896EDe6",
    SocialOracle: "0xa322a2f58bD32bBf054f171877Ed23d0395d0ed2",
    DecentralizedBetting: "0xab1815ba62132B1E12eaa244C6b629070e328100",
  },
} as const;

const MATCH_IDS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

/**
 * uint256 id;
 * uint256 timestamp;
 * bool outcome;
 * bool resolved;
 * uint256 totalPot;
 * uint256 winningPot;
 * bool emergencyStop;
 */
type Match = {
  id: number;
  timestamp: number;
  outcome: boolean;
  resolved: boolean;
  totalPot: number;
  winningPot: number;
  emergencyStop: boolean;
};

export const MatchNFTs = () => {
  const account = useAccount();

  if (!account.address) return null;
  return (
    <div>
      <h1>Matches</h1>
      {MATCH_IDS.map((id) => (
        <MatchNFT key={id} id={id} address={account.address} />
      ))}
    </div>
  );
};

export const useMatch = (id: number) => {
  const { data } = useReadDecentralizedBettingEvents({
    address: ADDRESSES["base-sepolia"].DecentralizedBetting,
    args: [BigInt(id)],
  });

  const mappedMatch = useMemo(() => {
    if (!data) return null;
    const mappedMatch: Match = {
      id: data?.[0] ? Number(data[0]) : 0,
      timestamp: data?.[1] ? Number(data[1]) : 0,
      outcome: data?.[2] ? Boolean(data[2]) : false,
      resolved: data?.[3] ? Boolean(data[3]) : false,
      totalPot: data?.[4] ? Number(data[4]) : 0,
      winningPot: data?.[5] ? Number(data[5]) : 0,
      emergencyStop: data?.[6] ? Boolean(data[6]) : false,
    };
    return mappedMatch;
  }, [data]);

  return mappedMatch;
};

export const MatchNFT = ({ id, address }: { id: number; address: Address }) => {
  const queryClient = useQueryClient();
  const mappedMatch = useMatch(id);
  const bet = useWriteDecentralizedBettingPlaceBet();
  const staking = useReadTestTokensBalanceOf({
    address: ADDRESSES["base-sepolia"].BetStakingToken,
    args: [address],
  });
  const liquidityTokenALlowance = useReadTestTokensAllowance({
    address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
    args: [address, ADDRESSES["base-sepolia"].DecentralizedBetting],
  });

  const handleBet = async (decision: boolean) => {
    bet.writeContractAsync({
      address: ADDRESSES["base-sepolia"].DecentralizedBetting,
      args: [BigInt(id), decision, BigInt(1000000000000000000)],
    });
    await queryClient.invalidateQueries();
  };
  const oracle = useWriteSocialOracleSubmitAnswer();
  const determineCorrectAnswer = useWriteSocialOracleDetermineCorrectAnswer();
  const resolveEvent = useWriteDecentralizedBettingResolveEvent();
  const handleOracle = async (decision: boolean) => {
    oracle.writeContractAsync({
      address: ADDRESSES["base-sepolia"].SocialOracle,
      args: [BigInt(id), decision],
    });
    await queryClient.invalidateQueries();
  };

  const allowanceLiquidty = useReadTestTokensAllowance({
    address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
    args: [address, ADDRESSES["base-sepolia"].DecentralizedBetting],
  });
  const allowanceStaking = useReadTestTokensAllowance({
    address: ADDRESSES["base-sepolia"].TEST_StakingToken,
    args: [address, ADDRESSES["base-sepolia"].DecentralizedBetting],
  });
  const increaseAllowanceLiquidty = useWriteTestTokensIncreaseAllowance();

  const betStatus = useReadDecentralizedBettingBets({
    address: ADDRESSES["base-sepolia"].DecentralizedBetting,
    args: [BigInt(id), address],
  });
  const claim = useWriteDecentralizedBettingClaimWinnings();

  console.log("betStatus", betStatus);

  if (!mappedMatch?.timestamp) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>Match NFT {id}</h1>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardContent>
        <p>
          <b>Outcome:</b> {mappedMatch.outcome ? "True" : "False"}
        </p>
        <p>
          <b>Resolved:</b> {mappedMatch.resolved ? "True" : "False"}
        </p>
        <p>
          <b>Total pot:</b> {formatEther(mappedMatch.totalPot ?? BigInt(0))}
        </p>
        <p>
          <b>Winning pot:</b> {formatEther(mappedMatch.winningPot ?? BigInt(0))}
        </p>
      </CardContent>

      <CardFooter>
        {mappedMatch.resolved ? (
          <>
            <div>Mach resolved</div>
            <Button
              onClick={async () => {
                claim.writeContractAsync({
                  address: ADDRESSES["base-sepolia"].DecentralizedBetting,
                  args: [BigInt(id)],
                });
                await queryClient.invalidateQueries();
              }}
            >
              Claim winnings
            </Button>
          </>
        ) : (
          <>
            {!staking?.data && (
              // component for non-staker (2 buttons to vote true of false)
              <div>
                <p>Hello Fan</p>
                {!betStatus?.data?.[0] > 0 ? (
                  <>
                    <Button onClick={() => handleBet(true)}>Bet true</Button>
                    <Button onClick={() => handleBet(false)}>Bet false</Button>
                    {
                      // increase allowance for staking and liquidity tokens
                      allowanceLiquidty?.data?.toString() === "0" && (
                        <Button
                          onClick={async () => {
                            increaseAllowanceLiquidty.writeContractAsync({
                              address:
                                ADDRESSES["base-sepolia"].TEST_LiqudityToken,
                              args: [
                                ADDRESSES["base-sepolia"].DecentralizedBetting,
                                BigInt(1000000000000000000),
                              ],
                            });
                            await queryClient.invalidateQueries();
                          }}
                        >
                          Increase allowance liquidty (currently{" "}
                          {allowanceLiquidty?.data?.toString()})
                        </Button>
                      )
                    }
                  </>
                ) : (
                  <div>
                    <p>You already bet</p>
                  </div>
                )}
              </div>
            )}
            {!!staking?.data && (
              <div>
                <p>Hello Staker</p>
                <Button onClick={() => handleOracle(true)}>Resolve true</Button>
                <Button onClick={() => handleOracle(false)}>
                  Resolve false
                </Button>
                <Button
                  onClick={async () => {
                    try {
                      determineCorrectAnswer.writeContractAsync({
                        address: ADDRESSES["base-sepolia"].SocialOracle,
                        args: [BigInt(id)],
                      });
                      console.log("determineCorrectAnswer");
                    } catch (e) {
                      console.error(e);
                    }
                    resolveEvent.writeContractAsync({
                      address: ADDRESSES["base-sepolia"].DecentralizedBetting,
                      args: [BigInt(id)],
                    });
                    await queryClient.invalidateQueries();
                  }}
                >
                  Finalize
                </Button>
              </div>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export const CreateMatchComponent = () => {
  const timestamp = Date.now();
  const queryClient = useQueryClient();
  const writeDecentralizedBettingCreateEvent =
    useWriteDecentralizedBettingCreateEvent();

  return (
    <Button
      onClick={async () => {
        writeDecentralizedBettingCreateEvent.writeContractAsync({
          address: ADDRESSES["base-sepolia"].DecentralizedBetting,
          args: [BigInt(timestamp)],
        });
        await queryClient.invalidateQueries();
      }}
    >
      Create match
    </Button>
  );
};

export const ContractInteractions = () => {
  const account = useAccount();

  if (!account.address) return null;
  return (
    <>
      <TestnetTokens address={account.address} />
      <StakedTokens address={account.address} />
      <CreateMatchComponent />
      <MatchNFTs />
    </>
  );
};

export const TestnetTokens = (props: { address: Address }) => {
  const mintStakingToken = useWriteTestTokensMint();
  const mintLiquidtyToken = useWriteTestTokensMint();
  const balanceStaking = useReadTestTokensBalanceOf({
    address: ADDRESSES["base-sepolia"].TEST_StakingToken,
    args: [props.address],
  });
  const balanceLiqudity = useReadTestTokensBalanceOf({
    address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
    args: [props.address],
  });
  const queryClient = useQueryClient();

  return (
    <div>
      Balance staking token:{" "}
      {formatEther(balanceStaking?.data ?? BigInt(0)).toString()}
      <Button
        onClick={async () => {
          mintStakingToken.writeContractAsync({
            address: ADDRESSES["base-sepolia"].TEST_StakingToken,
            args: [props.address, BigInt(1000000000000000000)],
          });
          await queryClient.invalidateQueries();
        }}
      >
        Mint staking token
      </Button>
      Balance liquidty token:{" "}
      {formatEther(balanceLiqudity?.data ?? BigInt(0)).toString()}
      <Button
        onClick={async () => {
          mintLiquidtyToken.writeContractAsync({
            address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
            args: [props.address, BigInt(1000000000000000000)],
          });
          await queryClient.invalidateQueries();
        }}
      >
        Mint liq token
      </Button>
    </div>
  );
};

export const StakedTokens = (props: { address: Address }) => {
  const queryClient = useQueryClient();
  const stake = useWriteStakeContractStake();
  const balance = useReadTestTokensBalanceOf({
    address: ADDRESSES["base-sepolia"].BetStakingToken,
    args: [props.address],
  });
  const allowanceLiquidty = useReadTestTokensAllowance({
    address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
    args: [props.address, ADDRESSES["base-sepolia"].StakeContract],
  });
  const allowanceStaking = useReadTestTokensAllowance({
    address: ADDRESSES["base-sepolia"].TEST_StakingToken,
    args: [props.address, ADDRESSES["base-sepolia"].StakeContract],
  });
  const increaseAllowanceLiquidty = useWriteTestTokensIncreaseAllowance();
  const increaseAllowanceStaking = useWriteTestTokensIncreaseAllowance();

  return (
    <>
      <Button
        disabled={
          allowanceLiquidty?.data?.toString() === "0" ||
          allowanceStaking?.data?.toString() === "0"
        }
        onClick={async () => {
          stake.writeContractAsync({
            address: ADDRESSES["base-sepolia"].StakeContract,
            args: [BigInt(1000000000000000000), BigInt(1000000000000000000)],
          });
          await queryClient.invalidateQueries();
        }}
      >
        Stake
      </Button>
      {allowanceLiquidty?.data?.toString() === "0" && (
        <Button
          onClick={async () => {
            increaseAllowanceLiquidty.writeContractAsync({
              address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
              args: [
                ADDRESSES["base-sepolia"].StakeContract,
                BigInt(1000000000000000000),
              ],
            });
            await queryClient.invalidateQueries();
          }}
        >
          Increase allowance liquidty (currently{" "}
          {allowanceLiquidty?.data?.toString()})
        </Button>
      )}
      {allowanceStaking?.data?.toString() === "0" && (
        <Button
          onClick={async () => {
            increaseAllowanceStaking.writeContractAsync({
              address: ADDRESSES["base-sepolia"].TEST_StakingToken,
              args: [
                ADDRESSES["base-sepolia"].StakeContract,
                BigInt(1000000000000000000),
              ],
            });
            await queryClient.invalidateQueries();
          }}
        >
          Increase allowance staking (currently{" "}
          {allowanceStaking?.data?.toString()})
        </Button>
      )}
      <div>Staked: {formatEther(balance?.data ?? BigInt(0)).toString()}</div>
    </>
  );
};
