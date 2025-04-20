import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import { songs } from "@/constants/songs";

const useSongStore = defineStore("song", () => {
  /* Constants */
  const { barColor: firstSongBarColor, thumbColor: firstSongThumbColor } =
    songs[0].musicPlayerStyles;

  const FFT_SIZE = 256;
  const BUFFER_LENGTH = 128;

  /** Data Variables **/
  let frequencyBufferVal = new Uint8Array(BUFFER_LENGTH);
  let animationFrameId = null;

  /* Private */
  const analyser = ref(null);
  const audioContext = ref(new AudioContext());
  const barColor = ref(firstSongBarColor);
  const currentSongIndex = ref(0);
  const frequencyBuffer = ref([]);
  const thumbColor = ref(firstSongThumbColor);

  /* Public */
  const audioElement = ref(null);
  const currentSong = ref(songs[currentSongIndex.value]);
  const duration = ref(0);
  const isOnLoop = ref(false);
  const isPlaying = ref(false);
  const isSliderInFocus = ref(false);
  const timestamp = ref(0);

  /** Computed Properties **/

  const filteredFrequencyBuffer = computed(() =>
    frequencyBuffer.value.filter((freq) => freq > 0),
  );

  /** Methods **/

  /* Private */
  function setBarAndThumbColor({ newBarColor, newThumbColor }) {
    barColor.value = newBarColor;
    thumbColor.value = newThumbColor;
  }

  function getLiveAudioData() {
    if (!analyser.value) return;

    analyser.value.getByteFrequencyData(frequencyBufferVal);
    frequencyBuffer.value = Array.from(frequencyBufferVal);
  }

  function startFetchingAudioData() {
    function update() {
      if (!isPlaying.value) return;

      getLiveAudioData();
      animationFrameId = requestAnimationFrame(update);
    }

    cancelAnimation();
    update();
  }

  /* Public */
  function cancelAnimation() {
    cancelAnimationFrame(animationFrameId);
  }

  function goToNextSong() {
    currentSongIndex.value = (currentSongIndex.value + 1) % songs.length;
    currentSong.value = songs[currentSongIndex.value];

    cancelAnimation();
  }

  function goToPreviousSong() {
    currentSongIndex.value =
      currentSongIndex.value - 1 < 0
        ? songs.length - 1
        : currentSongIndex.value - 1;
    currentSong.value = songs[currentSongIndex.value];

    cancelAnimation();
  }

  function handleOnEnd() {
    if (!isOnLoop.value) goToNextSong();
  }

  function initializeAudioSetup() {
    const songTrack = audioContext.value.createMediaElementSource(
      audioElement.value,
    );

    analyser.value = audioContext.value.createAnalyser();
    analyser.value.fftSize = FFT_SIZE;

    songTrack.connect(analyser.value);
    analyser.value.connect(audioContext.value.destination);
  }

  function pause() {
    audioContext.value.suspend();
    audioElement.value.pause();
    isPlaying.value = false;

    cancelAnimationFrame(animationFrameId);
  }

  function play() {
    audioContext.value.resume();
    audioElement.value.play();
    isPlaying.value = true;

    startFetchingAudioData();
  }

  function toggleIsOnLoop() {
    isOnLoop.value = !isOnLoop.value;
  }

  function updateTimestamp() {
    if (isSliderInFocus.value || !audioElement.value) return;

    timestamp.value = audioElement.value.currentTime;
  }

  /** Watchers **/

  watch(currentSong, (newSong) => {
    const { barColor: newBarColor, thumbColor: newThumbColor } =
      newSong.musicPlayerStyles;

    if (isPlaying.value) {
      audioElement.value.addEventListener("canplay", () => play(), {
        once: true,
      });
    }

    setBarAndThumbColor({ newBarColor, newThumbColor });
  });

  return {
    audioElement,
    barColor,
    currentSong,
    duration,
    isOnLoop,
    isPlaying,
    isSliderInFocus,
    thumbColor,
    timestamp,

    filteredFrequencyBuffer,

    cancelAnimation,
    goToNextSong,
    goToPreviousSong,
    handleOnEnd,
    initializeAudioSetup,
    pause,
    play,
    toggleIsOnLoop,
    updateTimestamp,
  };
});

export default useSongStore;
