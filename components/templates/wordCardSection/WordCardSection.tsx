import WordCardSkeleton from "@/components/wordCard/skeleton.tsx/wordCardSkeleton";
import WordCard from "@/components/wordCard/wordCard";
import { Pagination, Spinner } from "@nextui-org/react";
import React from "react";
import useWordCard from "@/hooks/wordCard/useWordCard";

const WordCardSection = () => {
  const {
    isPending,
    isPlaceholderData,
    wordDataList,
    handlePagination,
    is404,
    is500,
    error,
  } = useWordCard();

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

  if (is404) {
    return <p>404</p>;
  }

  if (is500) {
    return <p>500</p>;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  const wordItems = wordDataList!.items;

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
