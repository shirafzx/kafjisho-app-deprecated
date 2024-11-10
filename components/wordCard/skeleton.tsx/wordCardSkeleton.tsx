import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const WordCardSkeleton = () => {
  return (
    <Card className="w-full space-y-5 p-4" radius="lg">
      <div className="w-1/6 space-y-2 ">
        <Skeleton className="w-3/4 rounded-lg">
          <div className="h-3 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-8 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
      {/* <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton> */}
      <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <Skeleton className="w-3/12 rounded-lg">
        <div className="h-6 rounded-lg bg-default-300"></div>
      </Skeleton>
    </Card>
  );
};

export default WordCardSkeleton;
