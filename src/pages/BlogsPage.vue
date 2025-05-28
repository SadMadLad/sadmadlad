<script setup>
import blogs from "@/assets/content/blogs/metadata.json";
import Blog from "@/components/blogs/Blog.vue";
import { onMounted } from "vue";
import useNavbarStylesStore from "@/store/navbar_styles";

const { updateExactActiveClasses, updateHeaderClasses } =
	useNavbarStylesStore();

onMounted(() => {
	updateHeaderClasses({
		newHeaderClass: "bg-transparent text-primary-500",
		newScrolledDownHeaderClass: "bg-transparent text-primary-500",
	});
	updateExactActiveClasses({
		newExactActiveClass: "font-black text-primary-500",
		newScrolledDownExactActiveClass: "font-black text-primary-500",
	});
});
</script>

<template>
  <div class="relative -z-10">
    <section class="relative bg-primary-100 text-primary-600 pt-40 pb-64 text-center">
      <span class="bg-primary-200 text-sm px-3 py-1.5 font-black rounded-lg">Blog</span>
      <h2 class="font-black text-5xl my-8">Blogs. Anything.</h2>
      <p class="text-lg mx-2.5">List of blogs about anything I want to write.</p>
    </section>
    <div class="overflow-x-hidden w-screen absolute left-0 h-32 -bottom-24 flex">
      <div class="w-[120vw] h-12 bg-indigo-200 rotate-[-1.5deg] sm:rotate-[-1deg] translate-y-5"></div>
    </div>
    <div class="overflow-x-hidden w-screen absolute left-0 h-32 -bottom-12 flex">
      <div class="w-[120vw] h-12 bg-indigo-300 rotate-[-1.5deg] sm:rotate-[-1deg] translate-y-5"></div>
    </div>
    <div class="overflow-x-hidden w-screen absolute left-0 h-32 bottom-0 flex">
      <div class="w-[120vw] h-12 bg-indigo-400 rotate-[-1.5deg] sm:rotate-[-1deg] translate-y-5"></div>
    </div>
  </div>
  <section class="flex items-center justify-center -mt-48">
    <div class="container max-w-6xl grid grid-cols-3 gap-8">
      <div v-for="blog in blogs">
        <Blog v-bind="blog"/>
      </div>
    </div>
  </section>
</template>
