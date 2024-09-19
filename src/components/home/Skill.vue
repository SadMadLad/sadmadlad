<script setup>
defineProps({
  skill_title: String,
  description: String,
  tags: Array,
});
</script>

<style scoped></style>

<template>
  <div>
    <h4 class="my-1.5 text-center text-2xl font-bold">{{ skill_title }}</h4>
    <div v-html="description"></div>
    <ul class="mt-2 flex flex-row flex-wrap justify-center gap-2.5 text-sm">
      <li
        v-for="tag in tags"
        class="rounded bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>
