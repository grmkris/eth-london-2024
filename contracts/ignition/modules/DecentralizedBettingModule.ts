import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DecentralizedBettingModule = buildModule(
  "DecentralizedBettingModule",
  (moduleBuilder) => {
    const matchNFT = moduleBuilder.contract("MatchNFT", [
      "https://example.com/api/nft/",
    ]);

    const stakeContract = moduleBuilder.contract("MockStakeContract", []);

    const socialOracle = moduleBuilder.contract("SocialOracle", [
      stakeContract,
    ]);

    // Deploy the DecentralizedBetting contract with the specified addresses.
    const decentralizedBetting = moduleBuilder.contract(
      "DecentralizedBetting",
      [socialOracle, matchNFT],
    );

    return { decentralizedBetting, matchNFT, socialOracle, stakeContract };
  },
);

export default DecentralizedBettingModule;
