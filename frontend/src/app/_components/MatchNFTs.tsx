"use client";
import {
  useReadDecentralizedBettingEvents,
  useReadMatchNftBalanceOf,
  useReadMatchNftTokenUri,
  useReadTestTokensBalanceOf,
  useSimulateDecentralizedBettingCreateEvent,
  useWriteDecentralizedBettingCreateEvent,
  useWriteTestTokensMint,
} from "~/generated";
import { Button } from "~/components/ui/button";
import { useAccount } from "wagmi";
import { Address } from "viem";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const ADDRESSES = {
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

export const TestnetTokens = () => {
  const account = useAccount();

  if (!account) return null;
  return <MintTestnetTokens address={account.address} />;
};

export const MintTestnetTokens = (props: { address: Address }) => {
  const mintStakingToken = useWriteTestTokensMint();
  const mintLiquidtyToken = useWriteTestTokensMint();
  const balanceStaking = useReadTestTokensBalanceOf({
    address: ADDRESSES["base-sepolia"].TEST_StakingToken,
    args: [props.address],
  });
  const balanceLiqudity = useReadTestTokensBalanceOf({
    address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
    args: [props.address],
  });

  return (
    <div>
      balanceStaking: {balanceStaking?.data?.toString()}{" "}
      <Button
        onClick={() => {
          mintStakingToken.writeContractAsync({
            address: ADDRESSES["base-sepolia"].TEST_StakingToken,
            args: [props.address, BigInt(1000000000000000000)],
          });
        }}
      >
        Mint staking token
      </Button>
      balanceLiqudity: {balanceLiqudity?.data?.toString()}{" "}
      <Button
        onClick={() => {
          mintLiquidtyToken.writeContractAsync({
            address: ADDRESSES["base-sepolia"].TEST_LiqudityToken,
            args: [props.address, BigInt(1000000000000000000)],
          });
        }}
      >
        Mint liq token
      </Button>
    </div>
  );
};
