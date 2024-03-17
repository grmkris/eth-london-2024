"use client";
import {
  useReadDecentralizedBettingBets,
  useReadDecentralizedBettingEvents,
  useReadMatchNftTokenUri,
  useReadTestTokensAllowance,
  useReadTestTokensBalanceOf,
  useWriteDecentralizedBettingClaimWinnings,
  useWriteDecentralizedBettingCreateEvent,
  useWriteDecentralizedBettingPlaceBet,
  useWriteDecentralizedBettingResolveEvent,
  useWriteSocialOracleDetermineCorrectAnswer,
  useWriteSocialOracleSubmitAnswer,
  useWriteStakeContractStake,
  useWriteTestTokensIncreaseAllowance,
  useWriteTestTokensMint,
} from "~/generated";
import { Button } from "~/components/ui/button";
import { useAccount, useChainId } from "wagmi";
import { Address, formatEther, parseEther } from "viem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";

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
  "arb-sepolia": {
    TEST_StakingToken: "0x6c85Eb19F92e5D43e676a0b945B044397E9d91E9",
    BetStakingToken: "0x5CeC78AcbBe7f0C40002211D92EF13aa5a2423a5",
    MatchNFT: "0x9F8c092119E17020D8FCed06622370bDd83E73A0",
    TEST_LiqudityToken: "0xf9124162351f9923f4ef509F703aCA21d159Dc26",
    TreasuryContract: "0x0822b8f1a3A9DA5c58d33631f6D8f426e2856d50",
    StakeContract: "0xa83C10535e45DA8d746F651b7a561E90FCD7ad20",
    SocialOracle: "0x0d1B990935DF3E2Bc68762CF5Ea525FCfA296877",
    DecentralizedBetting: "0x154B9B163dEf5fA89AF0E589EB881Eff1f032Fc0",
  },
  spicy: {
    BetStakingToken: "0x2B2D005ABc4dc4aaeAa28F41a02f89DaB42F9169",
    MatchNFT: "0x3bDAE92ec59Fb9f3f7A0175a762936B2bBc86BBe",
    TEST_LiqudityToken: "0xFe14B387DDA1a8BC9Dee174D49EFac6AF358c1b4",
    TEST_StakingToken: "0x1b3BFeac5C03be29aeB96Be5513640BC82969a79",
    TreasuryContract: "0x1ebEA0132b75A4044eF46f719733eba1c6fdEead",
    StakeContract: "0x1F29897D562C94E45fE27eFdd378A201daCaD4D8",
    SocialOracle: "0xd3472c15936a693e08C13C633F8eF55515Ebf90C",
    DecentralizedBetting: "0x78B69f6ca38c049dDa019Afb6a9787E3d74caf16",
  },
} as const;

export const GET_CONTRACT_ADDRESSES = (chain: number) => {
  console.log("chain", chain);
  switch (chain) {
    case 84532:
      return ADDRESSES["base-sepolia"];
    case 421614:
      return ADDRESSES["arb-sepolia"];
    case 88882:
      return ADDRESSES["spicy"];
    default:
      return ADDRESSES["base-sepolia"];
  }
};

export const GET_OPENSEA_NETWORK_SLUG = (chain: number) => {
  switch (chain) {
    case 84532:
      return "base-sepolia";
    case 421614:
      return "arbitrum-sepolia";
    case 88882:
      return null;
    default:
      return "testnets";
  }
};

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
  const chainId = useChainId();

  if (!account.address || !chainId) return null;
  return (
    <div>
      <h1>Matches</h1>
      {MATCH_IDS.map((id) => (
        <MatchNFT
          key={id}
          id={id}
          address={account.address}
          chainId={chainId}
        />
      ))}
    </div>
  );
};

export const useMatch = (props: { id: number; network: number }) => {
  const { id, network } = props;
  const { data } = useReadDecentralizedBettingEvents({
    address: GET_CONTRACT_ADDRESSES(network).DecentralizedBetting,
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

export const MatchNFT = ({
  id,
  address,
  chainId,
}: {
  id: number;
  address: Address;
  chainId: number;
}) => {
  const queryClient = useQueryClient();
  const mappedMatch = useMatch({
    id,
    network: chainId,
  });
  const bet = useWriteDecentralizedBettingPlaceBet();
  const staking = useReadTestTokensBalanceOf({
    address: GET_CONTRACT_ADDRESSES(chainId).BetStakingToken,
    args: [address],
  });
  const liquidityTokenALlowance = useReadTestTokensAllowance({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
    args: [address, GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting],
  });

  const handleBet = async (decision: boolean) => {
    bet.writeContractAsync({
      address: GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
      args: [BigInt(id), decision, BigInt(1000000000000000000)],
    });
    await queryClient.invalidateQueries();
  };
  const oracle = useWriteSocialOracleSubmitAnswer();
  const determineCorrectAnswer = useWriteSocialOracleDetermineCorrectAnswer();
  const resolveEvent = useWriteDecentralizedBettingResolveEvent();
  const handleOracle = async (decision: boolean) => {
    oracle.writeContractAsync({
      address: GET_CONTRACT_ADDRESSES(chainId).SocialOracle,
      args: [BigInt(id), decision],
    });
    await queryClient.invalidateQueries();
  };

  const allowanceLiquidty = useReadTestTokensAllowance({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
    args: [address, GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting],
  });
  const allowanceStaking = useReadTestTokensAllowance({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
    args: [address, GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting],
  });
  const increaseAllowanceLiquidty = useWriteTestTokensIncreaseAllowance();

  const betStatus = useReadDecentralizedBettingBets({
    address: GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
    args: [BigInt(id), address],
  });
  const claim = useWriteDecentralizedBettingClaimWinnings();
  const tokenUri = useReadMatchNftTokenUri({
    address: GET_CONTRACT_ADDRESSES(chainId).MatchNFT,
    args: [BigInt(id)],
  });

  const tokenMetadata = useQuery({
    queryKey: ["matchNFT", id],
    enabled: !!tokenUri?.data,
    queryFn: async () => {
      if (!tokenUri?.data) throw new Error("No token URI");
      console.log("tokenUri", tokenUri);
      const data = await fetch(tokenUri?.data);
      const parsed = (await data.json()) as {
        name: string;
        description: string;
        image: string;
      };
      return parsed;
    },
  });

  console.log("betStatus", tokenMetadata.data);

  if (!mappedMatch?.timestamp) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>Match NFT {id}</h1>
        </CardTitle>
        <CardDescription>
          {GET_OPENSEA_NETWORK_SLUG(chainId) && (
            <Link
              href={
                `https://testnets.opensea.io/assets/${GET_OPENSEA_NETWORK_SLUG(chainId)}/${GET_CONTRACT_ADDRESSES(chainId).MatchNFT}/${id}` ??
                ""
              }
              target="_blank"
            >
              View on OpenSea
            </Link>
          )}
          <p>
            {tokenMetadata?.data?.name ?? "Loading"} -{" "}
            {tokenMetadata?.data?.description ?? "Loading"}
          </p>
        </CardDescription>
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
            {betStatus?.data?.[0] > 0 &&
              mappedMatch.outcome === betStatus?.data?.[1] && (
                <Button
                  onClick={async () => {
                    claim.writeContractAsync({
                      address:
                        GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
                      args: [BigInt(id)],
                    });
                    await queryClient.invalidateQueries();
                  }}
                >
                  Claim winnings
                </Button>
              )}
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
                                GET_CONTRACT_ADDRESSES(chainId)
                                  .TEST_LiqudityToken,
                              args: [
                                GET_CONTRACT_ADDRESSES(chainId)
                                  .DecentralizedBetting,
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
                        address: GET_CONTRACT_ADDRESSES(chainId).SocialOracle,
                        args: [BigInt(id)],
                      });
                      console.log("determineCorrectAnswer");
                    } catch (e) {
                      console.error(e);
                    }
                    resolveEvent.writeContractAsync({
                      address:
                        GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
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
  const chainId = useChainId();
  if (!chainId) return null;
  return (
    <Button
      onClick={async () => {
        writeDecentralizedBettingCreateEvent.writeContractAsync({
          address: GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
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
  const chainId = useChainId();

  if (!account.address || !chainId) return null;
  return (
    <div>
      <TestnetTokens address={account.address} chainId={chainId} />
      <StakedTokens address={account.address} chainId={chainId} />
      <MatchNFTs />
    </div>
  );
};

export const TestnetTokens = (props: { address: Address; chainId: number }) => {
  const { chainId } = props;
  const mintStakingToken = useWriteTestTokensMint();
  const mintLiquidtyToken = useWriteTestTokensMint();
  const balanceStaking = useReadTestTokensBalanceOf({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
    args: [props.address],
  });
  const balanceLiqudity = useReadTestTokensBalanceOf({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
    args: [props.address],
  });
  const queryClient = useQueryClient();

  return (
    <Card>
      <CardHeader>
        <p>
          Balance staking token:{" "}
          {formatEther(balanceStaking?.data ?? BigInt(0)).toString()}
        </p>
        <p>
          Balance liquidty token:{" "}
          {formatEther(balanceLiqudity?.data ?? BigInt(0)).toString()}
        </p>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={async () => {
            mintLiquidtyToken.writeContractAsync({
              address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
              args: [props.address, BigInt("500000000000000000000")],
            });
            mintStakingToken.writeContractAsync({
              address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
              args: [props.address, BigInt("500000000000000000000")],
            });
            await queryClient.invalidateQueries();
          }}
        >
          Mint testnet tokens
        </Button>
      </CardFooter>
    </Card>
  );
};

export const StakedTokens = (props: { address: Address; chainId: number }) => {
  const { chainId } = props;
  const queryClient = useQueryClient();
  const stake = useWriteStakeContractStake();
  const balance = useReadTestTokensBalanceOf({
    address: GET_CONTRACT_ADDRESSES(chainId).BetStakingToken,
    args: [props.address],
  });
  const allowanceLiquidty = useReadTestTokensAllowance({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
    args: [props.address, GET_CONTRACT_ADDRESSES(chainId).StakeContract],
  });
  const allowanceStaking = useReadTestTokensAllowance({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
    args: [props.address, GET_CONTRACT_ADDRESSES(chainId).StakeContract],
  });
  const increaseAllowanceLiquidty = useWriteTestTokensIncreaseAllowance();
  const increaseAllowanceStaking = useWriteTestTokensIncreaseAllowance();

  return (
    <Card>
      <CardHeader>
        <div>Staked: {formatEther(balance?.data ?? BigInt(0)).toString()}</div>
      </CardHeader>
      <CardFooter>
        <Button
          disabled={
            allowanceLiquidty?.data?.toString() === "0" ||
            allowanceStaking?.data?.toString() === "0"
          }
          onClick={async () => {
            stake.writeContractAsync({
              address: GET_CONTRACT_ADDRESSES(chainId).StakeContract,
              args: [BigInt(1000000000000000000), BigInt(1000000000000000000)],
            });
            await queryClient.invalidateQueries();
          }}
        >
          Stake
        </Button>
        {allowanceStaking?.data?.toString() === "0" && (
          <Button
            onClick={async () => {
              increaseAllowanceStaking.writeContractAsync({
                address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
                args: [
                  GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                  BigInt(1000000000000000000),
                ],
              });
              increaseAllowanceLiquidty.writeContractAsync({
                address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
                args: [
                  GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                  BigInt(1000000000000000000),
                ],
              });
              await queryClient.invalidateQueries();
            }}
          >
            Increase allowance for staking (currently{" "}
            {allowanceStaking?.data?.toString()})
          </Button>
        )}
        <CreateMatchComponent />
      </CardFooter>
    </Card>
  );
};
