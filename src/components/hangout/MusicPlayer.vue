<script setup>
import { ref } from "vue";
import useSongStore from "@/store/song";

const { getThumbColor, getBarColor } = useSongStore();

const progress = ref(0);
</script>

<template>
  <div class="flex-center relative">
    <progress
      class="absolute left-1/2 top-1/2 m-auto h-2 w-64 -translate-x-1/2 -translate-y-1/2"
      :value="progress"
      max="100"
    >
      {{ progress }}%
    </progress>
    <input id="slider" type="range" class="z-50" v-model="progress" />
  </div>
</template>

<style scoped>
/* Input Slider Styling */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 16rem;
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

  background-color: v-bind(getThumbColor);
  height: 1rem;
  width: 1rem;
}

input[type="range"]:focus::-webkit-slider-thumb {
  border: 1px solid v-bind(getBarColor);
  outline: 3px solid v-bind(getBarColor);
  outline-offset: 0.125rem;
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

  background-color: v-bind(getThumbColor);
  height: 2rem;
  width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb {
  border: 1px solid v-bind(getBarColor);
  outline: 3px solid v-bind(getBarColor);
  outline-offset: 0.125rem;
}

/* Progress Styling */
progress::-webkit-progress-bar {
  background-color: v-bind(getBarColor);
  border-radius: 7px;
}
progress::-webkit-progress-value {
  background-color: v-bind(getThumbColor);
  border-radius: 7px;
}
progress::-moz-progress-bar {
  background-color: v-bind(getThumbColor);
  border-radius: 7px;
}
</style>
