import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import hre from "hardhat";

import DecentralizedBettingModule from "../ignition/modules/DecentralizedBettingModule";
import { expect } from "chai";
import { waitForTransactionReceipt } from "viem/actions";

async function deployDecentralizedBettingFixture() {
  const [owner, otherAccount] = await hre.viem.getWalletClients();

  let decentralizedBetting,
    matchNFT,
    socialOracle,
    stakeContract,
    treasuryContract,
    betStakingToken,
    TESTliquidtyToken,
    TESTStakingToken;

  // Check if not running on the Hardhat default network

  // If on Hardhat network, deploy the contracts
  const contracts = await hre.ignition.deploy(DecentralizedBettingModule, {
    parameters: {
      DecentralizedBettingModule: {
        // Specify any module-specific parameters here
      },
    },
  });

  decentralizedBetting = contracts.decentralizedBetting;
  matchNFT = contracts.matchNFT;
  socialOracle = contracts.socialOracle;
  stakeContract = contracts.stakeContract;
  treasuryContract = contracts.treasuryContract;
  betStakingToken = contracts.betStakingToken;
  TESTliquidtyToken = contracts.TESTliquidtyToken;
  TESTStakingToken = contracts.TESTStakingToken;

  return {
    decentralizedBetting,
    matchNFT,
    socialOracle,
    stakeContract,
    owner,
    otherAccount,
    treasuryContract,
    betStakingToken,
    TESTliquidtyToken,
    TESTStakingToken,
  };
}

const oneUnit = BigInt(10 ** 18);
const halfUnit = BigInt(10 ** 17);
type Fixture = Awaited<ReturnType<typeof deployDecentralizedBettingFixture>>;
async function initializeContracts() {
  let decentralizedBetting: Fixture["decentralizedBetting"],
    matchNFT: Fixture["matchNFT"],
    socialOracle: Fixture["socialOracle"],
    stakeContract: Fixture["stakeContract"],
    tEST_LiqudityToken: Fixture["TESTliquidtyToken"],
    tEST_StakingToken: Fixture["TESTStakingToken"],
    treasuryContract: Fixture["treasuryContract"],
    betStakingToken: Fixture["betStakingToken"];

  const pc = await hre.viem.getPublicClient();
  if (pc.chain.id !== 31337) {
    console.log("Not running on Hardhat default network, reusing");
    // Attempt to use existing contract addresses from environment variables or a config
    const deployedAddresses = {
      decentralizedBetting: "0xab1815ba62132B1E12eaa244C6b629070e328100",
      matchNFT: "0x01A4c2f3eC2A506086cED32C15c49211f8E58527",
      socialOracle: "0xa322a2f58bD32bBf054f171877Ed23d0395d0ed2",
      stakeContract: "0xc4513603A38E438Dbd2e9750a89c25899896EDe6",
      tEST_LiqudityToken: "0xb9698522cB63101350379E703694F3325BA4B089",
      tEST_StakingToken: "0x98450B10D6B982d11df956169EB76792A45FDc47",
      treasuryContract: "0xbB4b257F8cACF09949D4443221fC50c78C8E364B",
      betStakingToken: "0xE9C17E4AE48BFD39937cef331FBf286BCb90CF62",
    };

    decentralizedBetting = await hre.viem.getContractAt(
      "DecentralizedBetting",
      deployedAddresses.decentralizedBetting,
    );
    matchNFT = await hre.viem.getContractAt(
      "MatchNFT",
      deployedAddresses.matchNFT,
    );
    socialOracle = await hre.viem.getContractAt(
      "SocialOracle",
      deployedAddresses.socialOracle,
    );
    stakeContract = await hre.viem.getContractAt(
      "StakeContract",
      deployedAddresses.stakeContract,
    );
    tEST_LiqudityToken = await hre.viem.getContractAt(
      "TEST_LiqudityToken",
      deployedAddresses.tEST_LiqudityToken,
    );
    tEST_StakingToken = await hre.viem.getContractAt(
      "TEST_StakingToken",
      deployedAddresses.tEST_StakingToken,
    );
    treasuryContract = await hre.viem.getContractAt(
      "TreasuryContract",
      deployedAddresses.treasuryContract,
    );
    betStakingToken = await hre.viem.getContractAt(
      "BetStakingToken",
      deployedAddresses.betStakingToken,
    );
  } else {
    console.log("Running on Hardhat default network, deploying");
    const fixture = await loadFixture(deployDecentralizedBettingFixture);
    decentralizedBetting = fixture.decentralizedBetting;
    matchNFT = fixture.matchNFT;
    socialOracle = fixture.socialOracle;
    stakeContract = fixture.stakeContract;
    tEST_LiqudityToken = fixture.TESTliquidtyToken;
    tEST_StakingToken = fixture.TESTStakingToken;
    treasuryContract = fixture.treasuryContract;
    betStakingToken = fixture.betStakingToken;
  }

  if (
    !decentralizedBetting ||
    !matchNFT ||
    !socialOracle ||
    !stakeContract ||
    !tEST_LiqudityToken ||
    !tEST_StakingToken ||
    !treasuryContract ||
    !betStakingToken
  ) {
    throw new Error("Could not initialize contracts");
  }
  return {
    decentralizedBetting,
    matchNFT,
    socialOracle,
    stakeContract,
    tEST_LiqudityToken,
    tEST_StakingToken,
    treasuryContract,
    betStakingToken,
  };
}

describe("DecentralizedBetting", function () {
  describe("Deployment", function () {
    it("Should correctly deploy all contracts", async function () {
      const { decentralizedBetting, matchNFT, socialOracle, stakeContract } =
        await initializeContracts();
      expect(decentralizedBetting.address).to.be.not.undefined;
      expect(matchNFT.address).to.be.not.undefined;
      expect(socialOracle.address).to.be.not.undefined;
      expect(stakeContract.address).to.be.not.undefined;
    });

    // Add more deployment-related tests here if necessary
  });

  describe("Functionality", function () {
    it("Should allow creating an event", async function () {
      const TOKEN_ID = BigInt(1);
      const publicClient = await hre.viem.getPublicClient();
      const [admin, fan1, fan2, fan3, staker1, staker2] =
        await hre.viem.getWalletClients();
      if (!admin || !fan1 || !fan2 || !fan3 || !staker1 || !staker2) {
        throw new Error("Could not get wallet clients");
      }
      const {
        decentralizedBetting,
        matchNFT,
        socialOracle,
        stakeContract,
        tEST_StakingToken,
        tEST_LiqudityToken,
        treasuryContract,
        betStakingToken,
      } = await initializeContracts();

      expect(decentralizedBetting.address).to.be.not.undefined;
      expect(matchNFT.address).to.be.not.undefined;
      expect(socialOracle.address).to.be.not.undefined;
      expect(stakeContract.address).to.be.not.undefined;
      const pc = await hre.viem.getPublicClient();
      const timestamp =
        pc.chain.id === 31337 ? await time.latest() : Date.now();

      /**
       *  mint some liquidty and staking tokens to stakers
       */

      const mintLiquidity = await tEST_LiqudityToken.write.mint([
        staker1.account.address,
        oneUnit * BigInt(10),
      ]);
      await waitForTransactionReceipt(pc, {
        hash: mintLiquidity,
      });
      console.log("Mint liquidity tx", mintLiquidity);
      const mintStaking = await tEST_StakingToken.write.mint([
        staker1.account.address,
        oneUnit * BigInt(10),
      ]);

      await waitForTransactionReceipt(pc, {
        hash: mintStaking,
      });

      console.log("Mint staking tx", mintStaking);

      const mintLiquidity2 = await tEST_LiqudityToken.write.mint([
        staker2.account.address,
        oneUnit * BigInt(10),
      ]);

      console.log("Mint liquidity tx 2", mintLiquidity2);

      await waitForTransactionReceipt(pc, {
        hash: mintLiquidity2,
      });

      const mintStaking2 = await tEST_StakingToken.write.mint(
        [staker2.account.address, oneUnit * BigInt(10)],
        {},
      );

      await waitForTransactionReceipt(pc, {
        hash: mintStaking2,
      });

      console.log("Mint staking tx 2", mintStaking2);

      // mint some liquidty tokens to fans
      const mintLiquidity3 = await tEST_LiqudityToken.write.mint([
        fan1.account.address,
        oneUnit * BigInt(10),
      ]);

      await waitForTransactionReceipt(pc, {
        hash: mintLiquidity3,
      });

      console.log("Mint liquidity tx 3", mintLiquidity3);

      const mintLiquidity4 = await tEST_LiqudityToken.write.mint([
        fan2.account.address,
        oneUnit * BigInt(10),
      ]);
      await waitForTransactionReceipt(pc, {
        hash: mintLiquidity4,
        confirmations: 1,
      });

      console.log("Mint liquidity tx 4", mintLiquidity4);

      const mintLiquidity5 = await tEST_LiqudityToken.write.mint([
        fan3.account.address,
        oneUnit * BigInt(10),
      ]);

      await waitForTransactionReceipt(pc, {
        hash: mintLiquidity5,
        confirmations: 1,
      });

      const event = await decentralizedBetting.write.createEvent([
        BigInt(timestamp),
      ]);

      console.log("Create event tx: ", event);

      await waitForTransactionReceipt(pc, {
        hash: event,
      });

      // Verify the event was created correctly
      // Note: Implement the getEvent function in your contract to fetch event details
      const eventData = await decentralizedBetting.read.events([TOKEN_ID]);

      console.log("Event data", eventData);

      // check that nft was minted for nft

      const nft = await matchNFT.read.ownerOf([TOKEN_ID]);
      expect(nft.toLowerCase()).to.equal(admin.account.address.toLowerCase());

      // check that question was created for social oracle
      const question = await socialOracle.read.questions([TOKEN_ID]);

      console.log("Question", question);

      // increase allowance for placng a bet
      const approveTx = await tEST_LiqudityToken.write.approve(
        [decentralizedBetting.address, halfUnit],
        { account: fan1.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx,
      });

      const betTx = await decentralizedBetting.write.placeBet(
        [TOKEN_ID, false, halfUnit],
        { account: fan1.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: betTx,
      });

      console.log("Bet tx 1", betTx);

      const approveTx2 = await tEST_LiqudityToken.write.approve(
        [decentralizedBetting.address, halfUnit],
        { account: fan2.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx2,
      });

      const betTx2 = await decentralizedBetting.write.placeBet(
        [TOKEN_ID, true, halfUnit],
        { account: fan2.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: betTx2,
      });

      console.log("Bet tx 2", betTx2);

      const approveTx3 = await tEST_LiqudityToken.write.approve(
        [decentralizedBetting.address, halfUnit * BigInt(3)],
        { account: fan3.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx3,
      });

      const betTx3 = await decentralizedBetting.write.placeBet(
        [TOKEN_ID, false, halfUnit * BigInt(3)],
        { account: fan3.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: betTx3,
      });

      console.log("Bet tx 3", betTx3);

      // approve the staking and liq tokens to stake
      const approveTx4 = await tEST_StakingToken.write.approve(
        [stakeContract.address, BigInt(100000)],
        { account: staker1.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx4,
      });

      const approveTx5 = await tEST_LiqudityToken.write.approve(
        [stakeContract.address, BigInt(100000)],
        { account: staker1.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx5,
      });

      // stake
      const stakeTx = await stakeContract.write.stake(
        [BigInt(100000), BigInt(100000)],
        {
          account: staker1.account,
        },
      );

      await waitForTransactionReceipt(pc, {
        hash: stakeTx,
      });

      console.log("staker1", {
        approveTx4,
        approveTx5,
        stakeTx,
      });

      // repeat for staker 2

      const approveTx6 = await tEST_StakingToken.write.approve(
        [stakeContract.address, BigInt(100000)],
        { account: staker2.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx6,
      });

      const approveTx7 = await tEST_LiqudityToken.write.approve(
        [stakeContract.address, BigInt(100000)],
        { account: staker2.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: approveTx7,
      });
      const stakeTx2 = await stakeContract.write.stake(
        [BigInt(100000), BigInt(100000)],
        {
          account: staker2.account,
        },
      );

      await waitForTransactionReceipt(pc, {
        hash: stakeTx2,
      });
      console.log("staker2", {
        approveTx6,
        approveTx7,
        stakeTx2,
      });

      const oracleTx2 = await socialOracle.write.submitAnswer(
        [TOKEN_ID, true],
        { account: staker2.account },
      );

      await waitForTransactionReceipt(pc, {
        hash: oracleTx2,
      });

      console.log("oracletx2", oracleTx2);

      const determineAnswerOracle =
        await socialOracle.write.determineCorrectAnswer([TOKEN_ID]);

      console.log("determineAnswerOracle", determineAnswerOracle);

      await waitForTransactionReceipt(pc, {
        hash: determineAnswerOracle,
      });

      const resolveTx = await decentralizedBetting.write.resolveEvent([
        TOKEN_ID,
      ]);

      await waitForTransactionReceipt(pc, {
        hash: resolveTx,
      });

      console.log("Resolve tx", resolveTx);

      // should fail, because the fan didn't win
      const claimWinningsTx = await decentralizedBetting.write.claimWinnings(
        [TOKEN_ID],
        {
          account: fan1.account,
        },
      );

      console.log("Claim winnings tx", claimWinningsTx);

      await waitForTransactionReceipt(pc, {
        hash: claimWinningsTx,
      });

      // should work, because the fan won
      const claimWinningsTx2 = await decentralizedBetting.write.claimWinnings(
        [TOKEN_ID],
        {
          account: fan2.account,
        },
      );

      await waitForTransactionReceipt(pc, {
        hash: claimWinningsTx2,
      });

      console.log("Claim winnings tx 2", claimWinningsTx2);

      // should fail, because the fan didn't win
      const claimWinningsTx3 = await decentralizedBetting.write.claimWinnings(
        [TOKEN_ID],
        {
          account: fan3.account,
        },
      );

      console.log("Claim winnings tx 3", claimWinningsTx3);
      await waitForTransactionReceipt(pc, {
        hash: claimWinningsTx3,
      });
    }).timeout(1000000);

    // Add more functionality tests here, such as placing bets, resolving events, claiming winnings, etc.
  }).timeout(1000000);

  // You can add more describe blocks for different categories of tests
}).timeout(1000000);
