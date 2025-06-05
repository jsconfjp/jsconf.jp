import { TALKS, FlattenedSpeaker, Talk } from "@/constants/talks";

/**
 * Flattens the talk-speaker relationship into individual speaker entries.
 * Each speaker gets paired with their corresponding talk, creating
 * a denormalized structure that's easier to iterate over for speaker listings.
 * Used in speaker grids and other components that need to display speakers with their talk context.
 */
export function flattenSpeakers(
  talks: readonly Talk[] = TALKS
): FlattenedSpeaker[] {
  return talks.flatMap((talk) =>
    talk.speakers.map((speaker) => ({
      talk,
      speaker,
    }))
  );
}
