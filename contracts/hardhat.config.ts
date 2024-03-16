import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition-viem";
import "@nomicfoundation/hardhat-viem";
import { formatEther } from "viem";
import { ENV } from "./env";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        details: {
          yulDetails: {
            optimizerSteps: "u",
          },
        },
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: ENV.MAINET_URL,
        blockNumber: 13000000,
      },
    },
    mumbai: {
      url: ENV.MUMBAI_URL,
      accounts: {
        mnemonic: ENV.DEPLOYER_MNEMONIC,
      },
    },
  },
};

export default config;

task(
  "accounts",
  "Prints the list of accounts and their balances",
  async (_, hre) => {
    const accounts = await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();
    for (const account of accounts) {
      const balance = await publicClient.getBalance({
        address: account.account.address,
      });
      console.log(`${account.account.address}: ${formatEther(balance)} ETH`);
    }
  },
);
