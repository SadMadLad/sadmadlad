import GerudoValleyCover from "@/assets/songs/pics/Gerudo Valley - The Legend of Zelda Ocarina Of Time.jpg";
import GoodbyeEsakaCover from "@/assets/songs/pics/Goodbye Esaka - KOF2000.jpg";
import GtaVThemeCover from "@/assets/songs/pics/GTA V Theme.jpg";
import TornOutTwistedCover from "@/assets/songs/pics/HOTD Overkill - Torn Out Twisted.jpg";
import TornOutTwistedLyrics from "@/assets/songs/lyrics/HOTD Overkill - Torn Out Twisted.json";
import YouNeverKnowCover from "@/assets/songs/pics/Marly - You Never Know.jpg";

const songs = [
  {
    id: "torn_out_twisted",
    audio: "/songs/HOTD Overkill - Torn Out Twisted.mp3",
    cover: TornOutTwistedCover,
    has_lyrics_available: true,
    lyrics: TornOutTwistedLyrics,
    title: "HOTD Overkill - Torn Out Twisted",
    musicPlayerStyles: {
      barColor: "#000000", // black
      thumbColor: "#f59e0b", // amber-500
      tailwindClasses: {
        text: {
          primary: "text-black",
          secondary: "text-amber-500",
        },
        background: {
          primary: "bg-black",
          secondary: "bg-amber-500",
        },
      },
    },
  },
  {
    id: "gta_v_theme",
    audio: "/songs/GTA V Theme.mp3",
    cover: GtaVThemeCover,
    has_lyrics_available: false,
    title: "GTA V Theme",
    musicPlayerStyles: {
      barColor: "#ea580c", // orange-600
      thumbColor: "#c026d3", // fuchsia-600
      tailwindClasses: {
        text: {
          primary: "text-orange-600",
          secondary: "text-fuchsia-600",
        },
        background: {
          primary: "bg-orange-600",
          secondary: "bg-fuchsia-600",
        },
      },
    },
  },
  {
    id: "gerudo_valley",
    audio: "/songs/Gerudo Valley - The Legend of Zelda Ocarina Of Time.mp3",
    cover: GerudoValleyCover,
    has_lyrics_available: false,
    title: "Gerudo Valley - The Legend of Zelda Ocarina of Time",
    musicPlayerStyles: {
      barColor: "#eab308", // yellow-500
      thumbColor: "#059669", // emerald-600
      tailwindClasses: {
        text: {
          primary: "text-yellow-500",
          secondary: "text-emerald-600",
        },
        background: {
          primary: "bg-yellow-500",
          secondary: "bg-emerald-600",
        },
      },
    },
  },
  {
    id: "goodbye_esaka",
    audio: "/songs/Goodbye Esaka - KOF2000.mp3",
    cover: GoodbyeEsakaCover,
    has_lyrics_available: false,
    title: "Goodbye Esaka - KOF2000",
    musicPlayerStyles: {
      barColor: "#525252", // neutral-600
      thumbColor: "#4f46e5", // indigo-700
      tailwindClasses: {
        text: {
          primary: "text-neutral-600",
          secondary: "text-indigo-700",
        },
        background: {
          primary: "bg-neutral-600",
          secondary: "bg-indigo-700",
        },
      },
    },
  },
  {
    id: "you_never_know",
    audio: "/songs/Marly - You Never Know.mp3",
    cover: YouNeverKnowCover,
    has_lyrics_available: false,
    title: "Marly - You Never Know",
    musicPlayerStyles: {
      barColor: "#f59e0b", // amber-500
      thumbColor: "#0ea5e9", // sky-500
      tailwindClasses: {
        text: {
          primary: "text-amber-500",
          secondary: "text-sky-500",
        },
        background: {
          primary: "bg-amber-500",
          secondary: "bg-sky-500",
        },
      },
    },
  },
];

export { songs };
