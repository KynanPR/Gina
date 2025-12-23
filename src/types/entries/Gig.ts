import type { EntryBase } from "./EntryBase";

export interface Gig extends EntryBase {
  gigDateTime: Date;
  location: string;
  ticketsLink?: string;
}
