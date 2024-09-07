"use client";

import type { TextAreaProps, InputProps } from "@nextui-org/react";

import React from "react";
import { Input, Textarea } from "@nextui-org/react";

import { cn } from "@/libs/utils";

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ classNames = {}, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        aria-label="Text"
        size="lg"
        classNames={{
          ...classNames,
          label: cn("hidden", classNames?.label),
          input: cn("py-0", classNames?.input),
        }}
        // minRows={1}
        placeholder="Enter a text here"
        radius="lg"
        variant="bordered"
        {...props}
      />
    );
  }
);

export default TextInput;

TextInput.displayName = "TextInput";
