import { Track } from "@/constants/schedule";

export function getTrackClassNames(track: Track): string {
  switch (track) {
    case "A":
      return "bg-track-a text-track-a-surface";
    case "B":
      return "bg-track-b text-track-b-surface";
    case "C":
      return "bg-track-c text-track-c-surface";
    case "D":
      return "bg-track-d text-track-d-surface";
    default:
      return "bg-secondary text-white";
  }
}
