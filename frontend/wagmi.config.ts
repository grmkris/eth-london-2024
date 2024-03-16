import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { erc20Abi } from "viem";
import { MatchNFTABI } from "~/lib/contracts/MatchNFTABI";
import { DecentralizedBettingABI } from "~/lib/contracts/DecentralizedBettingABI";
import { SocialOracleABI } from "~/lib/contracts/SocialOracleABI";
import { TestTokensABI } from "~/lib/contracts/TestTokensABI";
import { StakingABI } from "~/lib/contracts/StakingABI";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "matchNFT",
      abi: MatchNFTABI,
    },
    {
      name: "DecentralizedBetting",
      abi: DecentralizedBettingABI,
    },
    {
      name: "socialOracle",
      abi: SocialOracleABI,
    },
    {
      name: "testTokens",
      abi: TestTokensABI,
    },
    {
      name: "stakeContract",
      abi: StakingABI,
    },
  ],
  plugins: [react()],
});
