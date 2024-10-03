import HeroSection from "@/components/home/HeroSection";
import Container from "@/components/shared/container/Container";

import SearchSection from "@/components/shared/search/SearchSection";
import SearchBarSkeleton from "@/components/shared/search/skeleton/SearchBarSkeleton";

import React, { Suspense } from "react";

export default function Home() {
  return (
    <Container className="gap-y-16">
      <Suspense fallback={<SearchBarSkeleton />}>
        <SearchSection />
      </Suspense>
      <p>{process.env.NEXT_PUBLIC_API_DOMAIN}</p>
      <HeroSection />
    </Container>
  );
}
