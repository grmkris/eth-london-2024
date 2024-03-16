"use client";
import { Label } from "~/components/ui/label";
import { CardContent, CardHeader, Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useWriteDecentralizedBettingCreateEvent } from "~/generated";
import { ADDRESSES } from "~/app/_components/MatchNFTs";
import { useState } from "react";


export default function CreateMatch() {
    const writeDecentralizedBettingCreateEvent =
    useWriteDecentralizedBettingCreateEvent();

    const [timeStamp, setTimestamp] = useState(new Date().getTime() / 1000);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Create Match</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-row justify-between">
            <Label className="text-sm" htmlFor="stake-assets">
              Match Name
            </Label>
            <Input
              className="w-[50%]"
              id="match-name"
              placeholder="Match Name"
              type="string"
            />
          </div>
          <div className="flex flex-row justify-between">
            <Label className="text-sm" htmlFor="stake-assets">
              Match Date
            </Label>
            <Input
              className="w-[50%]"
              id="match-name"
              placeholder="Match Name"
              type="date"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="min-w-[40%]">
              <Label className="text-sm">Team A</Label>
              <Input placeholder="Name Team A" />
            </div>
            <div className="min-w-[40%]">
              <Label className="text-sm">Team B</Label>
              <Input placeholder="Name Team B" />
            </div>
          </div>
          <p>Team initial distribution</p>
          <Button
            className="w-[50%]"
            onClick={() => {
              writeDecentralizedBettingCreateEvent
                .writeContractAsync({
                  address: ADDRESSES["base-sepolia"].DecentralizedBetting,
                  args: [BigInt(timeStamp.toString())],
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            Stake and Receive lpToken
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
