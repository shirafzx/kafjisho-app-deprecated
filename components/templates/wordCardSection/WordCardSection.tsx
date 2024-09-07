import WordCardSkeleton from "@/components/wordCard/skeleton.tsx/wordCardSkeleton";
import WordCard from "@/components/wordCard/wordCard";
import { PaginationResponse } from "@/types/paginationTypes";
import { WordCardType } from "@/types/wordCardTypes";
import { Pagination } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

const WordCardSection = () => {
  const searchParams = useSearchParams();

  const searchParam = searchParams.get("q") || "";

  const fetchUrl = new URL("/jisho/search", process.env.NEXT_PUBLIC_API_DOMAIN);
  fetchUrl.searchParams.set("word", searchParam);

  const { isPending, error, data } = useQuery<PaginationResponse<WordCardType>>(
    {
      queryKey: ["repoData"],
      queryFn: () => fetch(fetchUrl.href).then((res) => res.json()),
    }
  );

  if (isPending)
    return (
      <>
        <WordCardSkeleton />
        <WordCardSkeleton />
        <WordCardSkeleton />
      </>
    );

  if (error) return "An error has occurred: " + error.message;

  const wordItems = data.items;

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
      {data.hasPagination && (
        <Pagination
          showControls
          total={data.pageCount}
          initialPage={1}
          variant="light"
          size="lg"
          className="mx-auto"
        />
      )}
    </>
  );
};

export default WordCardSection;
