import { parseEnv } from "znv";
import { z } from "zod";
import "dotenv/config";

export const ENV = parseEnv(process.env, {
  MUMBAI_URL: z.string(),
  MAINET_URL: z.string(),
  DEPLOYER_MNEMONIC: z.string(),
  OPERATOR_MNEMONIC: z.string(),
  FEE_MNEMONIC: z.string(),
});
