import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import {
  baseSepolia,
  mainnet,
  sepolia,
  arbitrumSepolia,
  spicy,
} from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = "1e69158d2921d63d074cd90b66bb038a";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [baseSepolia, arbitrumSepolia, spicy] as const;
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
