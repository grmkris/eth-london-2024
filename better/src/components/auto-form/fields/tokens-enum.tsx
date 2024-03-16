import { z } from "zod";

import type { AutoFormInputComponentProps } from "../types";
import { TokenIcon } from "../../common/TokenIcon";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { getBaseSchema } from "../utils";

export default function AutoFormTokenEnum({
  label,
  isRequired,
  field,
  fieldConfigItem,
  zodItem,
}: AutoFormInputComponentProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
  const baseValues = (getBaseSchema(zodItem) as unknown as z.ZodEnum<any>)._def
    .values;

  let values: [string, string][] = [];
  if (!Array.isArray(baseValues)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    values = Object.entries(baseValues);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    values = baseValues.map((value) => [value, value]);
  }

  return (
    <FormItem>
      <FormLabel className="font-gt-regular text-primary-900 text-base capitalize">
        {label}
        {isRequired && <span className="text-destructive"> *</span>}
      </FormLabel>
      <FormControl className={"overflow-y-scroll"}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger>
            <SelectValue
              className="w-full"
              placeholder={
                fieldConfigItem.inputProps?.placeholder ?? "Select an option"
              }
            >
              {field.value ? (
                <div className="flex items-center gap-2">
                  <TokenIcon
                    symbol={field.value.toLowerCase()}
                    className="text-lg"
                    size={20}
                  />
                  <div>{field.value}</div>
                </div>
              ) : (
                "Select an option"
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[24rem] overflow-y-auto">
            {values.map(([value, label]) => (
              <SelectItem value={label} key={value}>
                <div className="flex items-center gap-2">
                  <TokenIcon
                    symbol={value.toLowerCase()}
                    className="text-lg"
                    size={20}
                  />
                  <div>{label}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      {fieldConfigItem.description && (
        <FormDescription>{fieldConfigItem.description}</FormDescription>
      )}
      <FormMessage />
    </FormItem>
  );
}
