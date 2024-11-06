import type { CardProps } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Avatar, Chip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

import { MeaningsType } from "@/types/wordCardTypes";

type WordCardProps = {
  kanji: string;
  furigana: string;
  meanings: MeaningsType;
  cardProps?: CardProps;
};

const WordCard = ({ kanji, furigana, meanings, cardProps }: WordCardProps) => {
  const thaiMeanings = meanings.thai;
  return (
    <Card
      className="w-full border-small border-default-100 p-3"
      shadow="sm"
      {...cardProps}
    >
      <CardBody className="gap-2 px-4 pb-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex max-w-[80%] flex-col gap-1">
            <p>
              <ruby className="h1-semibold">
                {kanji}
                <rt className="paragraph-regular">{furigana}</rt>
              </ruby>
            </p>
          </div>
          <Avatar
            className="bg-content2"
            icon={
              <Image
                src="/assets/icons/kaf-jiro.png"
                alt="kaf-jiro"
                width={34}
                height={34}
              />
            }
          />
        </div>
        <div className="flex gap-2">
          {thaiMeanings.map((meaning) => (
            <span key={meaning} className="paragraph-regular text-default-500">
              {meaning}
            </span>
          ))}
        </div>
      </CardBody>
      <CardFooter className="gap-2">
        {/* <Button size="sm" variant="faded">
          Configure
        </Button> */}
        <Chip color="primary" variant="dot">
          名詞 - noun
        </Chip>
        <Chip color="danger" variant="dot">
          JLPT N99
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default WordCard;
