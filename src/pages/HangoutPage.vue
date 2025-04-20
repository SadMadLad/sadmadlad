<script setup>
// import ClapButton from "@/components/ClapButton.vue";
import { onMounted, onUnmounted, watch } from "vue";
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
  initializeAudioSetup();
});

watch(
  currentSong,
  (song) => {
    const { primary, secondary } = song.musicPlayerStyles.tailwindClasses.text;

    updateExactActiveClasses({
      newExactActiveClass: `${secondary} font-bold`,
      newScrolledDownExactActiveClass: `${secondary} font-bold`,
    });

    updateHeaderClasses({
      newHeaderClass: primary,
      newScrolledDownHeaderClass: `${primary} bg-white/50 border-b`,
    });
  },
  { immediate: true },
);
</script>

<template>
  <div>
    <h1 class="mt-20">{{ currentSong.title }}</h1>
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
            :style="{
              height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
            }"
          ></li>
        </ul>
        <ul class="flex h-60 flex-row gap-px">
          <li
            v-for="bar in filteredFrequencyBuffer"
            class="w-1 bg-blue-500"
            :style="{
              height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
            }"
          ></li>
        </ul>
      </div>
      <div>
        <ul class="inline-flex h-60 scale-y-[-1] flex-row gap-px">
          <li
            v-for="bar in filteredFrequencyBuffer"
            class="w-1 bg-fuchsia-500"
            :style="{
              height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
            }"
          ></li>
        </ul>
        <ul class="flex h-60 flex-row gap-px">
          <li
            v-for="bar in filteredFrequencyBuffer"
            class="w-1 bg-blue-500"
            :style="{
              height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px',
            }"
          ></li>
        </ul>
      </div>
    </div>

    <hr class="my-4" />
  </div>
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
