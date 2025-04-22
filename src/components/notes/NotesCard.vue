<script setup>
import { marked } from 'marked';

const { id } = defineProps({
  id: String,
  date: String,
})

const markdownFileContent = (await import(`@/assets/content/notes/md/${id}.md?raw`)).default;
const htmlString = marked.parse(markdownFileContent);

console.log(htmlString)
</script>

<template>
  <div class="relative">
    <div class="prose-sm w-96 h-96 overflow-hidden bg-white shadow-lg p-8 rounded-lg" v-html="htmlString"></div>
    <div class="absolute w-full h-full top-0 left-0 pointer-events-none bg-gradient-to-b from-transparent to-white/50"></div>
  </div>
</template>
