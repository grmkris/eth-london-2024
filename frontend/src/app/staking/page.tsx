/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { CardContent } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Card, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { useWriteDecentralizedBettingCreateEvent } from "~/generated";
import { ADDRESSES } from "~/app/_components/MatchNFTs";
import { useWriteStakeContractStake } from "~/generated";
import { useQueryClient } from "@tanstack/react-query";

export default function Staking() {
  const stake = useWriteStakeContractStake();
  const queryClient = useQueryClient();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
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
            <div className="flex flex-row">
              <Input
                className="w-[50%]"
                id="lp-tokens"
                placeholder="Enter amount"
                type="number"
              />
              <p>USDc</p>
            </div>
            <Button
              className="w-[50%]"
              onClick={async () => {
                stake
                  .writeContractAsync({
                    address: ADDRESSES["base-sepolia"].StakeContract,
                    args: [
                      BigInt(1000000000000000000),
                      BigInt(1000000000000000000),
                    ],
                  })
                  .catch((e) => console.error(e));
                await queryClient.invalidateQueries();
              }}
            >
              Create Match and start receiving bets
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
