import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import hre from "hardhat";

import DecentralizedBettingModule from "../ignition/modules/DecentralizedBettingModule";
import { expect } from "chai";

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

      console.log("Event tx", event);

      // Verify the event was created correctly
      // Note: Implement the getEvent function in your contract to fetch event details
      const eventData = await decentralizedBetting.read.events([BigInt(1)]);

      console.log("Event data", eventData);

      // check that nft was minted for nft

      const nft = await matchNFT.read.ownerOf([BigInt(1)]);
      expect(nft).to.equal(owner?.account.address);

      // check that question was created for social oracle
      const question = await socialOracle.read.questions([BigInt(1)]);
    });

    // Add more functionality tests here, such as placing bets, resolving events, claiming winnings, etc.
  });

  // You can add more describe blocks for different categories of tests
});
