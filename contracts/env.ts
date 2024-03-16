import { parseEnv } from "znv";
import { z } from "zod";
import "dotenv/config";

export const ENV = parseEnv(process.env, {
  MUMBAI_URL: z.string(),
  MAINET_URL: z.string(),
  MNEMONIC: z.string(),
  STAKER1_MNEMONIC: z.string(),
  STAKER2_MNEMONIC: z.string(),
  FAN1_MNEMONIC: z.string(),
  FAN2_MNEMONIC: z.string(),
  FAN3_MNEMONIC: z.string(),
});
