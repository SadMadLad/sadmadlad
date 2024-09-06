<script setup>
import { onMounted, ref, onUnmounted, watch, computed } from "vue";
import ClapButton from "@/components/ClapButton.vue";

const FFT_SIZE = 256;
const BUFFER_LENGTH = 128;
const POWER_FACTOR = 1.25;
const LOWER_FACTOR = 6;

const gtaClapPoints = [
  ...Array.from({ length: 15 }, (_, i) => +(8.76 + i * 1.35).toFixed(2)),
  ...Array.from({ length: 40 }, (_, i) => +(30.38 + i * 1.35).toFixed(2)),
];

const songs = [
  "HOTD Overkill - Torn Out Twisted",
  "GTA V Theme",
  "HOTD Overkill - Jasper & Brutus",
  "Marly - You Never Know",
  "GTA VCS - Phil Collins - In the Air Tonight",
  "Queen - Radio Ga Ga",
  "Gerudo Valley - The Legend of Zelda_ Ocarina Of Time",
];

const currentSongIndex = ref(0);
const loop = ref(false);
const isSliderInFocus = ref(false);
const isPlaying = ref(false);

const songDuration = ref(0);
const songCurrentTimestamp = ref(0);
const songElement = ref(null);
const songAnalyser = ref(null);
const songContext = ref(new AudioContext());

const varlaLyrics = ref([]);

const currentLyric = computed(() => {
  const lyric = varlaLyrics.value.find(
    ([_, ...[[lowerRange, upperRange]]]) =>
      songCurrentTimestamp.value >= lowerRange &&
      songCurrentTimestamp.value < upperRange,
  );

  return lyric && lyric[0];
});

// Frequency Buffer
let frequencyBuffer = new Uint8Array(BUFFER_LENGTH);
const refFrequencyBuffer = ref([]);
const computedFrequencyBuffer = computed(() =>
  refFrequencyBuffer.value.filter((freq) => freq > 0),
);

// Amplitude Buffer
let amplitudeBuffer = new Uint8Array(BUFFER_LENGTH);
const refAmplitudeBuffer = ref([]);
const computedAmplitudeBuffer = computed(() =>
  refAmplitudeBuffer.value.filter((amp) => amp > 0),
);

let animationFrameId = null;

const playAudio = () => {
  songContext.value.resume();
  songElement.value.play();
  isPlaying.value = true;

  startFetchingAudioData();
};

const pauseAudio = () => {
  songContext.value.suspend();
  songElement.value.pause();
  isPlaying.value = false;

  cancelAnimationFrame(animationFrameId);
};

const getLiveAudioData = () => {
  if (!songAnalyser.value) return;

  songAnalyser.value.getByteFrequencyData(frequencyBuffer);
  songAnalyser.value.getByteTimeDomainData(amplitudeBuffer);

  refFrequencyBuffer.value = Array.from(frequencyBuffer);
  refAmplitudeBuffer.value = Array.from(amplitudeBuffer);
};

const startFetchingAudioData = () => {
  const update = () => {
    if (!isPlaying.value) return;

    getLiveAudioData();
    animationFrameId = requestAnimationFrame(update);
  };
  update();
};

const moveToNext = () =>
  (currentSongIndex.value = (currentSongIndex.value + 1) % songs.length);

function canPlay() {
  songElement.value.addEventListener("canplay", () => playAudio(), {
    once: true,
  });
}

function handleOnEnd() {
  if (!loop.value) moveToNext();
}

function updateTimestamp() {
  if (isSliderInFocus.value) return;

  songCurrentTimestamp.value = songElement.value.currentTime;
}

watch(currentSongIndex, () => canPlay());

onUnmounted(() => cancelAnimationFrame(animationFrameId));

onMounted(() => {
  const songTrack = songContext.value.createMediaElementSource(
    songElement.value,
  );

  songAnalyser.value = songContext.value.createAnalyser();
  songAnalyser.value.fftSize = FFT_SIZE;

  songTrack.connect(songAnalyser.value);
  songAnalyser.value.connect(songContext.value.destination);

  fetch("/lyrics/HOTD Overkill - Torn Out Twisted.json")
    .then((response) => response.json())
    .then((lyrics) => (varlaLyrics.value = lyrics));
});
</script>

<template>
  <h1>{{ songs[currentSongIndex] }}</h1>
  <input
    v-model="songCurrentTimestamp"
    type="range"
    min="0"
    :max="songDuration"
    @change="songElement.currentTime = songCurrentTimestamp"
    @mousedown="isSliderInFocus = true"
    @mouseup="isSliderInFocus = false"
    @blur="isSliderInFocus = false"
    @mouseleave="isSliderInFocus = false"
  />
  {{ songElement ? songElement.currentTime : 0 }} /
  {{ Math.round(songDuration) }}
  <audio
    ref="songElement"
    @loadedmetadata="songDuration = songElement.duration"
    @ended="handleOnEnd"
    @timeupdate="updateTimestamp"
    :loop="loop"
    :src="`/songs/${songs[currentSongIndex]}.mp3`"
  ></audio>
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <span>Loop</span>
      <input type="checkbox" v-model="loop" />
    </div>
    <button @click="playAudio">Play</button>
    <button @click="pauseAudio">Pause</button>
    <button @click="moveToNext">Next</button>
  </div>

  <div
    class="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-full text-center"
    v-if="currentSongIndex === 0 && isPlaying"
  >
    <Transition name="lyric">
      <div
        class="absolute left-0 right-0 mx-auto"
        v-if="currentLyric"
        :key="currentLyric"
      >
        {{ currentLyric }}
      </div>
    </Transition>
  </div>

  <div class="overflow-x-hidden flex justify-center gap-px">
    <div class="scale-x-[-1]">
      <ul class="inline-flex flex-row h-60 scale-y-[-1] gap-px">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
      <ul class="flex flex-row gap-px h-60">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
    </div>
    <div>
      <ul class="inline-flex flex-row gap-px h-60 scale-y-[-1]">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
      <ul class="flex flex-row gap-px h-60">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
    </div>
  </div>
  <ClapButton
    :clap-points="gtaClapPoints"
    :current-timestamp="songElement.currentTime ?? 0"
    v-if="currentSongIndex === 1"
  />
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
