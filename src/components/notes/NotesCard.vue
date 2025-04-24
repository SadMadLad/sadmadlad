<script setup>
import EyeIcon from "@/assets/svgs/eye.svg";
import hljs from 'highlight.js';
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import useNotesSidebarStore from "@/store/notes_sidebar";

const marked = new Marked(
  markedHighlight({
	emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

const notesSidebarStore = useNotesSidebarStore();
const { id } = defineProps({
  id: String,
  date: String,
});

const markdownFileContent = (
  await import(`@/assets/content/notes/md/${id}.md?raw`)
).default;
const htmlString = marked.parse(markdownFileContent);

function openSidebar() {
  notesSidebarStore.isSidebarOpen = true;
  notesSidebarStore.markdownHtml = htmlString;
}
</script>

<template>
  <div class="relative rounded-lg overflow-hidden bg-white p-6 shadow-lg">
    <span
      class="-underline-offset-4 decoration-no-skip-ink underline decoration-secondary-400 decoration-8"
      >{{ date }}</span
    >
    <div class="prose-sm mt-2 h-72 w-60 truncate" v-html="htmlString"></div>
    <div
      class="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-white"
    >
      <div class="flex h-full w-full items-end justify-end p-8">
        <button
          class="flex-center h-12 w-12 rounded-full bg-primary-500 fill-white transition-colors hover:bg-secondary-500"
          @click="openSidebar"
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  </div>
</template>
