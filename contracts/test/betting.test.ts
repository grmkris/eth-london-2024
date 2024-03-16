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

    let decentralizedBetting, matchNFT, socialOracle, stakeContract;

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
      let decentralizedBetting, matchNFT, socialOracle, stakeContract;
      const pc = await hre.viem.getPublicClient();
      if (pc.chain.id !== 31337) {
        console.log("Not running on Hardhat default network, reusing");
        // Attempt to use existing contract addresses from environment variables or a config
        const deployedAddresses = {
          decentralizedBetting: "0x0d1B990935DF3E2Bc68762CF5Ea525FCfA296877",
          matchNFT: "0x0822b8f1a3A9DA5c58d33631f6D8f426e2856d50",
          socialOracle: "0x803DEa460C42BaFC52572b62710644cC7c7bBb4F",
          stakeContract: "0xa83C10535e45DA8d746F651b7a561E90FCD7ad20",
        };

        // Instantiate contracts from deployed addresses if they are set
        if (
          deployedAddresses.decentralizedBetting &&
          deployedAddresses.matchNFT &&
          deployedAddresses.socialOracle &&
          deployedAddresses.stakeContract
        ) {
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
            "MockStakeContract",
            deployedAddresses.stakeContract,
          );
        } else {
          console.error(
            "Missing contract addresses in the environment for the current network.",
          );
          process.exit(1);
        }
      } else {
        console.log("Running on Hardhat default network, deploying");
        const fixture = await loadFixture(deployDecentralizedBettingFixture);
        decentralizedBetting = fixture.decentralizedBetting;
        matchNFT = fixture.matchNFT;
        socialOracle = fixture.socialOracle;
        stakeContract = fixture.stakeContract;
      }

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
      console.log("Admin", admin.account.address);
      let decentralizedBetting, matchNFT, socialOracle, stakeContract;
      const pc = await hre.viem.getPublicClient();
      if (pc.chain.id !== 31337) {
        console.log("Not running on Hardhat default network, reusing");
        // Attempt to use existing contract addresses from environment variables or a config
        const deployedAddresses = {
          decentralizedBetting: "0x0d1B990935DF3E2Bc68762CF5Ea525FCfA296877",
          matchNFT: "0x0822b8f1a3A9DA5c58d33631f6D8f426e2856d50",
          socialOracle: "0x803DEa460C42BaFC52572b62710644cC7c7bBb4F",
          stakeContract: "0xa83C10535e45DA8d746F651b7a561E90FCD7ad20",
        };

        // Instantiate contracts from deployed addresses if they are set
        if (
          deployedAddresses.decentralizedBetting &&
          deployedAddresses.matchNFT &&
          deployedAddresses.socialOracle &&
          deployedAddresses.stakeContract
        ) {
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
            "MockStakeContract",
            deployedAddresses.stakeContract,
          );
        } else {
          console.error(
            "Missing contract addresses in the environment for the current network.",
          );
          process.exit(1);
        }
      } else {
        console.log("Running on Hardhat default network, deploying");
        const fixture = await loadFixture(deployDecentralizedBettingFixture);
        decentralizedBetting = fixture.decentralizedBetting;
        matchNFT = fixture.matchNFT;
        socialOracle = fixture.socialOracle;
        stakeContract = fixture.stakeContract;
      }

      expect(decentralizedBetting.address).to.be.not.undefined;
      expect(matchNFT.address).to.be.not.undefined;
      expect(socialOracle.address).to.be.not.undefined;
      expect(stakeContract.address).to.be.not.undefined;

      const timestamp =
        pc.chain.id === 31337 ? await time.latest() : Date.now();

      const event = await decentralizedBetting.write.createEvent([
        BigInt(timestamp),
      ]);

      console.log("Create event tx: ", event);

      // Verify the event was created correctly
      // Note: Implement the getEvent function in your contract to fetch event details
      const eventData = await decentralizedBetting.read.events([BigInt(9)]);

      console.log("Event data", eventData);

      // check that nft was minted for nft

      const nft = await matchNFT.read.ownerOf([BigInt(9)]);
      expect(nft.toLowerCase()).to.equal(admin.account.address.toLowerCase());

      // check that question was created for social oracle
      const question = await socialOracle.read.questions([BigInt(9)]);

      console.log("Question", question);

      const betTx = await decentralizedBetting.write.placeBet(
        [BigInt(9), false],
        { account: fan1.account, value: BigInt(50000) },
      );

      console.log("Bet tx 1", betTx);
      const betTx2 = await decentralizedBetting.write.placeBet(
        [BigInt(9), true],
        { account: fan2.account, value: BigInt(50000) },
      );

      console.log("Bet tx 2", betTx2);

      const betTx3 = await decentralizedBetting.write.placeBet(
        [BigInt(9), false],
        { account: fan3.account, value: BigInt(50000) },
      );

      console.log("Bet tx 3", betTx3);

      const oracleTx1 = await socialOracle.write.submitAnswer(
        [BigInt(9), true],
        { account: staker1.account },
      );

      console.log("oracletx1", oracleTx1);

      const oracleTx2 = await socialOracle.write.submitAnswer(
        [BigInt(9), true],
        { account: staker2.account },
      );

      console.log("oracletx2", oracleTx2);

      const determineAnswerOracle =
        await socialOracle.write.determineCorrectAnswer([BigInt(9)]);

      console.log("determineAnswerOracle", determineAnswerOracle);

      await waitForTransactionReceipt(pc, {
        hash: determineAnswerOracle,
      });

      const resolveTx = await decentralizedBetting.write.resolveEvent([
        BigInt(9),
      ]);

      console.log("Resolve tx", resolveTx);

      // should fail, because the fan didn't win
      const claimWinningsTx = await decentralizedBetting.write.claimWinnings(
        [BigInt(9)],
        {
          account: fan1.account,
        },
      );

      console.log("Claim winnings tx", claimWinningsTx);

      // should work, because the fan won
      const claimWinningsTx2 = await decentralizedBetting.write.claimWinnings(
        [BigInt(9)],
        {
          account: fan2.account,
        },
      );

      console.log("Claim winnings tx 2", claimWinningsTx2);

      // should fail, because the fan didn't win
      const claimWinningsTx3 = await decentralizedBetting.write.claimWinnings(
        [BigInt(9)],
        {
          account: fan3.account,
        },
      );
    });

    // Add more functionality tests here, such as placing bets, resolving events, claiming winnings, etc.
  });

  // You can add more describe blocks for different categories of tests
});
