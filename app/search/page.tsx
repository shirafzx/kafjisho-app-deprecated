"use client";
import page from "@/app/(home)/page";
import Container from "@/components/shared/container/Container";
import { JapaneseIcon, SearchIcon } from "@/components/shared/Icons";
import TextInput from "@/components/shared/search/textInput";
import WordCardSection from "@/components/templates/wordCardSection/WordCardSection";
import { PageIndex } from "@/constants/pagination";
import { Tooltip, Button, cn } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type FetchWordsFilter = {
  word: string;
  page: number;
};

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchParam = searchParams.get("q") || "";
  const pageParam = searchParams.get("page") || PageIndex;

  const [text, setText] = React.useState<string>(searchParam);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
    setFilter({ word: text, page: PageIndex });

    console.log(filter);
  };

  const [filter, setFilter] = useState<FetchWordsFilter>({
    word: text,
    page: Number(page) || PageIndex,
  });

  useEffect(() => {
    if (!searchParam) {
      router.push("/");
    } else {
      router.replace(`?q=${filter.word}&page=${filter.page}`);
    }
  }, [filter.page, filter.word, router, searchParam]);

  return (
    <>
      <Container className="gap-4">
        {/* <SearchBar query={searchParam || ""} /> */}
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
        <WordCardSection
          filter={filter}
          setFilter={setFilter}
          page={pageParam}
        />
      </Container>
    </>
  );
};

export default Search;
