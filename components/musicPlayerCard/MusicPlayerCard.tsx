"use client";
import { Card, CardBody, Button, Slider, Image } from "@nextui-org/react";
import React, { FC, useState } from "react";

import {
  HeartIcon,
  RepeatOneIcon,
  PreviousIcon,
  PauseCircleIcon,
  NextIcon,
  ShuffleIcon,
} from "@/components/shared/Icons";

type MusicPlayerCardProps = {
  title: string;
  album: string;
  singer: string;
  duration: number;
};

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}:${formattedSeconds}`;
}

const MusicPlayerCard: FC<MusicPlayerCardProps> = ({
  title,
  album,
  singer,
  duration,
}) => {
  const [liked, setLiked] = useState(false);
  const DEFAULT_CURRENT_VALUE = 40;
  const [currentValue, setCurrentValue] = useState<number | number[]>(
    DEFAULT_CURRENT_VALUE
  );
  const currentDuration =
    typeof currentValue === "number"
      ? (duration * currentValue) / 100
      : (duration * DEFAULT_CURRENT_VALUE) / 100;

  const displayCurrentDuration = formatDuration(Math.floor(currentDuration));
  const displayDuration = formatDuration(duration);

  return (
    <Card
      isBlurred
      className="max-w-[610px] border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="/assets/gestalt_logo.jpg"
              width="100%"
            />
          </div>

          <div className="col-span-6 flex flex-col md:col-span-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-0">
                <h1 className="mt-2 text-large font-medium">{title}</h1>
                <h3 className="font-semibold text-foreground/90">{album}</h3>
                <p className="text-small text-foreground/80">{singer}</p>
              </div>
              <Button
                isIconOnly
                className="-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                value={currentValue}
                onChange={(value) => setCurrentValue(value)}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">{displayCurrentDuration}</p>
                <p className="text-small text-foreground/50">
                  {displayDuration}
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="size-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MusicPlayerCard;
