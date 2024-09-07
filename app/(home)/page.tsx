import Container from "@/components/shared/container/Container";
import SearchBar from "@/components/shared/search/Search";
import React from "react";

export default function Home() {
  return (
    <Container className="gap-y-16">
      <SearchBar />
    </Container>
  );
}
