import WordCardSkeleton from "@/components/wordCard/skeleton.tsx/wordCardSkeleton";
import WordCard from "@/components/wordCard/wordCard";
import { Button, cn, Pagination, Spinner, Tooltip } from "@nextui-org/react";
import React, { useCallback, useState } from "react";
import useWordCard from "@/hooks/wordCard/useWordCard";
import { JapaneseIcon, SearchIcon } from "@/components/shared/Icons";
import TextInput from "@/components/shared/search/textInput";
import page from "@/app/(home)/page";
import { PaginationResponse } from "@/types/paginationTypes";
import { WordCardType } from "@/types/wordCardTypes";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

type FetchWordsFilter = {
  word: string;
  page: number;
};

type WordCardSectionProps = {
  filter: FetchWordsFilter;
};

const WordCardSection = ({ filter, setFilter, pageParam }: any) => {
  if (!filter.word) return null;

  const handlePagination = (page: number) => {
    setFilter((prev) => ({ ...prev, page }));
  };

  const fetchWords = useCallback(
    async (filter: FetchWordsFilter) => {
      const fetchUrl = new URL(
        "/jisho/search",
        process.env.NEXT_PUBLIC_API_DOMAIN
      );
      const requestConfig: AxiosRequestConfig = {
        params: {
          word: filter.word,
          page: filter.page || pageParam,
        },
      };

      const response = await axios.get(fetchUrl.href, requestConfig);
      return response.data;
    },
    [pageParam]
  );

  const { isPending, isPlaceholderData, error, data } = useQuery<
    PaginationResponse<WordCardType>
  >({
    queryKey: ["words", filter],
    queryFn: () => fetchWords(filter),
    enabled: !!filter.word,
    retry: 1,
    placeholderData: keepPreviousData,
  });

  if (isPending && !isPlaceholderData) {
    return (
      <>
        <WordCardSkeleton />
        <WordCardSkeleton />
        <WordCardSkeleton />
      </>
    );
  }

  if (isPlaceholderData) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  const wordDataList = data;
  const wordItems = data?.items || [];

  return (
    <>
      {wordItems.map((wordItem) => (
        <WordCard
          key={wordItem.id}
          kanji={wordItem.word}
          furigana={wordItem.furigana}
          meanings={wordItem.meanings}
        />
      ))}
      {wordDataList!.hasPagination && (
        <Pagination
          showControls
          total={wordDataList!.pageCount}
          initialPage={1}
          page={wordDataList?.page}
          onChange={handlePagination}
          variant="light"
          size="lg"
          className="mx-auto mt-auto p-4"
        />
      )}
    </>
  );
};

export default WordCardSection;
