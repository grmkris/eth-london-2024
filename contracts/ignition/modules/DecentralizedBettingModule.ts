import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DecentralizedBettingModule = buildModule(
  "DecentralizedBettingModule",
  (moduleBuilder) => {
    const TESTliquidtyToken = moduleBuilder.contract("TEST_LiqudityToken", []);
    const TESTStakingToken = moduleBuilder.contract("TEST_StakingToken", []);
    const betStakingToken = moduleBuilder.contract("BetStakingToken", []);
    const treasuryContract = moduleBuilder.contract("TreasuryContract", [
      TESTliquidtyToken,
    ]);

    const stakeContract = moduleBuilder.contract("StakeContract", [
      betStakingToken,
      TESTliquidtyToken,
      TESTStakingToken,
      treasuryContract,
      10,
    ]);

    const matchNFT = moduleBuilder.contract("MatchNFT", [
      "https://eth-london-2024-frontend.vercel.app/api/token/",
    ]);

    const socialOracle = moduleBuilder.contract("SocialOracle", [
      stakeContract,
    ]);

    // Deploy the DecentralizedBetting contract with the specified addresses.
    const decentralizedBetting = moduleBuilder.contract(
      "DecentralizedBetting",
      [socialOracle, matchNFT, TESTliquidtyToken],
    );

    // TREASURY
    // setBettingContract
    // setStakeContract
    const setBettingContractResult = moduleBuilder.call(
      treasuryContract,
      "setBettingContract",
      [decentralizedBetting],
    );

    const setStakeContractResult = moduleBuilder.call(
      treasuryContract,
      "setStakeContract",
      [stakeContract],
    );

    // make the BetStakingToken to be owned by staking contract
    const setBetStakingTokenOwner = moduleBuilder.call(
      betStakingToken,
      "transferOwnership",
      [stakeContract],
    );

    return {
      decentralizedBetting,
      matchNFT,
      socialOracle,
      stakeContract,
      TESTliquidtyToken,
      TESTStakingToken,
      treasuryContract,
      betStakingToken,
    };
  },
);

export default DecentralizedBettingModule;
