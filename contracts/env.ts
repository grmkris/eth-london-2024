import { parseEnv } from "znv";
import { z } from "zod";
import "dotenv/config";

export const ENV = parseEnv(process.env, {
  MUMBAI_URL: z.string(),
  MAINET_URL: z.string(),
  MNEMONIC: z.string(),
});
