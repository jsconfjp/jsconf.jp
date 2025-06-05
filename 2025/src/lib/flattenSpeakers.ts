import { TALKS, FlattenedSpeaker, Talk } from "@/constants/talks";

// Flattens talk-speaker relationships from default TALKS (recommended for production use)
export function flattenSpeakers(): FlattenedSpeaker[];

// For testing only: flattens talk-speaker relationships from custom talks array
export function flattenSpeakers(talks: readonly Talk[]): FlattenedSpeaker[];

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
