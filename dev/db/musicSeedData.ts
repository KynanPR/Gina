import type { Music } from "../../src/types/entries/Music";
// import { Music } from "/home/kynanpr/Documents/Projects/Gina/src/types/entries/Music.ts";

const musicSeedData: Music[] = [
  {
    id: "PLrp78m2CD5FRgvt4NAx",
    createdAt: new Date("2025-12-29"),
    updatedAt: new Date("2025-12-29"),
    title: "How's About Now",
    stub: "Good Flute Music",
    baseImgUrl: "https://f4.bcbits.com/img/a1300676266_10.jpg",
    category: "Music",
    releaseDate: new Date("2024-06-24"),
    albumName: "How's About Now",
    bandcampLink:
      "https://tiernancourellmusic.bandcamp.com/album/hows-about-now",
    artistNames: ["Tiernan Courell"],
    albumArtUrl: "https://f4.bcbits.com/img/a1300676266_10.jpg",
    body: `Tiernan Courell - Flute
Craig Baxter - Bodhran
Ali Hutton - Guitar
Rory Matheson - Piano
James Lindsay - Bass
Scott Wood - Mixing, Mastering, Engineer`,
  },
  {
    id: "lnsUFplh11I9p3XJBLvS",
    createdAt: new Date("2025-11-29"),
    updatedAt: new Date(),
    title: "Canny Band's Canny Band",
    stub: "Very Canny Indeed",
    baseImgUrl: "https://f4.bcbits.com/img/a1617138772_10.jpg",
    category: "Music",
    releaseDate: new Date("2022-04-18"),
    albumName: "The Canny Band",
    bandcampLink: "https://thecannyband.bandcamp.com/album/the-canny-band",
    artistNames: [
      "Canny Band",
      "Sam Mabbett",
      "Michael Biggins",
      "Callum Convoy",
    ],
    albumArtUrl: "https://f4.bcbits.com/img/a1617138772_10.jpg",
    body: `The Canny Band

Sam Mabbett - accordion
Michael Biggins - piano
Callum Convoy - bodhran

Jack Badcock (Track 8) - Vocals and Guitar

Recorded, mixed and mastered by Scott Turnbull at SAE Institute Glasgow and Paxton House. `,
  },
  {
    id: "c2N9nt6ay7GNCJuLXBZU",
    createdAt: new Date("2027-10-20"),
    updatedAt: new Date("2025-12-29"),
    title: "Tim Edey is Cute af",
    stub: "He also plays the guitar very well. Ross Ainlsie is also here",
    baseImgUrl: "https://f4.bcbits.com/img/a4164939158_10.jpg",
    category: "Music",
    releaseDate: new Date("2023-04-07"),
    albumName: "Diad",
    bandcampLink: "https://rossainslie.bandcamp.com/album/diad-2",
    artistNames: ["Ross Ainslie", "Tim Edey"],
    albumArtUrl: "https://f4.bcbits.com/img/a4164939158_10.jpg",
    body: `Tim and Ross have been playing together for years now and the idea for Diad was to capture the duo in a live setting in the studio in one day setting up playing like a gig so it captures the way the guys like to play, live, spontaneous and free.

Award-winning multi instrumentalists who are old friends and two of the best musicians of their generation.

Tim is a double BBC Musician of the year (BBC FOLK AWARDS 2012) and BBC Scotland 2020.
Tim was The Chieftains guitarist+accordionist of choice for 10 years touring globally and appearing with artistes like Ry Cooder + Paul Brady,
Tim also has a long standing solo career.
Rated by many to be one of the words best guitarists and melodeon players in the celtic folk scene and has recorded & toured with everyone from Christy Moore to Altan & Natalie MacMaster, Julie Fowlis + Lunasa.

Ross is a 3 times nominated Musician of the year at the BBC Radio 2 Folk Awards 2013, 2016, 2018, he won best duo in the same awards with Ali Hutton in 2017. He won Composer of the Year in 2015 at the Scots Trad Music Awards. He performs with bands including Treacherous Orchestra, Salsa Celtica, Duncan Chisholm, Dougie Maclean, Ali Hutton, Jarlath Henderson and lots more. Ross has 5 solo albums to date Wide Open in 2013, Remembering in 2015, Sanctuary in 2017, Vana in 2020 and Live at the Gorbals in 2022.`,
  },
];

export default musicSeedData;
