import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import Container from "@/components/shared/container/Container";

import React from "react";

export default function Home() {
  return (
    <Container className="gap-y-16">
      <SearchSection />
      <HeroSection />
    </Container>
  );
}
