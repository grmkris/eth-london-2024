// MockStakeContractModule.ts
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockStakeContractModule = buildModule(
  "MockStakeContractModule",
  (moduleBuilder) => {
    const mockStakeContract = moduleBuilder.contract("MockStakeContract", []);

    return { mockStakeContract };
  },
);

export default MockStakeContractModule;
