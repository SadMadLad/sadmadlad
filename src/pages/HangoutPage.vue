<script setup>
import CurrentlyPlaying from "@/components/hangout/CurrentlyPlaying.vue";
import WaveForms from "@/components/hangout/WaveForms.vue";
import { onBeforeUnmount, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import SongsList from "@/components/hangout/SongsList.vue";
import useNavbarStylesStore from "@/store/navbar_styles";
import useSongStore from "@/store/song";

const { updateExactActiveClasses, updateHeaderClasses } =
  useNavbarStylesStore();
const songStore = useSongStore();
const {
  cancelAnimation,
  initializeAudioSetup,
  handleOnEnd,
  pause,
  updateTimestamp,
} = songStore;

const { audioElement, currentSong, duration, isOnLoop } =
  storeToRefs(songStore);

onBeforeUnmount(() => {
  cancelAnimation();
  pause();
});

onMounted(() => {
  updateExactActiveClasses({
    newExactActiveClass: "text-indigo-300 font-bold",
    newScrolledDownExactActiveClass: "text-indigo-300 font-bold",
  });
  updateHeaderClasses({
    newHeaderClass: "text-white",
    newScrolledDownHeaderClass: "text-white bg-black/40 backdrop-blur",
  });

  initializeAudioSetup();
});
</script>

<template>
  <div class="flex-center bg-indigo-900/35 pb-40 backdrop-blur">
    <div
      class="container flex min-h-screen flex-col items-center gap-12 pt-28 lg:flex-row lg:items-start"
    >
      <section class="flex-shrink-0">
        <div class="h-96 w-[22rem] sm:w-[28rem]">
          <img
            :src="currentSong.cover"
            class="h-full w-full object-cover opacity-75 mix-blend-overlay"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <h1
            class="mt-4 max-w-[22rem] text-center text-3xl font-black text-white sm:max-w-[28rem] lg:text-start"
          >
            <span class="text-indigo-300">{{ currentSong.title }}</span>
          </h1>
          <div
            class="text-center font-black uppercase text-white lg:text-start"
          >
            BY
            <span class="hover:text-secondary-500">{{ currentSong.by }}</span>
          </div>
        </div>
      </section>
      <section class="flex-grow">
        <SongsList />
      </section>
    </div>
  </div>
  <audio
    ref="audioElement"
    :loop="isOnLoop"
    :src="currentSong.audio"
    @loadedmetadata="duration = audioElement.duration"
    @ended="handleOnEnd"
    @timeupdate="updateTimestamp"
  ></audio>
  <WaveForms />
  <CurrentlyPlaying />
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
