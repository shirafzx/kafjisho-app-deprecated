import { Skeleton } from "@nextui-org/react";
import React from "react";

const SearchBarSkeleton = () => {
  return (
    <div className="flex w-full items-center gap-2">
      <Skeleton className="h-12 grow rounded-xl" />
      <Skeleton className="size-10 rounded-full" />
    </div>
  );
};

export default SearchBarSkeleton;
