"use client";
import React from "react";

import SearchBar from "@/components/shared/search/SearchBar";
import useWordCard from "@/hooks/wordCard/useWordCard";


const SearchSection = () => {
  const { text, setText, handleSearch } = useWordCard();

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <SearchBar text={text} setText={setText} />
    </form>
  );
};

export default SearchSection;
