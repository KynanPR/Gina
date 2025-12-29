import type { EntryBase } from "./EntryBase";

export interface Gig extends EntryBase {
  category: "Gig";
  gigDateTime: Date;
  location: string;
  ticketsLink?: string;
}
