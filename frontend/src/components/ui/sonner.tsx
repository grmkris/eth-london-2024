"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:border-border group-[.toaster]:shadow-lg text-white",
          description: "text-white",
          actionButton: "group-[.toast]:bg-primary text-white",
          cancelButton: "group-[.toast]:bg-muted text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
