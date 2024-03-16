"use client";

import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/auto-form";

export const HelloSchema = z.object({
  greeting: z.string().min(0),
  greeting2: z.string().nullish(),
  greeting3: z.string(),
  greeting4: z.string(),
});

export const HelloForm = () => {
  return (
    <>
      <AutoForm formSchema={HelloSchema} onSubmit={console.log}>
        <AutoFormSubmit />
      </AutoForm>
      <w3m-button />
    </>
  );
};
