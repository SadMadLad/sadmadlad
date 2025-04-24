import GerudoValleyCover from "@/assets/songs/pics/Gerudo Valley - The Legend of Zelda Ocarina Of Time.jpg";
import GoodbyeEsakaCover from "@/assets/songs/pics/Goodbye Esaka - KOF2000.jpg";
import GtaVThemeCover from "@/assets/songs/pics/GTA V Theme.jpg";
import TornOutTwistedCover from "@/assets/songs/pics/HOTD Overkill - Torn Out Twisted.jpg";
import TornOutTwistedLyrics from "@/assets/songs/lyrics/HOTD Overkill - Torn Out Twisted.json";
import YouNeverKnowCover from "@/assets/songs/pics/Marly - You Never Know.jpg";

const basePath = "/sadmadlad/";

const songs = [
  {
    id: "torn_out_twisted",
    audio: `${basePath}/songs/HOTD Overkill - Torn Out Twisted.mp3`,
    by: "Casey & The Creepy Feeling",
    cover: TornOutTwistedCover,
    has_lyrics_available: true,
    lyrics: TornOutTwistedLyrics,
    title: "Torn Out Twisted",
    duration: 167,
    styles: {
      bg: {
        primary: "bg-black",
        secondary: "bg-amber-700",
      },
    },
  },
  {
    id: "gta_v_theme",
    audio: `${basePath}/songs/GTA V Theme.mp3`,
    by: "Rockstar Games",
    cover: GtaVThemeCover,
    has_lyrics_available: false,
    title: "GTA V Theme",
    duration: 149,
    styles: {
      bg: {
        primary: "bg-fuchsia-500",
        secondary: "bg-purple-500",
      },
    },
  },
  {
    id: "gerudo_valley",
    audio: `${basePath}/songs/Gerudo Valley - The Legend of Zelda Ocarina Of Time.mp3`,
    by: "Koji Londo",
    cover: GerudoValleyCover,
    has_lyrics_available: false,
    title: "Gerudo Valley",
    duration: 175,
    styles: {
      bg: { primary: "bg-amber-700", secondary: "bg-emerald-700" },
    },
  },
  {
    id: "goodbye_esaka",
    audio: `${basePath}/songs/Goodbye Esaka - KOF2000.mp3`,
    by: "SNK Sound Team",
    cover: GoodbyeEsakaCover,
    has_lyrics_available: false,
    title: "Goodbye Esaka - KOF 2000",
    duration: 253,
    styles: {
      bg: {
        primary: "bg-orange-500",
        secondary: "bg-zinc-700",
      },
    },
  },
  {
    id: "you_never_know",
    audio: `${basePath}/songs/Marly - You Never Know.mp3`,
    by: "Marly",
    cover: YouNeverKnowCover,
    has_lyrics_available: false,
    title: "You Never Know",
    duration: 203,
    styles: {
      bg: {
        primary: "bg-pink-500",
        secondary: "bg-red-600",
      },
    },
  },
];

export { songs };
