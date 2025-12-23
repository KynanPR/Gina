import type { EntryCategory } from "./EntryCategory";

export interface EntryBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  stub: string;
  baseImgUrl?: string;
  category: EntryCategory;
}
