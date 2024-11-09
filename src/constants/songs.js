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
    musicPlayerStyles: {
      barColor: '#000000', // black
      thumbColor: '#d97706', // amber-600
    }
  },
  {
    audio: "/songs/GTA V Theme.mp3",
    cover: GtaVThemeCover,
    has_lyrics_available: false,
    title: "GTA V Theme",
    musicPlayerStyles: {
      barColor: '#ea580c', // orange-600
      thumbColor: '#c026d3', // fuchsia-600
    }
  },
  {
    audio: "/songs/Gerudo Valley - The Legend of Zelda Ocarina Of Time.mp3",
    cover: GerudoValleyCover,
    has_lyrics_available: false,
    title: "Gerudo Valley - The Legend of Zelda Ocarina of Time",
    musicPlayerStyles: {
      barColor: '#eab308', // yellow-500
      thumbColor: '#059669', // emerald-600
    }
  },
  {
    audio: "/songs/Goodbye Esaka - KOF2000.mp3",
    cover: GoodbyeEsakaCover,
    has_lyrics_available: false,
    title: "Goodbye Esaka - KOF2000",
    musicPlayerStyles: {
      barColor: '#525252', // neutral-600
      thumbColor: '#4f46e5', // indigo-700
    }
  },
  {
    audio: "/songs/Marly - You Never Know.mp3",
    cover: YouNeverKnowCover,
    has_lyrics_available: false,
    title: "Marly - You Never Know",
    musicPlayerStyles: {
      barColor: '#f59e0b', // amber-500
      thumbColor: '#0ea5e9', // sky-500
    }
  },
];

const firstSong = songs[0];

export { songs, firstSong };
