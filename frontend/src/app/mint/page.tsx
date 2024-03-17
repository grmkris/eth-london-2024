/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { CardContent } from "~/components/ui/card";

import { Card, CardHeader } from "~/components/ui/card";
import { TestnetTokens } from "~/app/_components/MatchNFTs";
import { useAccount, useChainId, usePublicClient } from "wagmi";

export default function Minting() {
  const chainId = useChainId();
  const account = useAccount();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="min-w-[50%]">
        <CardHeader>
          <h1>Mint Testnet Tokens to stake and participate as Oracle</h1>
        </CardHeader>
        <CardContent>
          {account.address && (
            <TestnetTokens address={account.address} chainId={chainId} />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
