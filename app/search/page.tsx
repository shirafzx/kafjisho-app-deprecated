"use client";

import Container from "@/components/shared/container/Container";
import SearchBar from "@/components/shared/search/SearchBar";
import WordCardSection from "@/components/templates/wordCardSection/WordCardSection";
import useWordCard from "@/hooks/wordCard/useWordCard";
import { redirect } from "next/navigation";
import React from "react";

const Search = () => {
  const { word, text, setText, handleSearch } = useWordCard();

  if (!word) {
    redirect("/");
  }

  return (
    <>
      <Container className="gap-4">
        <form onSubmit={(e) => handleSearch(e)}>
          <SearchBar text={text} setText={setText} />
        </form>
        <WordCardSection />
      </Container>
    </>
  );
};

export default Search;
