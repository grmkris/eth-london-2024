"use client";
import { Label } from "~/components/ui/label";
import { CardContent, CardHeader, Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useWriteDecentralizedBettingCreateEvent } from "~/generated";
import { GET_CONTRACT_ADDRESSES } from "~/app/_components/MatchNFTs";
import { useState } from "react";
import { useChainId } from "wagmi";
import { TrendingUpIcon } from "lucide-react";

export default function CreateMatch() {
  const writeDecentralizedBettingCreateEvent =
    useWriteDecentralizedBettingCreateEvent();
  const chainid = useChainId();
  const [timestamp, setTimestamp] = useState<number>(); // [1
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimestamp(new Date(e.target.value).getTime() / 1000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h3 className="text-lg font-medium leading-none">Create Match</h3>
        </CardHeader>
        <CardContent className="space-y-4">
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
            <Label className="text-sm" htmlFor="stake-assets">
              Team A
            </Label>
            <Input
              className="w-[50%] text-secondary"
              id="team-a"
              placeholder="Team A"
            />
            <Label className="text-sm" htmlFor="stake-assets">
              Team A Odds
            </Label>
            <Input
              className="w-[50%] text-secondary"
              id="team-a-odds"
              placeholder="Team A Odds"
            />
          </div>
          <div className="flex flex-row justify-between">
            <Label className="text-sm" htmlFor="stake-assets">
              Team B
            </Label>
            <Input
              className="w-[50%] text-secondary"
              id="team-b"
              placeholder="Team B"
            />
            <Label className="text-sm" htmlFor="stake-assets">
              Team A Odds
            </Label>
            <Input
              className="w-[50%] text-secondary"
              id="team-a-odds"
              placeholder="Team A Odds"
            />
          </div>
          <Button
            isLoading={writeDecentralizedBettingCreateEvent.isPending}
            disabled={writeDecentralizedBettingCreateEvent.isPending}
            loadingText="Creating match"
            className="w-[100%]"
            onClick={async () => {
              await writeDecentralizedBettingCreateEvent
                .writeContractAsync({
                  address: GET_CONTRACT_ADDRESSES(chainid).DecentralizedBetting,
                  args: [
                    BigInt(
                      timestamp ? timestamp.toString() : Date.now().toString(),
                    ),
                  ],
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
    </main>
  );
}
