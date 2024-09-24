"use client";
import SearchBar from "@/components/shared/search/SearchBar";
import useWordCard from "@/hooks/wordCard/useWordCard";
import { useRouter } from "next/navigation";
import React from "react";

const SearchSection = () => {
  const router = useRouter();
  const { text, setText } = useWordCard();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(`search?q=${text}`);
  };
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <SearchBar text={text} setText={setText} />
    </form>
  );
};

export default SearchSection;
