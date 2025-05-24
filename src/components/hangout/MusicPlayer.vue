<script setup>
import { storeToRefs } from "pinia";
import useSongStore from "@/store/song";

const songStore = useSongStore();

function handleInput() {
	isSliderInFocus.value = true;
	audioElement.value.currentTime = timestamp.value;
	isSliderInFocus.value = false;
}
const { audioElement, duration, isSliderInFocus, timestamp } =
	storeToRefs(songStore);

const barColor = "#6366f1";
const thumbColor = "#84cc16";
</script>

<template>
  <div class="absolute left-0 top-0 w-full">
    <div class="flex-center relative">
      <progress
        class="absolute left-1/2 top-1/2 m-auto h-2 w-full -translate-x-1/2 -translate-y-1/2"
        :value="
          isFinite(timestamp) && isFinite(duration) && duration > 0
            ? (timestamp / duration) * 100
            : 0
        "
        max="100"
      >
        {{
          isFinite(timestamp) && isFinite(duration) && duration > 0
            ? (timestamp / duration) * 100
            : 0
        }}%
      </progress>
      <input
        v-model="timestamp"
        type="range"
        min="0"
        class="z-50"
        :max="duration"
        @input="handleInput"
        @change="audioElement.currentTime = timestamp"
        @mousedown="isSliderInFocus = true"
        @mouseup="isSliderInFocus = false"
        @blur="isSliderInFocus = false"
        @mouseleave="isSliderInFocus = false"
        id="slider"
      />
    </div>
  </div>
</template>

<style scoped>
/* Input Slider Styling */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

/* Chrome */
input[type="range"]::-webkit-slider-runnable-track {
  background-color: transparent;
  border-radius: 0.5rem;
  height: 0.5rem;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -4px;

  background-color: v-bind(thumbColor);
  height: 0rem;
  width: 0rem;

  border-radius: 5000px;
}

input[type="range"]:focus::-webkit-slider-thumb {
  /* border: 1px solid v-bind(barColor); */
  /* outline: 3px solid v-bind(barColor); */
  /* outline-offset: 0.125rem; */
  /* border-radius: 5000px; */
  display: hidden;
  appearance: none;
}

/* Mozilla */
input[type="range"]::-moz-range-track {
  background-color: transparent;
  border-radius: 0.5rem;
  height: 0.5rem;
}

input[type="range"]::-moz-range-thumb {
  border: none;
  border-radius: 0;

  background-color: v-bind(thumbColor);
  height: 2rem;
  width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb {
  border: 1px solid v-bind(barColor);
  outline: 3px solid v-bind(barColor);
  outline-offset: 0.125rem;
}

/* Progress Styling */
progress::-webkit-progress-bar {
  background-color: v-bind(barColor);
  border-radius: 7px;
}
progress::-webkit-progress-value {
  background-color: v-bind(thumbColor);
  border-radius: 7px;
}
progress::-moz-progress-bar {
  background-color: v-bind(thumbColor);
  border-radius: 7px;
}
</style>
