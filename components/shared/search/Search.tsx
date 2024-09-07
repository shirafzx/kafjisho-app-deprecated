"use client";

import React from "react";
import { Button, Tooltip } from "@nextui-org/react";

import { cn } from "@/libs/utils";

import TextInput from "./textInput";
import { JapaneseIcon, SearchIcon } from "../Icons";

type SearchBarProps = {
  query: string;
};

export default function SearchBar({ query }: SearchBarProps) {
  const [text, setText] = React.useState<string>(query);

  const handleSearch = () => {
    console.log(text);
  };

  return (
    <form className="flex w-full items-center gap-2">
      <TextInput
        classNames={{
          innerWrapper: "items-center",
          input: "text-medium",
        }}
        endContent={<div className="flex gap-2"></div>}
        startContent={
          <Tooltip showArrow content="Word or Sentence">
            <Button isIconOnly radius="full" variant="light">
              <JapaneseIcon
                size={24}
                className={cn(
                  "[&>path]:stroke-[2px]",
                  !text ? "text-default-500" : "text-primary"
                )}
              />
            </Button>
          </Tooltip>
        }
        value={text}
        onValueChange={setText}
      />
      <Tooltip showArrow content="Search">
        <Button
          isIconOnly
          color={!text ? "default" : "primary"}
          isDisabled={!text}
          radius="full"
          variant={!text ? "flat" : "solid"}
          onClick={handleSearch}
        >
          <SearchIcon
            size={20}
            className={cn(
              "[&>path]:stroke-[2px]",
              !text ? "text-default-500" : "text-primary-foreground"
            )}
          />
        </Button>
      </Tooltip>
    </form>
  );
}
