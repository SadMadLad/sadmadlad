import GerudoValleyCover from "@/assets/songs/pics/Gerudo Valley - The Legend of Zelda Ocarina Of Time.jpg";
import GoodbyeEsakaCover from "@/assets/songs/pics/Goodbye Esaka - KOF2000.jpg";
import GtaVThemeCover from "@/assets/songs/pics/GTA V Theme.jpg";
import TornOutTwistedCover from "@/assets/songs/pics/HOTD Overkill - Torn Out Twisted.jpg";
import TornOutTwistedLyrics from "@/assets/songs/lyrics/HOTD Overkill - Torn Out Twisted.json";
import YouNeverKnowCover from "@/assets/songs/pics/Marly - You Never Know.jpg";

const songs = [
  {
    audio: "/songs/HOTD Overkill - Torn Out Twisted.mp3",
    cover: TornOutTwistedCover,
    has_lyrics_available: true,
    lyrics: TornOutTwistedLyrics,
    title: "HOTD Overkill - Torn Out Twisted",
  },
  {
    audio: "/songs/GTA V Theme.mp3",
    cover: GtaVThemeCover,
    has_lyrics_available: false,
    title: "GTA V Theme",
  },
  {
    audio: "/songs/Gerudo Valley - The Legend of Zelda Ocarina Of Time.mp3",
    cover: GerudoValleyCover,
    has_lyrics_available: false,
    title: "Gerudo Valley - The Legend of Zelda Ocarina of Time",
  },
  {
    audio: "/songs/Goodbye Esaka - KOF2000.mp3",
    cover: GoodbyeEsakaCover,
    has_lyrics_available: false,
    title: "Goodbye Esaka - KOF2000",
  },
  {
    audio: "/songs/Marly - You Never Know.mp3",
    cover: YouNeverKnowCover,
    has_lyrics_available: false,
    title: "Marly - You Never Know",
  },
];

export default songs;
