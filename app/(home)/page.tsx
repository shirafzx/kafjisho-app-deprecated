"use client";
import Container from "@/components/shared/container/Container";
import { JapaneseIcon, SearchIcon } from "@/components/shared/Icons";
import SearchBar from "@/components/shared/search/Search";
import TextInput from "@/components/shared/search/textInput";
import { Tooltip, Button, cn } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const [text, setText] = React.useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(`search?q=${text}`);
  };
  return (
    <Container className="gap-y-16">
      {/* <SearchBar /> */}
      <form
        className="flex w-full items-center gap-2"
        onSubmit={(e) => handleSearch(e)}
      >
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
      </form>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam!
    </Container>
  );
}
