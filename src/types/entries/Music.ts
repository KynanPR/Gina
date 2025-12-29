import type { EntryBase } from "./EntryBase";

export interface Music extends EntryBase {
  category: "Music";
  releaseDate: Date;
  albumName: string;
  bandcampLink?: string;
  artistNames: string[];
  albumArtUrl?: string;
  body: string;
}
