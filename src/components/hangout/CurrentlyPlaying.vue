<script setup>
import MusicPlayer from "@/components/hangout/MusicPlayer.vue";
import PauseButton from "@/assets/svgs/pause.svg";
import PlayButton from "@/assets/svgs/play.svg";
import RepeatButton from "@/assets/svgs/repeat.svg";
import SkipBackButton from "@/assets/svgs/skip-back.svg";
import SkipForwardButton from "@/assets/svgs/skip-forward.svg";
import { storeToRefs } from "pinia";
import useSongStore from "@/store/song";

const songStore = useSongStore();
const { pause, play }= songStore;
const { isPlaying, currentSong } = storeToRefs(songStore);

function togglePausePlay() {
  if (isPlaying.value) {
    pause();
  } else {
    play();
  }
}
</script>

<template>
  <footer
    class="flex-center fixed bottom-0 left-0 z-50 w-full bg-zinc-900 text-white"
  >
    <MusicPlayer />
    <div class="container flex w-full gap-8 overflow-x-auto justify-between items-center px-4 py-6">
      <div class="flex items-center gap-4 flex-shrink-0">
        <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            :src="currentSong.cover"
            class="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-black">{{ currentSong.title }}</span>
          <span class="font-semibold text-gray-400">{{ currentSong.by }}</span>
        </div>
      </div>
      <div class="flex justify-center gap-4 items-center flex-grow">
        <SkipBackButton class="fill-white cursor-pointer" @click="songStore.goToPreviousSong"/>
        <button class="w-16 h-16 rounded-full bg-secondary-500 cursor-pointer" @click="togglePausePlay">
          <PlayButton class="fill-white p-4 w-16 h-16" v-if="!songStore.isPlaying"/>
          <PauseButton class="fill-white p-4 w-16 h-16" v-else />
        </button>
        <SkipForwardButton class="fill-white cursor-pointer" @click="songStore.goToNextSong"/>
      </div>
      <div class="cursor-pointer flex-shrink-0" @click="songStore.toggleIsOnLoop">
        <RepeatButton :class="`w-8 h-8 ${songStore.isOnLoop ? 'fill-secondary-500' : 'fill-white'}`"/>
      </div>
    </div>
  </footer>
</template>
