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
import { useAccount, useChainId, usePublicClient } from "wagmi";
import { Address, formatEther, parseEther } from "viem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { TrendingUpIcon } from "lucide-react";
import { MatchNFT } from "~/app/_components/MatchNFT";
import { useRouter } from "next/navigation";
import { waitForTransactionReceipt } from "viem/actions";
import { toast } from "sonner";

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
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <TrendingUpIcon className="h-6 w-6" />
          <h3 className="text-lg font-medium leading-none">Open Matches</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col-reverse space-y-2">
          {MATCH_IDS.map((id) => (
            <MatchNFT
              key={id}
              id={id}
              address={account.address}
              chainId={chainId}
            />
          ))}
        </div>
      </CardContent>
    </Card>
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
  const pc = usePublicClient();
  const mint = useMutation({
    onError: (e) => {
      console.error(e);
      toast.error(JSON.stringify(e));
    },
    mutationFn: async () => {
      const tx = await mintLiquidtyToken.writeContractAsync({
        address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
        args: [props.address, BigInt("500000000000000000000")],
      });

      try {
        await waitForTransactionReceipt(pc, { hash: tx });
      } catch (e) {
        console.error(e);
      }

      const tx2 = await mintStakingToken.writeContractAsync({
        address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
        args: [props.address, BigInt("500000000000000000000")],
      });

      await waitForTransactionReceipt(pc, { hash: tx2 });
      toast.success(`Test tokens minted, txhash: ${tx2}`);
      await queryClient.invalidateQueries();
    },
  });
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
          onClick={mint.mutate}
          loadingText="Minting"
          isLoading={mint.isPending}
          disabled={mint.isPending}
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
            increaseAllowanceLiquidty.isPending ||
            increaseAllowanceStaking.isPending ||
            stake.isPending
          }
          isLoading={
            increaseAllowanceLiquidty.isPending ||
            increaseAllowanceStaking.isPending ||
            stake.isPending
          }
          loadingText="Staking"
          onClick={async () => {
            if (allowanceStaking?.data?.toString() === "0") {
              await increaseAllowanceStaking.writeContractAsync({
                address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
                args: [
                  GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                  BigInt(1000000000000000000000000),
                ],
              });
              await increaseAllowanceLiquidty.writeContractAsync({
                address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
                args: [
                  GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                  BigInt(1000000000000000000000000),
                ],
              });
            }

            await stake.writeContractAsync({
              address: GET_CONTRACT_ADDRESSES(chainId).StakeContract,
              args: [BigInt(1000000000000000000), BigInt(1000000000000000000)],
            });
            await queryClient.invalidateQueries();
          }}
        >
          Stake
        </Button>
        <Link href={`/createMatch`}>
          <Button>Create Match</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
