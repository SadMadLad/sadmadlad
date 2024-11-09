import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { songs } from "@/constants/songs";

const useSongStore = defineStore("song", () => {
  /* Data Variables */
  const barColor = ref("black");
  const currentSongIndex = ref(0);
  const isOnLoop = ref(false);
  const thumbColor = ref("#d97706");

  /* Getters */
  const getBarColor = computed(() => barColor)
  const getCurrentSong = computed(() => songs[currentSongIndex]);
  const getCurrentSongIndex = computed(() => currentSongIndex);
  const getIsOnLoop = ref(true);
  const getThumbColor = computed(() => thumbColor);

  /* Setters */
  const setBarColor = (newBarColor) => barColor.value = newBarColor;
  const setThumbColor = (newThumbColor) => thumbColor.value = newThumbColor;
  const setBarAndThumbColor = ({ newBarColor, newThumbColor }) => {
    setBarColor(newBarColor);
    setThumbColor(newThumbColor);
  }
  const setIsOnLoop = (newIsOnLoop) => isOnLoop.value = newIsOnLoop;
  const setCurrentSongIndex = (index) => currentSongIndex.value = index;

  /* Custom Methods */
  const goToNextSong = () => {
    currentSongIndex.value = (currentSongIndex.value + 1) % songs.length
  }
  const goToPreviousSong = () => {
    currentSongIndex.value = currentSongIndex.value - 1 < 0 ? songs.length - 1 : currentSongIndex.value - 1;
  }
  const switchIsOnLoop = () => isOnLoop.value = !isOnLoop.value;

  return {
    getBarColor,
    getCurrentSong,
    getCurrentSongIndex,
    getIsOnLoop,
    getThumbColor,

    setBarColor,
    setBarAndThumbColor,
    setCurrentSongIndex,
    setIsOnLoop,
    setThumbColor,

    goToNextSong,
    goToPreviousSong,
    switchIsOnLoop,
  }
})

export default useSongStore;
