"use client";
import {
  useReadDecentralizedBettingEvents,
  useReadMatchNftBalanceOf,
  useReadMatchNftTokenUri,
  useSimulateDecentralizedBettingCreateEvent,
  useWriteDecentralizedBettingCreateEvent,
} from "~/generated";
import { Button } from "~/components/ui/button";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const ADDRESSES = {
  "base-sepolia": {
    MatchNFT: "0x37B8a87BaAae627D0533154370501B91F6b272b9",
    MockStakeContract: "0x2CE091997aD20529f9eFFa9F338a6fEbEb8607a7",
    SocialOracle: "0x172b630BA82e85A32876617C273FbB28A37C06E9",
    DecentralizedBetting: "0x9A703a33b027Bc843e260617A02aDc73f1777411",
  },
} as const;

const MATCH_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const MatchNFTs = () => {
  return (
    <div>
      <h1>Match NFTs</h1>
      {MATCH_IDS.map((id) => (
        <MatchNFT key={id} id={id} />
      ))}
    </div>
  );
};

export const MatchNFT = ({ id }: { id: number }) => {
  const { data } = useReadDecentralizedBettingEvents({
    address: ADDRESSES["base-sepolia"].DecentralizedBetting,
    args: [BigInt(id)],
  });

  if (!data) return null;
  if (data?.[0] === BigInt(0)) return null;
  return (
    <div>
      <h1>Match NFT {id}</h1>
      <p>events: {JSON.stringify(data)}</p>
    </div>
  );
};

export const CreateMatchComponent = () => {
  const timestamp = Date.now();
  const writeDecentralizedBettingCreateEvent =
    useWriteDecentralizedBettingCreateEvent();

  return (
    <Button
      onClick={() => {
        writeDecentralizedBettingCreateEvent.writeContractAsync({
          address: ADDRESSES["base-sepolia"].DecentralizedBetting,
          args: [BigInt(timestamp)],
        });
      }}
    >
      Create match
    </Button>
  );
};
