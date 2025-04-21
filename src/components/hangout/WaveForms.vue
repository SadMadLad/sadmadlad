<script setup>
import useSongStore from "@/store/song";

const POWER_FACTOR = 1.35;
const LOWER_FACTOR = 6;

const songStore = useSongStore();
</script>

<template>
  <div
    class="pointer-events-none fixed left-0 top-0 -z-50 flex h-screen w-screen justify-center gap-0.5 overflow-x-hidden bg-indigo-900"
  >
    <div class="w-full scale-x-[-1]">
      <ul
        class="inline-flex h-1/2 min-h-60 w-1/2 scale-y-[-1] flex-row gap-0.5"
      >
        <li
          v-for="bar in songStore.filteredFrequencyBuffer"
          :class="`w-1 ${songStore.currentSong.styles.bg.primary}`"
          :style="{
            height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
          }"
        ></li>
      </ul>
      <ul class="flex h-1/2 min-h-60 w-1/2 flex-row gap-0.5">
        <li
          v-for="bar in songStore.filteredFrequencyBuffer"
          :class="`w-1 ${songStore.currentSong.styles.bg.secondary}`"
          :style="{
            height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
          }"
        ></li>
      </ul>
    </div>
    <div class="w-full">
      <ul
        class="inline-flex h-1/2 min-h-60 w-1/2 scale-y-[-1] flex-row gap-0.5"
      >
        <li
          v-for="bar in songStore.filteredFrequencyBuffer"
          :class="`w-1 ${songStore.currentSong.styles.bg.primary}`"
          :style="{
            height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
          }"
        ></li>
      </ul>
      <ul class="flex h-1/2 min-h-60 w-1/2 flex-row gap-0.5">
        <li
          v-for="bar in songStore.filteredFrequencyBuffer"
          :class="`w-1 ${songStore.currentSong.styles.bg.secondary}`"
          :style="{
            height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
          }"
        ></li>
      </ul>
    </div>
  </div>
</template>
