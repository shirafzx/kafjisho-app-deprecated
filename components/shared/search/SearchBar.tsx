"use client";

import React, { FC } from "react";
import { cn, Button, Tooltip } from "@nextui-org/react";

import TextInput from "./textInput";
import { JapaneseIcon, SearchIcon } from "../Icons";

type SearchBarProps = {
  text: string;
  setText: (text: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ text, setText }) => {
  return (
    <div className="flex w-full items-center gap-2">
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
          type="submit"
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
    </div>
  );
};

export default SearchBar;
