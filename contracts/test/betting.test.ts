import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import hre from "hardhat";

import DecentralizedBettingModule from "../ignition/modules/DecentralizedBettingModule";
import { expect } from "chai";
import { createWalletClient, formatEther } from "viem";
import { ENV } from "../env";
import { mnemonicToAccount } from "viem/accounts";
import { waitForTransactionReceipt } from "viem/actions";

describe("DecentralizedBetting", function () {
  async function deployDecentralizedBettingFixture() {
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const { decentralizedBetting, matchNFT, socialOracle, stakeContract } =
      await hre.ignition.deploy(DecentralizedBettingModule, {
        parameters: {
          DecentralizedBettingModule: {
            // Specify any module-specific parameters here
          },
        },
      });

    return {
      decentralizedBetting,
      matchNFT,
      socialOracle,
      stakeContract,
      owner,
      otherAccount,
    };
  }

  describe("Deployment", function () {
    it("Should correctly deploy all contracts", async function () {
      const { decentralizedBetting, matchNFT, socialOracle, stakeContract } =
        await loadFixture(deployDecentralizedBettingFixture);

      expect(decentralizedBetting.address).to.be.not.undefined;
      expect(matchNFT.address).to.be.not.undefined;
      expect(socialOracle.address).to.be.not.undefined;
      expect(stakeContract.address).to.be.not.undefined;
    });

    // Add more deployment-related tests here if necessary
  });

  describe("Functionality", function () {
    it("Should allow creating an event", async function () {
      const publicClient = await hre.viem.getPublicClient();
      const [admin, fan1, fan2, fan3, staker1, staker2] =
        await hre.viem.getWalletClients();
      if (!admin || !fan1 || !fan2 || !fan3 || !staker1 || !staker2) {
        throw new Error("Could not get wallet clients");
      }

      const {
        decentralizedBetting,
        owner,
        matchNFT,
        stakeContract,
        socialOracle,
      } = await loadFixture(deployDecentralizedBettingFixture);
      const timestamp = (await time.latest()) + 86400; // 1 day from now

      const event = await decentralizedBetting.write.createEvent([
        BigInt(timestamp),
      ]);

      console.log("Create event tx: ", event);

      // Verify the event was created correctly
      // Note: Implement the getEvent function in your contract to fetch event details
      const eventData = await decentralizedBetting.read.events([BigInt(1)]);

      console.log("Event data", eventData);

      // check that nft was minted for nft

      const nft = await matchNFT.read.ownerOf([BigInt(1)]);
      expect(nft.toLowerCase()).to.equal(owner?.account.address.toLowerCase());

      // check that question was created for social oracle
      const question = await socialOracle.read.questions([BigInt(1)]);

      console.log("Question", question);

      const betTx = await decentralizedBetting.write.placeBet(
        [BigInt(1), false],
        { account: fan1.account, value: BigInt(50000) },
      );

      console.log("Bet tx 1", betTx);
      const betTx2 = await decentralizedBetting.write.placeBet(
        [BigInt(1), true],
        { account: fan2.account, value: BigInt(50000) },
      );

      console.log("Bet tx 2", betTx2);

      const betTx3 = await decentralizedBetting.write.placeBet(
        [BigInt(1), false],
        { account: fan3.account, value: BigInt(50000) },
      );

      console.log("Bet tx 3", betTx3);

      const oracleTx1 = await socialOracle.write.submitAnswer(
        [BigInt(1), true],
        { account: staker1.account },
      );

      console.log("oracletx1", oracleTx1);

      const oracleTx2 = await socialOracle.write.submitAnswer(
        [BigInt(1), false],
        { account: staker2.account },
      );

      console.log("oracletx2", oracleTx2);

      const determineAnswerOracle =
        await socialOracle.write.determineCorrectAnswer([BigInt(1)]);

      console.log("determineAnswerOracle", determineAnswerOracle);

      const resolveTx = await decentralizedBetting.write.resolveEvent([
        BigInt(1),
      ]);

      console.log("Resolve tx", resolveTx);
    });

    // Add more functionality tests here, such as placing bets, resolving events, claiming winnings, etc.
  });

  // You can add more describe blocks for different categories of tests
});
