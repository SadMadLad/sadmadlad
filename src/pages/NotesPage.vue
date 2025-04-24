<script setup>
import NotesCard from "@/components/notes/NotesCard.vue";
import NotesData from "@/assets/content/notes/data.json";
import NotesSidebar from "@/components/notes/NotesSidebar.vue";
import { onMounted } from "vue";
import useNavbarStylesStore from "@/store/navbar_styles";

const { updateExactActiveClasses, updateHeaderClasses } =
  useNavbarStylesStore();

onMounted(() => {
  updateExactActiveClasses({
    newExactActiveClass: "text-primary-500 font-black",
    newScrolledDownExactActiveClass: "text-primary-500 font-black",
  });
  updateHeaderClasses({
    newHeaderClass: "text-primary-500",
    newScrolledDownHeaderClass: "text-primary-500 bg-white/40 backdrop-blur",
  });
});
</script>

<template>
  <section class="flex-center min-h-screen bg-gray-100 pt-40">
    <div class="container">
      <div class="flex flex-col gap-2.5">
        <h2 class="text-center text-5xl font-black">Notes</h2>
        <div class="flex-center">
          <p class="max-w-xl text-center text-2xl font-extralight px-6">
            Here I write any tips, anything new I learnt or as a reminder!
          </p>
        </div>
      </div>
      <ul class="my-16 flex flex-wrap gap-4 lg:gap-8 px-8 lg:px-0">
        <li v-for="note_data in NotesData" :key="note_data.id">
          <Suspense>
            <NotesCard v-bind="note_data" />
          </Suspense>
        </li>
      </ul>
    </div>
  </section>
  <NotesSidebar />
</template>
