import type { Instrument } from "../../src/types/entries";
// import { Music } from "/home/kynanpr/Documents/Projects/Gina/src/types/entries/Music.ts";

const instrumentSeedData: Instrument[] = [
  {
    id: "INS000",
    createdAt: new Date("2025-12-29"),
    updatedAt: new Date("2025-12-29"),
    title: "Old Violin",
    stub: "See the repair process of an old violin",
    baseImgUrl: "https://f4.bcbits.com/img/a1300676266_10.jpg",
    category: "Instrument",
    body: `This is a very fine instrument indeed. A replica of a 17th century violin by Mr Violin.
    I had to replace a couple of parts and do other luthing (verb of luthier right?)`
  },
  {
    id: "INS001",
    createdAt: new Date("2024-06-15"),
    updatedAt: new Date("2024-06-16"),
    title: "Custom Acoustic Guitar",
    stub: "Hand-built omoelectric guitar",
    baseImgUrl: "https://picsum.photos/seed/guitar/400/200",
    category: "Instrument",
    body: `Built from reclaimed spruce and walnut. Neck reset performed during final setup. Finished with a satin oil.`
  },
  {
    id: "INS002",
    createdAt: new Date("2025-02-01"),
    updatedAt: new Date("2025-01-30"),
    title: "Restored Mandolin",
    stub: "Neck re-fret and varnish touch-up",
    baseImgUrl: "https://picsum.photos/seed/mandolin/400/200",
    category: "Instrument",
    body: `Mandolin rescued from water damage. Soundboard was replaced with thin Sitka spruce. Note: updatedAt intentionally before createdAt for testing.`
  },
  {
    id: "INS003",
    createdAt: new Date("2023-11-11"),
    updatedAt: new Date("2025-12-30"),
    title: "Experimental Electric Violin",
    stub: "Piezo pickups and graphite fingerboard",
    baseImgUrl: "https://picsum.photos/seed/electricviolin/400/200",
    category: "Instrument",
    body: `Prototype instrument with hybrid pickup system. Some cosmetic cracks were intentionally left.`
  },
  {
    id: "INS004",
    createdAt: new Date("2025-12-30T10:00:00"),
    updatedAt: new Date("2025-12-30T09:00:00"),
    title: "Compact Travel Ukulele",
    stub: "Built-in humidifier pocket",
    baseImgUrl: "https://picsum.photos/seed/ukulele/400/200",
    category: "Instrument",
    body: `Small-body tenor ukulele with an integrated humidifier pouch. Updated before creation on purpose.`
  },
  {
    id: "INS005",
    createdAt: new Date("2022-04-20"),
    updatedAt: new Date("2022-04-20"),
    title: "Barn Find Cello",
    stub: "Full restoration documented",
    baseImgUrl: "https://picsum.photos/seed/cello/400/200",
    category: "Instrument",
    body: `Complete restoration including glue-line repairs, bridge refit and new pegs. Some historical labels preserved.`
  },
  {
    id: "INS006",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2025-12-31"),
    title: "Future Prototype Luthier Build",
    stub: "Anachronistic test entry",
    baseImgUrl: "https://picsum.photos/seed/prototype/400/200",
    category: "Instrument",
    body: `A speculative build using carbon-fibre ribs and traditional top. Dates intentionally weird to test resilience.`
  },
 
];

export default instrumentSeedData;
