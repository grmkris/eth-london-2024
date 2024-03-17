import { api } from "~/trpc/server";

import { ContractInteractions } from "~/app/_components/MatchNFTs";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <w3m-button />
      <ContractInteractions />
    </main>
  );
}
