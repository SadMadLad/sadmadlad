<script setup>
import Footer from "@/components/shared/Footer.vue";
import Hero from "@/components/home/Hero.vue";
import { onMounted, onBeforeMount } from "vue";
import Skills from "@/components/home/Skills.vue";
import useNavbarStylesStore from "@/store/navbar_styles";

const { updateExactActiveClasses, updateHeaderClasses } =
  useNavbarStylesStore();

onMounted(() => {
  updateHeaderClasses(
    "bg-transparent text-white",
    "bg-white/70 backdrop-blur border-b shadow-lg text-black",
  );
  updateExactActiveClasses(
    "font-black text-white",
    "font-black text-primary-500",
  );
});
</script>

<template>
  <Hero />
  <Skills />
  <Footer />
</template>
