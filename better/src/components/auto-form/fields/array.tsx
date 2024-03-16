import type { useForm } from "react-hook-form";
import type * as z from "zod";
import { Plus, Trash } from "lucide-react";
import { useFieldArray } from "react-hook-form";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { beautifyObjectName } from "../utils";
import AutoFormObject from "./object";

export default function AutoFormArray({
  name,
  item,
  form,
  path = [],
}: {
  name: string;
  item: z.ZodArray<any>;
  form: ReturnType<typeof useForm>;
  path?: string[];
}) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name,
  });
  console.log("fields", fields);
  const title = item._def.description ?? beautifyObjectName(name);

  return (
    <AccordionItem value={name}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="border-l p-3 pl-6">
        {fields.map((_field, index) => {
          const key = [...path, index.toString()].join(".");
          return (
            <div className="mb-4 grid gap-6" key={`${key}`}>
              <AutoFormObject
                schema={item._def.type as z.ZodObject<any, any>}
                form={form}
                path={[...path, index.toString()]}
              />
              <Button
                variant="secondary"
                size="icon"
                type="button"
                onClick={() => remove(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
              <Separator />
            </div>
          );
        })}
        <Button
          type="button"
          onClick={() => append({})}
          className="flex items-center"
        >
          <Plus className="mr-2" size={16} />
          Add
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
