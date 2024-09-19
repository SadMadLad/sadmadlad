<script setup>
import ClapButton from "@/components/ClapButton.vue";
import {
  computed,
  onMounted,
  onBeforeMount,
  onUnmounted,
  ref,
  watch,
  onUpdated,
} from "vue";
import Songs from "@/constants/songs";
import useNavbarStylesStore from "@/store/navbar_styles";

const { updateExactActiveClasses, updateHeaderClasses } =
  useNavbarStylesStore();

const FFT_SIZE = 256;
const BUFFER_LENGTH = 128;
const POWER_FACTOR = 1.25;
const LOWER_FACTOR = 6;

const gtaClapPoints = [
  ...Array.from({ length: 15 }, (_, i) => +(8.76 + i * 1.35).toFixed(2)),
  ...Array.from({ length: 40 }, (_, i) => +(30.38 + i * 1.35).toFixed(2)),
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

const varlaLyrics = ref(Songs[0].lyrics);

const currentLyric = computed(() => {
  if (!songElement.value || !varlaLyrics.value) return;

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
  refFrequencyBuffer.value = Array.from(frequencyBuffer);
};

const startFetchingAudioData = () => {
  const update = () => {
    if (!isPlaying.value) return;

    getLiveAudioData();
    animationFrameId = requestAnimationFrame(update);
  };
  update();
};

const moveToNext = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % Songs.length;
  cancelAnimationFrame(animationFrameId);
};

function canPlay() {
  songElement.value.addEventListener("canplay", () => playAudio(), {
    once: true,
  });
}

function handleOnEnd() {
  if (!loop.value) moveToNext();
}

function updateTimestamp() {
  if (isSliderInFocus.value || !songElement || !songElement.value) return;

  songCurrentTimestamp.value = songElement.value.currentTime;
}

watch(currentSongIndex, () => canPlay());

onUnmounted(() => cancelAnimationFrame(animationFrameId));

onMounted(() => {
  updateExactActiveClasses("text-red-500", "text-blue-500");
  updateHeaderClasses("text-purple-500", "text-lime-500");

  const songTrack = songContext.value.createMediaElementSource(
    songElement.value,
  );

  songAnalyser.value = songContext.value.createAnalyser();
  songAnalyser.value.fftSize = FFT_SIZE;

  songTrack.connect(songAnalyser.value);
  songAnalyser.value.connect(songContext.value.destination);
});
</script>

<template>
  <h1 class="mt-20">{{ Songs[currentSongIndex].title }}</h1>
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
  <img :src="Songs[currentSongIndex].cover" />
  {{ songElement ? songElement.currentTime : 0 }} /
  {{ Math.round(songDuration) }}
  <audio
    ref="songElement"
    @loadedmetadata="songDuration = songElement.duration"
    @ended="handleOnEnd"
    @timeupdate="updateTimestamp"
    :loop="loop"
    :src="Songs[currentSongIndex].audio"
  ></audio>
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <span>Loop</span>
      <input type="checkbox" v-model="loop" />
    </div>
    <button @click="playAudio">Play</button>
    <button @click="pauseAudio">Pause</button>
    <button @click="moveToNext">Next</button>
    <button @click=""></button>
  </div>

  <div
    class="fixed bottom-20 left-1/2 z-50 w-full -translate-x-1/2 text-center"
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

  <div class="flex justify-center gap-px overflow-x-hidden">
    <div class="scale-x-[-1]">
      <ul class="inline-flex h-60 scale-y-[-1] flex-row gap-px">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
      <ul class="flex h-60 flex-row gap-px">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-blue-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
    </div>
    <div>
      <ul class="inline-flex h-60 scale-y-[-1] flex-row gap-px">
        <li
          v-for="bar in computedFrequencyBuffer"
          class="w-1 bg-fuchsia-500"
          :style="{ height: Math.pow(bar, POWER_FACTOR) / LOWER_FACTOR + 'px' }"
        ></li>
      </ul>
      <ul class="flex h-60 flex-row gap-px">
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
