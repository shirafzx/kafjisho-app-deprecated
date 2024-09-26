"use client";

import Container from "@/components/shared/container/Container";
import SearchSection from "@/components/shared/search/SearchSection";

import WordCardSection from "@/components/templates/wordCardSection/WordCardSection";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

const Search = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const wordQuery = searchParams.q;

  if (!wordQuery) {
    redirect("/");
  }

  return (
    <>
      <Container className="gap-4">
        <Suspense>
          <SearchSection />
          <WordCardSection />
        </Suspense>
      </Container>
    </>
  );
};

export default Search;
