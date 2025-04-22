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
const { pause, play } = songStore;
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
    <div
      class="container grid w-full grid-cols-3 items-center gap-8 overflow-x-auto px-4 py-6"
    >
      <div class="flex flex-shrink-0 items-center gap-4 place-self-start">
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
      <div
        class="flex flex-grow items-center justify-center gap-4 place-self-center"
      >
        <SkipBackButton
          class="cursor-pointer fill-white"
          @click="songStore.goToPreviousSong"
        />
        <button
          class="h-16 w-16 cursor-pointer rounded-full bg-secondary-500"
          @click="togglePausePlay"
        >
          <PlayButton
            class="h-16 w-16 fill-white p-4"
            v-if="!songStore.isPlaying"
          />
          <PauseButton class="h-16 w-16 fill-white p-4" v-else />
        </button>
        <SkipForwardButton
          class="cursor-pointer fill-white"
          @click="songStore.goToNextSong"
        />
      </div>
      <div
        class="flex-shrink-0 cursor-pointer place-self-end self-center"
        @click="songStore.toggleIsOnLoop"
      >
        <RepeatButton
          :class="`h-8 w-8 ${songStore.isOnLoop ? 'fill-secondary-500' : 'fill-white'}`"
        />
      </div>
    </div>
  </footer>
</template>
