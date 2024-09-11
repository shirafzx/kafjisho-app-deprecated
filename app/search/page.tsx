"use client";
import Container from "@/components/shared/container/Container";
import SearchBar from "@/components/shared/search/Search";
import WordCardSection from "@/components/templates/wordCardSection/WordCardSection";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchParam = searchParams.get("q") || "";
  if (!searchParam) {
    router.push("/");
  }
  return (
    <>
      <Container className="gap-4">
        <SearchBar query={searchParam || ""} />
        <WordCardSection />
      </Container>
    </>
  );
};

export default Search;
