import { Address, formatEther } from "viem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  useReadDecentralizedBettingBets,
  useReadMatchNftTokenUri,
  useReadTestTokensAllowance,
  useReadTestTokensBalanceOf,
  useWriteDecentralizedBettingClaimWinnings,
  useWriteDecentralizedBettingCreateEvent,
  useWriteDecentralizedBettingPlaceBet,
  useWriteDecentralizedBettingResolveEvent,
  useWriteSocialOracleDetermineCorrectAnswer,
  useWriteSocialOracleSubmitAnswer,
  useWriteTestTokensIncreaseAllowance,
} from "~/generated";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useChainId, usePublicClient } from "wagmi";
import {
  GET_CONTRACT_ADDRESSES,
  GET_OPENSEA_NETWORK_SLUG,
  useMatch,
} from "~/app/_components/MatchNFTs";
import { waitForTransactionReceipt } from "viem/actions";
import { toast } from "sonner";

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
  const pc = usePublicClient();

  const handleBet = useMutation({
    onError: (e) => {
      console.error(e);
      toast.error(JSON.stringify(e));
    },
    mutationFn: async (decision: boolean) => {
      const tx = await increaseAllowanceLiquidty.writeContractAsync({
        address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
        args: [
          GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
          BigInt(1000000000000000000),
        ],
      });
      await waitForTransactionReceipt(pc, {
        hash: tx,
      });

      const tx2 = await bet.writeContractAsync({
        address: GET_CONTRACT_ADDRESSES(chainId).DecentralizedBetting,
        args: [BigInt(id), decision, BigInt(1000000000000000000)],
      });
      await waitForTransactionReceipt(pc, {
        hash: tx2,
      });

      toast.success(`Bet placed, txhash: ${tx2}`);
      await queryClient.invalidateQueries();
    },
  });

  const oracle = useWriteSocialOracleSubmitAnswer();
  const determineCorrectAnswer = useWriteSocialOracleDetermineCorrectAnswer();
  const resolveEvent = useWriteDecentralizedBettingResolveEvent();
  const handleOracle = async (decision: boolean) => {
    await oracle.writeContractAsync({
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
          <h1>Match {id}</h1>
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
          <br />
          <Link href={`/matchOverview/${id}`} target="_blank">
            View match
          </Link>
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
                    await claim.writeContractAsync({
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
                    <Button
                      isLoading={handleBet.isPending}
                      disabled={handleBet.isPending}
                      loadingText="Bet is pending..."
                      onClick={() => handleBet.mutate(true)}
                    >
                      First team wins
                    </Button>
                    <Button
                      isLoading={handleBet.isPending}
                      disabled={handleBet.isPending}
                      loadingText="Bet is pending..."
                      onClick={() => handleBet.mutate(false)}
                    >
                      Second team wins
                    </Button>
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
                <Button
                  isLoading={oracle.isPending}
                  disabled={oracle.isPending}
                  loadingText="Bet is pending..."
                  onClick={() => handleOracle(true)}
                >
                  Resolve true
                </Button>
                <Button
                  isLoading={oracle.isPending}
                  disabled={oracle.isPending}
                  loadingText="Bet is pending..."
                  onClick={() => handleOracle(false)}
                >
                  Resolve false
                </Button>
                <Button
                  onClick={async () => {
                    try {
                      await determineCorrectAnswer.writeContractAsync({
                        address: GET_CONTRACT_ADDRESSES(chainId).SocialOracle,
                        args: [BigInt(id)],
                      });
                      console.log("determineCorrectAnswer");
                    } catch (e) {
                      console.error(e);
                    }
                    await resolveEvent.writeContractAsync({
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
