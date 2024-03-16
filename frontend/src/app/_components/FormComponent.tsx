"use client";

import { z } from "zod";
import AutoForm from "~/components/auto-form";

export const HelloSchema = z.object({
  greeting: z.string(),
  greeting2: z.string(),
  greeting3: z.string(),
  greeting4: z.string(),
});

export const HelloForm = () => {
  return <AutoForm formSchema={HelloSchema} onSubmit={console.log} />;
};
