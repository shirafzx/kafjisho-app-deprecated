import { useState, useEffect, useCallback } from "react";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const word = searchParams.get("q") || "";
  const page = searchParams.get("page") || PageIndex;
  const [filter, setFilter] = useState<FetchWordsFilter>({
    word,
    page: Number(page),
  });

  const fetchWords = useCallback(async (filter: FetchWordsFilter) => {
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
  }, []);

  const { isPending, isPlaceholderData, error, data } = useQuery<
    PaginationResponse<WordCardType>
  >({
    queryKey: ["words", filter],
    queryFn: () => fetchWords(filter),
    retry: 1,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    router.replace(`?q=${filter.word}&page=${filter.page}`);
  }, [filter, router]);

  const handleSearch = (word: string) => {
    setFilter((prev) => ({ ...prev, word, page: PageIndex }));
  };

  const handlePagination = (page: number) => {
    setFilter((prev) => ({ ...prev, page }));
  };

  const is404 = axios.isAxiosError(error) && error.response?.status === 404;
  const is500 = axios.isAxiosError(error) && error.response?.status === 500;

  return {
    wordDataList: data,
    isPending,
    isPlaceholderData,
    is404,
    is500,
    error,
    handleSearch,
    handlePagination,
    filter,
  };
};

export default useWordCard;
