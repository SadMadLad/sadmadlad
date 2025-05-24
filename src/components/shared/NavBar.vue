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
		name: "notes",
		text: "Notes",
	},
	{
		name: "resume",
		text: "Resume",
	},
	{
		name: "hangout",
		text: "Hangout",
	},
	// {
	//   name: "projects",
	//   text: "Projects",
	// },
];
</script>

<template>
  <header
    :class="computedFinalHeaderClass"
    class="fixed left-0 top-0 z-40 w-full transition-all"
  >
    <nav class="flex-center w-screen p-4 transition-all">
      <ul class="flex items-center justify-center gap-6 overflow-x-auto">
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
