import React, { useEffect, useState } from "react";
import { PageIndex } from "@/constants/pagination";
import { PaginationResponse } from "@/types/paginationTypes";
import { WordCardType } from "@/types/wordCardTypes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter, useSearchParams } from "next/navigation";

type FetchWordsFilter = {
  word: string;
  page: number;
};

const useWordCard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const word = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || PageIndex;
  const [text, setText] = useState<string>(word);
  const [filter, setFilter] = useState<FetchWordsFilter>({
    word,
    page,
  });

  const fetchWords = async (): Promise<PaginationResponse<WordCardType>> => {
    const fetchUrl = new URL(
      "/jisho/search",
      process.env.NEXT_PUBLIC_API_DOMAIN
    );
    const requestConfig: AxiosRequestConfig = {
      params: {
        word: filter.word,
        page: filter.page,
      },
    };
    const response = await axios.get(fetchUrl.href, requestConfig);
    return response.data;
  };

  const useWords = () => {
    return useQuery({
      queryKey: ["words", filter.word, filter.page],
      queryFn: () => fetchWords(),
      enabled: !!word,
      retry: 1,
      placeholderData: keepPreviousData,
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter((prev) => ({ ...prev, word: text, page: PageIndex }));
    router.replace(`search?q=${text}&page=${PageIndex}`);
  };

  const handlePagination = (page: number) => {
    setFilter((prev) => ({ ...prev, page }));
  };

  useEffect(() => {
    setFilter({ word, page });
  }, [word, page]);

  return {
    word,
    text,
    setText,
    filter,
    setFilter,
    useWords,
    handleSearch,
    handlePagination,
  };
};

export default useWordCard;
