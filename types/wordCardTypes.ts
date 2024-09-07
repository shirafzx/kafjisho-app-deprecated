export type MeaningsType = {
  thai: string[];
};

export type WordCardType = {
  id: number;
  word: string;
  furigana: string;
  meanings: MeaningsType;
};
