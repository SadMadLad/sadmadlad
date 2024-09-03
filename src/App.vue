<script setup>
import { onMounted, ref, onUnmounted, watch, computed } from "vue";

const FFT_SIZE = 256;
const BUFFER_LENGTH = 128;
const POWER_FACTOR = 1.25;
const LOWER_FACTOR = 10;

const songs = [
  "GTA V Theme",
  "HOTD Overkill - Jasper & Brutus",
  "HOTD Overkill - Torn Out Twisted",
  "Marly - You Never Know",
  "GTA VCS - Phil Collins - In the Air Tonight",
];

const currentSongIndex = ref(0);

const loop = ref(false);
const songElement = ref(null);
const songContext = ref(new AudioContext());
const songAnalyser = ref(null);

let frequencyBuffer = new Uint8Array(BUFFER_LENGTH);
const refFrequencyBuffer = ref([]);
const computedFrequencyBuffer = computed(() =>
  refFrequencyBuffer.value.filter((freq) => freq > 0),
);

let amplitudeBuffer = new Uint8Array(BUFFER_LENGTH);
const refAmplitudeBuffer = ref([]);
const computedAmplitudeBuffer = computed(() =>
  refAmplitudeBuffer.value.filter((amp) => amp > 0),
);

let isPlaying = ref(false);
let animationFrameId = null;

onMounted(() => {
  const songTrack = songContext.value.createMediaElementSource(
    songElement.value,
  );

  songAnalyser.value = songContext.value.createAnalyser();
  songAnalyser.value.fftSize = FFT_SIZE;

  songTrack.connect(songAnalyser.value);
  songAnalyser.value.connect(songContext.value.destination);
});

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

function moveToNext() {
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.length;
}

function canPlay() {
  songElement.value.addEventListener(
    "canplay",
    () => {
      playAudio();
    },
    { once: true },
  );
}

function handleOnEnd() {
  if (!loop.value) moveToNext();
}

onUnmounted(() => cancelAnimationFrame(animationFrameId));

watch(currentSongIndex, () => canPlay());
</script>

<template>
  <h1>{{ songs[currentSongIndex] }}</h1>
  <audio ref="songElement" @ended="handleOnEnd" :loop="loop" :src="`/songs/${songs[currentSongIndex]}.mp3`"></audio>
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <span>Loop</span>
      <input type="checkbox" v-model="loop" />
    </div>
    <button @click="playAudio">Play</button>
    <button @click="pauseAudio">Pause</button>
    <button @click="moveToNext">Next</button>
  </div>

  <div class="overflow-x-hidden flex justify-center gap-px">
    <div class="scale-x-[-1]">
      <ul class="inline-flex flex-row h-60 scale-y-[-1] gap-px">
        <li v-for="bar in computedFrequencyBuffer" class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"></li>
      </ul>
      <ul class="flex flex-row gap-px h-60">
        <li v-for="bar in computedFrequencyBuffer" class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"></li>
      </ul>
    </div>
    <div>
      <ul class="inline-flex flex-row gap-px h-60 scale-y-[-1]">
        <li v-for="bar in computedFrequencyBuffer" class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"></li>
      </ul>
      <ul class="flex flex-row gap-px h-60">
        <li v-for="bar in computedFrequencyBuffer" class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"></li>
      </ul>
    </div>
  </div>
</template>
