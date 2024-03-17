/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import {
  useWriteDecentralizedBettingPlaceBet,
  useReadDecentralizedBettingEvents,
  useWriteTestTokensIncreaseAllowance,
} from "~/generated";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "~/components/ui/button";
import React, { useMemo } from "react";
import { GET_CONTRACT_ADDRESSES, useMatch } from "~/app/_components/MatchNFTs";
import { useAccount, useChainId } from "wagmi";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";

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

export default function MatchDetailView({
  params,
}: {
  params: { matchId: string };
}) {
  console.log(params.matchId);
  const chainid = useChainId();
  const { authToken, isAuthenticated, primaryWallet, network } =
    useDynamicContext();
  const bet = useWriteDecentralizedBettingPlaceBet();
  const queryClient = useQueryClient();
  const increaseAllowanceLiquidty = useWriteTestTokensIncreaseAllowance();

  const handleBet = async (decision: boolean) => {
    const chain = chainid ?? network;
    console.log(chain);
    await increaseAllowanceLiquidty.writeContractAsync({
      address: GET_CONTRACT_ADDRESSES(chain).TEST_LiqudityToken,
      args: [
        GET_CONTRACT_ADDRESSES(chain).DecentralizedBetting,
        BigInt(1000000000000000000),
      ],
    });
    bet
      .writeContractAsync({
        address: GET_CONTRACT_ADDRESSES(chain).DecentralizedBetting,
        args: [BigInt(params.matchId), decision, BigInt(1000000000000000000)],
      })
      .catch((e) => console.log(e));
    await queryClient.invalidateQueries();
  };

  const m = useMatch({
    id: Number(params.matchId),
    network: chainid,
  });
  const { address } = useAccount();

  console.log({ authToken, isAuthenticated, primaryWallet, network });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <w3m-button />
      <DynamicWidget innerButtonComponent={<Button>Social login</Button>} />
      <div>
        {isAuthenticated ? <p>Authenticated</p> : <p>Not authenticated</p>}
        <p>{address}</p>
      </div>
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Match Overview</h1>
        </CardHeader>
        <CardContent className="min-w-full">
          <p>Here vote {m?.outcome} a</p>
          <div className="flex flex-row">
            <Button className="min-w-[40%]" onClick={() => handleBet(true)}>
              Bet true
            </Button>
            <Button className="min-w-[40%]" onClick={() => handleBet(false)}>
              Bet false
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
