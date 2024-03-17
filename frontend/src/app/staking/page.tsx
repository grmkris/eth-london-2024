/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { CardContent } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Card, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Address, formatEther, parseEther } from "viem";
import {
  ADDRESSES,
  GET_CONTRACT_ADDRESSES,
  MatchNFTs,
  StakedTokens,
} from "~/app/_components/MatchNFTs";
import {
  useReadTestTokensBalanceOf,
  useWriteStakeContractStake,
  useWriteTestTokensIncreaseAllowance,
  useReadTestTokensAllowance,
} from "~/generated";
import { useQueryClient } from "@tanstack/react-query";
import { useAccount, useChainId } from "wagmi";
import { useState } from "react";

export default function Staking() {
  const stake = useWriteStakeContractStake();
  const chainId = useChainId();
  const account = useAccount();
  const queryClient = useQueryClient();
  const accountAddress = account.address ?? "0x000";
  const increaseAllowanceLiquidty = useWriteTestTokensIncreaseAllowance();
  const increaseAllowanceStaking = useWriteTestTokensIncreaseAllowance();
  const allowanceStaking = useReadTestTokensAllowance({
    address: GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
    args: [accountAddress, GET_CONTRACT_ADDRESSES(chainId).StakeContract],
  });
  const [amount, setAmount] = useState(0);
  const balance = useReadTestTokensBalanceOf({
    address: GET_CONTRACT_ADDRESSES(chainId).BetStakingToken,
    args: [accountAddress],
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Stake Tokens to Become a social Oracle</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Label className="text-sm" htmlFor="stake-assets">
              Provide USDc, earn LP tokens. Use LP tokens to open matches to bet
              on.
            </Label>
            <div>
              Staked: {formatEther(balance?.data ?? BigInt(0)).toString()}
            </div>
            <div className="flex flex-row">
              <Input
                className="w-[50%] text-white"
                id="lp-tokens"
                placeholder="Enter amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
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
                      address:
                        GET_CONTRACT_ADDRESSES(chainId).TEST_StakingToken,
                      args: [
                        GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                        BigInt(amount * 1000000000000000000000000),
                      ],
                    });
                    await increaseAllowanceLiquidty.writeContractAsync({
                      address:
                        GET_CONTRACT_ADDRESSES(chainId).TEST_LiqudityToken,
                      args: [
                        GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                        BigInt(amount * 1000000000000000000000000),
                      ],
                    });
                  }

                  await stake.writeContractAsync({
                    address: GET_CONTRACT_ADDRESSES(chainId).StakeContract,
                    args: [
                      BigInt(amount * 1000000000000000000),
                      BigInt(amount * 1000000000000000000),
                    ],
                  });
                  await queryClient.invalidateQueries();
                }}
              >
                Stake
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
  //<MatchNFTs />
}
