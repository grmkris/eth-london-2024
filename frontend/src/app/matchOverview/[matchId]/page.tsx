/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import {
  useWriteDecentralizedBettingPlaceBet,
  useReadDecentralizedBettingEvents,
} from "~/generated";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "~/components/ui/button";
import { useMemo } from "react";

const ADDRESSES = {
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

export default function MatchDetailView({
  params,
}: {
  params: { matchId: string };
}) {
  console.log(params.matchId);

  const bet = useWriteDecentralizedBettingPlaceBet();
  const queryClient = useQueryClient();

  const handleBet = async (decision: boolean) => {
    bet
      .writeContractAsync({
        address: ADDRESSES["base-sepolia"].DecentralizedBetting,
        args: [BigInt(params.matchId), decision, BigInt(1000000000000000000)],
      })
      .catch((e) => console.log(e));
    await queryClient.invalidateQueries();
  };

  const m = useMatch(Number(params.matchId));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Match Overview</h1>
        </CardHeader>
        <CardContent className="min-w-full">
          <p>Here vote {m?.outcome} a</p>
          <div className="flex flex-row">
            <Button className="min-w-[40%]" onClick={() => handleBet(true)}>Bet true</Button>
            <Button className="min-w-[40%]" onClick={() => handleBet(false)}>Bet false</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
