import { MatchNFTs } from "~/app/_components/MatchNFTs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <w3m-button />
      <Card>
        <CardHeader>
          Welcome to the Decentralized Betting App Start by minting testnet
          tokens and staking them to be a social oracle or create a match or bet
        </CardHeader>
        <CardContent>
          <Link href="/mint">
            <Button>Mint testnet tokens</Button>
          </Link>
          <Link href="/staking">
            <Button>Stake tokens to be social oracle and earn rewards</Button>
          </Link>
          <Link href={`/createMatch`}>
            <Button>Create Match</Button>
          </Link>
        </CardContent>
      </Card>
      <MatchNFTs />
    </main>
  );
}
