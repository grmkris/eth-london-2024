"use client";
import { Label } from "~/components/ui/label";
import { CardContent, CardHeader, Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useWriteDecentralizedBettingCreateEvent } from "~/generated";
import {
  ADDRESSES,
  GET_CONTRACT_ADDRESSES,
  MatchNFTs,
} from "~/app/_components/MatchNFTs";
import { useState } from "react";
import { useChainId } from "wagmi";

export default function CreateMatch() {
  const writeDecentralizedBettingCreateEvent =
    useWriteDecentralizedBettingCreateEvent();
  const chainid = useChainId();
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimestamp(new Date(e.target.value).getTime() / 1000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary">
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
              className="w-[50%] text-secondary"
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
              className="w-[50%] text-secondary"
              id="match-name"
              placeholder="Match Name"
              type="date"
              onChange={handleDateChange}
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="min-w-[40%]">
              <Label className="text-sm">Team A</Label>
              <Input className="text-secondary" placeholder="Name Team A" />
            </div>
            <div className="min-w-[40%]">
              <Label className="text-sm">Team B</Label>
              <Input className="text-secondary" placeholder="Name Team B" />
            </div>
          </div>
          <p>Team initial distribution</p>
          <Button
            isLoading={writeDecentralizedBettingCreateEvent.isPending}
            disabled={writeDecentralizedBettingCreateEvent.isPending}
            loadingText="Creating match"
            className="w-[50%]"
            onClick={async () => {
              await writeDecentralizedBettingCreateEvent
                .writeContractAsync({
                  address: GET_CONTRACT_ADDRESSES(chainid).DecentralizedBetting,
                  args: [BigInt(Date.now())],
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            Create a match
          </Button>
        </CardContent>
      </Card>
      <MatchNFTs />
    </main>
  );
}
