<script setup>
import Close from "@/assets/svgs/close.svg";
import DotsGrid from "@/assets/svgs/dots-grid.svg";
import SquareDottedLine from "@/assets/svgs/diagonal-squares-dotted.svg";
import SquaresDotted from "@/assets/svgs/squares-dotted.svg";

const svgElementColors = "absolute fill-secondary-500 stroke-secondary-500 hover:fill-tertiary-400 hover:stroke-tertiary-400 absolute transition-all";
</script>

<template>
  <section class="flex-center h-[32rem] bg-primary-500 relative">
    <SquareDottedLine :class="svgElementColors" class="h-20 w-auto top-12 md:top-24 left-12 md:left-28"/>
    <SquareDottedLine :class="svgElementColors" class="rotate-90 h-20 w-auto bottom-12 md:bottom-24 right-12 md:right-20"/>
    <SquaresDotted :class="svgElementColors" class="h-12 md:h-20 w-auto top-16 md:top-24 right-12 md:right-20"/>
    <DotsGrid :class="svgElementColors" class="h-12 md:h-20 w-auto bottom-12 md:bottom-24 left-12 md:left-28"/>
    <Close :class="svgElementColors" class="h-12 w-auto right-40 hidden md:block"/>
    <Close :class="svgElementColors" class="h-12 w-auto bottom-20 hidden md:block"/>
    <div class="w-full text-secondary-300 flex items-center flex-col">
      <h1 class="text-center text-4xl font-semibold relative hover:text-tertiary-400">Hi! I am <span class="font-black">Saad Azam</span></h1>
      <p class="text-xl text-center mt-6 text-balance max-w-xl mx-4">
        I am a Software Engineer who loves making amazing products and learning new tech stacks and technologies.
      </p>
    </div>
  </section>
</template>
