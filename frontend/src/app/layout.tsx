import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import { cookieToInitialState } from "wagmi";
import { wagmiConfig } from "~/lib/wagmiConfig";
import { headers } from "next/headers";
import Web3ModalProvider from "~/lib/WagmiContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
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
      <body className={`font-sans ${inter.variable}`}>
        <Web3ModalProvider initialState={initialState}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
