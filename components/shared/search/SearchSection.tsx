"use client";
import SearchBar from "@/components/shared/search/SearchBar";
import useWordCard from "@/hooks/wordCard/useWordCard";

import React from "react";

const SearchSection = () => {
  const { text, setText, handleSearch } = useWordCard();

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <SearchBar text={text} setText={setText} />
    </form>
  );
};

export default SearchSection;
