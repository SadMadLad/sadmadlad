<script setup>
// import ClapButton from "@/components/ClapButton.vue";
import { onMounted, onUnmounted } from "vue";
import MusicPlayer from "@/components/hangout/MusicPlayer.vue";
import { storeToRefs } from "pinia";
import useNavbarStylesStore from "@/store/navbar_styles";
import useSongStore from "@/store/song";

const { updateExactActiveClasses, updateHeaderClasses } =
  useNavbarStylesStore();
const songStore = useSongStore();
const {
  cancelAnimation,
  goToNextSong,
  goToPreviousSong,
  initializeAudioSetup,
  handleOnEnd,
  pause,
  play,
  toggleIsOnLoop,
  updateTimestamp,
} = songStore;

const {
  audioElement,
  currentSong,
  duration,
  filteredFrequencyBuffer,
  isOnLoop,
  isSliderInFocus,
  timestamp,
} = storeToRefs(songStore);

const POWER_FACTOR = 1.25;
const LOWER_FACTOR = 6;

onUnmounted(() => cancelAnimation());

onMounted(() => {
  updateExactActiveClasses({
    newExactActiveClass: "text-red-500",
    newScrolledDownExactActiveClass: "text-blue-500",
  });
  updateHeaderClasses({
    newHeaderClass: "text-purple-500",
    newScrolledDownHeaderClass: "text-lime-500",
  });

  initializeAudioSetup();
});
</script>

<template>
  <h1 class="mt-20">{{ currentSong.title }}</h1>
  <input
    v-model="timestamp"
    type="range"
    min="0"
    :max="duration"
    @change="audioElement.currentTime = timestamp"
    @mousedown="isSliderInFocus = true"
    @mouseup="isSliderInFocus = false"
    @blur="isSliderInFocus = false"
    @mouseleave="isSliderInFocus = false"
  />
  <img :src="currentSong.cover" />
  {{ audioElement ? audioElement.currentTime : 0 }} /
  {{ Math.round(duration) }}
  <audio
    ref="audioElement"
    :loop="isOnLoop"
    :src="currentSong.audio"
    @loadedmetadata="duration = audioElement.duration"
    @ended="handleOnEnd"
    @timeupdate="updateTimestamp"
  ></audio>
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <button @click="toggleIsOnLoop">Loop 1 {{ isOnLoop }}</button>
    </div>
    <button @click="play">Play</button>
    <button @click="pause">Pause</button>
    <button @click="goToNextSong">Next</button>
    <button @click="goToPreviousSong">Back</button>
  </div>

  <MusicPlayer />

  <div class="flex justify-center gap-px overflow-x-hidden">
    <div class="scale-x-[-1]">
      <ul class="inline-flex h-60 scale-y-[-1] flex-row gap-px">
        <li
          v-for="bar in filteredFrequencyBuffer"
          class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
      <ul class="flex h-60 flex-row gap-px">
        <li
          v-for="bar in filteredFrequencyBuffer"
          class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
    </div>
    <div>
      <ul class="inline-flex h-60 scale-y-[-1] flex-row gap-px">
        <li
          v-for="bar in filteredFrequencyBuffer"
          class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
      <ul class="flex h-60 flex-row gap-px">
        <li
          v-for="bar in filteredFrequencyBuffer"
          class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
    </div>
  </div>
  <!-- <ClapButton
    :clap-points="gtaClapPoints"
    :current-timestamp="audioElement.currentTime ?? 0"
    v-if="currentSongIndex === 1"
  /> -->

  <hr class="my-4" />
</template>

<style scoped>
.lyric-enter-active,
.lyric-leave-active {
  transition: opacity 0.075s ease;
  opacity: 1;
}

.lyric-enter-from,
.lyric-leave-to {
  opacity: 0;
}
</style>
