import { Pagination, Spinner } from "@nextui-org/react";
import React from "react";

import WordCardSkeleton from "@/components/wordCard/skeleton.tsx/wordCardSkeleton";
import WordCard from "@/components/wordCard/wordCard";
import useWordCard from "@/hooks/wordCard/useWordCard";

const WordCardSection = () => {
  const { useWords, handlePagination } = useWordCard();
  const { isPending, isPlaceholderData, error, data } = useWords();

  if (isPending && !isPlaceholderData) {
    return (
      <>
        <WordCardSkeleton />
        <WordCardSkeleton />
        <WordCardSkeleton />
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
      {isPlaceholderData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
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
