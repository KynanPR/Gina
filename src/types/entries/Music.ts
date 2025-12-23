import type { EntryBase } from "./EntryBase";

export interface Music extends EntryBase {
  releaseDate: Date;
  name: string;
  bandcampLink?: string;
  artistNames: string[];
  albumArtUrl?: string;
  body: string;
}
