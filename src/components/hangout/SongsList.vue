<script setup>
import PauseButton from "@/assets/svgs/pause.svg";
import PlayButton from "@/assets/svgs/play.svg";
import { songs } from "@/constants/songs";
import useSongStore from "@/store/song";

const songStore = useSongStore();
const { setCurrentSongIndex, play, pause } = songStore;

function playSongFromList(index) {
	setCurrentSongIndex(index);
	play();
}
</script>

<template>
  <ul class="flex flex-col gap-2.5">
    <li
      :class="`grid w-full grid-cols-6 gap-2 px-6 sm:grid-cols-9 md:grid-cols-10 ${songStore.currentSongIndex === index ? 'py-4' : 'py-2.5'} items-center transition-colors ${songStore.currentSongIndex === index && 'rounded-lg bg-secondary-500'} ${songStore.currentSongIndex === index ? 'font-semibold text-black' : 'text-white'}`"
      v-for="({ id, title, by, duration }, index) in songs"
      :key="id"
    >
      <span class="hidden justify-self-center md:inline">{{
        String(index).padStart(2, "0")
      }}</span>
      <span class="col-span-4 font-semibold">{{ title }}</span>
      <span class="col-span-3 hidden sm:inline">{{ by }}</span>
      <span> {{ Math.floor(duration / 60) }}:{{ duration % 60 }} </span>
      <div class="ml-3">
        <PlayButton
          v-if="!songStore.isPlaying || songStore.currentSongIndex !== index"
          :class="`${index === songStore.currentSongIndex ? 'fill-zinc-800' : 'fill-white'} h-8 w-8 cursor-pointer`"
          @click="playSongFromList(index)"
        />
        <PauseButton
          v-else
          @click="pause"
          class="h-8 w-8 cursor-pointer fill-zinc-700"
        />
      </div>
    </li>
  </ul>
</template>
