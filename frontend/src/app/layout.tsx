import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import { cookieToInitialState } from "wagmi";
import { wagmiConfig } from "~/lib/wagmiConfig";
import { headers } from "next/headers";
import Web3ModalProvider from "~/lib/WagmiContext";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "BetBuddy",
  description: "Best decentralized betting platform",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get("cookie"),
  );
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} bg-gradient-to-b from-secondary to-primary`}
      >
        <Web3ModalProvider initialState={initialState}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </Web3ModalProvider>
        <Toaster />
      </body>
    </html>
  );
}
