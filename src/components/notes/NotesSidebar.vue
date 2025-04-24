<script setup>
import CloseIcon from "@/assets/svgs/close.svg";
import useNotesSidebarStore from "@/store/notes_sidebar";

const notesSidebarStore = useNotesSidebarStore();
</script>

<template>
  <Transition name="slide-fade-right">
    <div v-if="notesSidebarStore.isSidebarOpen" class="fixed left-0 top-0 z-40 h-screen w-screen">
      <div
        class="absolute left-0 top-0 z-10 h-screen w-screen bg-black/50"
        @click="notesSidebarStore.isSidebarOpen = false"
      ></div>
      <div class="relative">
        <div
          class="z-20 w-full lg:min-w-max rounded-xl overflow-auto bg-white top-0 right-0 fixed h-screen shadow-xl"
        >
          <div class="px-8 py-8 md:py-20 md:px-12">
            <button
              class="fill-red-500 absolute top-0 right-0 w-12 h-12"
              @click="notesSidebarStore.isSidebarOpen = false"
            >
              <CloseIcon class="fill-gray-500 w-8 h-8" />
            </button>
            <article class="prose-sm lg:prose" v-html="notesSidebarStore.markdownHtml"></article>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-right-enter-to,
.slide-fade-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
