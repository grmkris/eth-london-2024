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
    MatchNFT: "0x01529c3159974eB4E1F036C754d5FaEfb3b22D48",
    MockStakeContract: "0x74D3Af184243DE890722F33100DE0e93d3E28744",
    SocialOracle: "0x7fBEe256fcCea5e895A4F286419aD5c61018A551",
    DecentralizedBetting: "0x0Ec0938aE1dd07454133B09bc93F23344CBBf4C1",
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
