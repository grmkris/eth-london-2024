/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { CardContent } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Card, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  ADDRESSES,
  GET_CONTRACT_ADDRESSES,
  MatchNFTs,
  StakedTokens,
} from "~/app/_components/MatchNFTs";
import {
  useReadTestTokensBalanceOf,
  useWriteStakeContractStake,
  useWriteTestTokensMint,
} from "~/generated";
import { useQueryClient } from "@tanstack/react-query";
import { useAccount, useChainId } from "wagmi";

export default function Staking() {
  const stake = useWriteStakeContractStake();
  const chainId = useChainId();
  const account = useAccount();
  const queryClient = useQueryClient();
  const mintStakingToken = useWriteTestTokensMint();
  const mintLiquidtyToken = useWriteTestTokensMint();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Mint Testnet Tokens to stake and participate as Oracle</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Button
              onClick={async () => {
                account.address &&
                await mintLiquidtyToken.writeContractAsync({
                  address: GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
                  args: [account.address, BigInt("500000000000000000000")],
                });
                account.address &&
                await mintStakingToken.writeContractAsync({
                  address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
                  args: [account.address, BigInt("500000000000000000000")],
                });
                await queryClient.invalidateQueries();
              }}
            >
              Mint testnet tokens
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
