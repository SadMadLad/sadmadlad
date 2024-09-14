<script setup>
import useNavbarStylesStore from "@/store/navbar_styles";

const { computedFinalExactActiveClass, computedFinalHeaderClass } =
  useNavbarStylesStore();

const links = [
  {
    name: "home",
    text: "Home",
  },
  {
    name: "blogs",
    text: "Blogs",
  },
  {
    name: "hangout",
    text: "Hangout",
  },
  {
    name: "notes",
    text: "Notes",
  },
  {
    name: "projects",
    text: "Projects"
  }
];
</script>

<template>
  <header
    :class="computedFinalHeaderClass"
    class="w-full fixed top-0 left-0 transition-all z-50"
  >
    <nav class="p-4 flex-center transition-all">
      <ul class="flex gap-6 flex-wrap items-center justify-center">
        <li v-for="{ name, text } in links">
          <RouterLink
            :to="{ name }"
            :exactActiveClass="`${computedFinalExactActiveClass} transition-all`"
            >{{ text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
