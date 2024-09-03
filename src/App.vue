<script setup>
import { onMounted, ref, onUnmounted, watch, computed } from 'vue';

const FftSize = 256;
const bufferLength = 128;
const loop = ref(false);

const songs = [
  'GTA V Theme',
  'HOTD Overkill - Jasper & Brutus',
  'HOTD Overkill - Torn Out Twisted',
  'Marly - You Never Know'
];

const currentSongIndex = ref(0);

const songElement = ref(null);
const songContext = ref(new AudioContext());
const songAnalyser = ref(null);

let frequencyBuffer = new Uint8Array(bufferLength);
const refFrequencyBuffer = ref([]);
const computedFrequencyBuffer = computed(() => refFrequencyBuffer.value.filter(freq => freq > 0));

let amplitudeBuffer = new Uint8Array(bufferLength);
const refAmplitudeBuffer = ref([]);
const computedAmplitudeBuffer = computed(() => refAmplitudeBuffer.value.filter(amp => amp > 0));

let isPlaying = ref(false);
let animationFrameId = null;

onMounted(() => {
  const songTrack = songContext.value.createMediaElementSource(songElement.value);

  songAnalyser.value = songContext.value.createAnalyser();
  songAnalyser.value.fftSize = FftSize;

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
  if (songAnalyser.value) {
    songAnalyser.value.getByteFrequencyData(frequencyBuffer);
    songAnalyser.value.getByteTimeDomainData(amplitudeBuffer);

    refFrequencyBuffer.value = Array.from(frequencyBuffer);
    refAmplitudeBuffer.value = Array.from(amplitudeBuffer);
  }
};

const startFetchingAudioData = () => {
  const update = () => {
    if (isPlaying.value) {
      getLiveAudioData();
      animationFrameId = requestAnimationFrame(update);
    }
  };
  update();
};

function moveToNext() {
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.length
}

function canPlay() {
  songElement.value.addEventListener('canplay', () => {
    playAudio();
  }, { once: true });
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

  <ul class="flex flex-row gap-0.5 h-60 scale-y-[-1]">
    <li v-for="bar in computedFrequencyBuffer" class="w-1.5 bg-blue-500" :style="{ height: bar / 1.5 + 'px' }">
    </li>
  </ul>
  <ul class="flex flex-row gap-0.5 h-60">
    <li v-for="bar in computedFrequencyBuffer" class="w-1.5 bg-blue-500" :style="{ height: bar / 1.5 + 'px' }">
    </li>
  </ul>
</template>
