import type { EntryBase } from "./EntryBase";
export interface Instrument extends EntryBase {
  category: "Instrument";
  body: string;
}
