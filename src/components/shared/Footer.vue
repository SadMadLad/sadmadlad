<script setup>
import GitHub from "@/assets/svgs/socials/github.svg";
import Kaggle from "@/assets/svgs/socials/kaggle.svg";
import LinkedIn from "@/assets/svgs/socials/linkedin.svg";
import YouTube from "@/assets/svgs/socials/youtube.svg";

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
    text: "Projects",
  },
];

const socialsData = [
  {
    link: "https://github.com/sadmadlad/",
    social: GitHub,
  },
  {
    link: "https://www.kaggle.com/sadmadlad",
    social: Kaggle,
  },
  {
    link: "https://www.linkedin.com/in/saad-azam-9113011b8/",
    social: LinkedIn,
  },
  {
    link: "https://www.youtube.com/@SubZero-vs2mu",
    social: YouTube,
  },
];
</script>

<template>
  <footer class="flex items-center justify-between bg-primary-500 px-8">
    <ul class="flex flex-row gap-2.5 px-2 py-2.5 text-white">
      <li v-for="{ name, text } in links">
        <RouterLink :to="{ name: name }">{{ text }}</RouterLink>
      </li>
    </ul>
    <ul class="flex gap-2">
      <li v-for="{ link, social } in socialsData">
        <a :href="link">
          <Component
            :is="social"
            class="h-5 w-auto fill-white hover:fill-secondary-500"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>
