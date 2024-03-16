// SocialOracleModule.ts
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SocialOracleModule = buildModule(
  "SocialOracleModule",
  (moduleBuilder) => {
    const stakeContract = moduleBuilder.contract("MockStakeContract", []);

    const socialOracle = moduleBuilder.contract("SocialOracle", [
      stakeContract,
    ]);

    return { socialOracle };
  },
);

export default SocialOracleModule;
