<script setup>
document.title = "Resume";

import DownloadIcon from "@/assets/svgs/download.svg";
import { onMounted } from "vue";
import useNavbarStylesStore from "@/store/navbar_styles";

const { updateExactActiveClasses, updateHeaderClasses } =
	useNavbarStylesStore();

onMounted(() => {
	updateExactActiveClasses({
		newExactActiveClass: "print:hidden text-primary-500 font-black",
		newScrolledDownExactActiveClass: "print:hidden text-primary-500 font-black",
	});
	updateHeaderClasses({
		newHeaderClass: "print:hidden text-primary-500",
		newScrolledDownHeaderClass:
			"print:hidden text-primary-500 bg-white/40 backdrop-blur",
	});
});
</script>

<template>
  <div
    class="flex-center fixed left-0 top-0 h-screen w-screen bg-white transition-colors duration-500 has-[:hover]:bg-black"
  >
    <a
      download
      href="/sadmadlad/Saad Azam - Resume.pdf"
      class="inline-flex cursor-pointer items-center gap-4 rounded-lg bg-black fill-white px-6 py-4 text-white transition-colors duration-500 hover:border hover:border-black hover:bg-white hover:fill-black hover:text-black"
    >
      <DownloadIcon />
      <span class="text-lg font-extralight sm:text-3xl"
        >Download My Resume</span
      >
    </a>
  </div>
</template>
