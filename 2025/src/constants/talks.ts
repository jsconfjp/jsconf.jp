type Track = "A" | "B" | "C" | "D";
type Language = "English" | "Japanese";
type Speaker = {
  name: string;
  avatarUrl: string;
};

export type Talk = {
  title: string;
  track: Track;
  startTime: string;
  endTime: string;
  language: Language;
  speakers: Speaker[];
};

export const TALKS: Talk[] = [];
