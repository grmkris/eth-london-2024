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
    MatchNFT: "0x3301d66aE591355D67Cd9987aEfcA914004A65BD",
    MockStakeContract: "0x65e63f6Ae6f5758cFCa2F37F3F76013bb7154382",
    SocialOracle: "0x2b1DF9f0eC7A6b03d1B664871c667ba718404ee1",
    DecentralizedBetting: "0x62A6f3DA5357F0E541F46a2B02a23c430cDECde5",
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
