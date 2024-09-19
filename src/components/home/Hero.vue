<script setup>
import Close from "@/assets/svgs/close.svg";
import DotsGrid from "@/assets/svgs/dots-grid.svg";
import SquareDottedLine from "@/assets/svgs/diagonal-squares-dotted.svg";
import SquaresDotted from "@/assets/svgs/squares-dotted.svg";

const svgElementColors =
  "floating absolute fill-secondary-500 stroke-secondary-500 hover:fill-tertiary-400 hover:stroke-tertiary-400 absolute transition-all";
</script>

<template>
  <section class="flex-center relative h-[32rem] bg-primary-500">
    <SquareDottedLine
      :class="svgElementColors"
      class="left-12 top-12 h-20 w-auto md:left-28 md:top-24"
    />
    <SquareDottedLine
      :class="svgElementColors"
      class="bottom-12 right-12 h-20 w-auto rotate-90 md:bottom-24 md:right-20"
    />
    <SquaresDotted
      :class="svgElementColors"
      class="right-12 top-16 h-12 w-auto md:right-20 md:top-24 md:h-20"
    />
    <DotsGrid
      :class="svgElementColors"
      class="bottom-12 left-12 h-12 w-auto md:bottom-24 md:left-28 md:h-20"
    />
    <Close
      :class="svgElementColors"
      class="right-40 hidden h-12 w-auto md:block"
    />
    <Close
      :class="svgElementColors"
      class="bottom-20 hidden h-12 w-auto md:block"
    />
    <div class="flex w-full flex-col items-center text-secondary-300">
      <h1
        class="relative text-center text-4xl font-semibold hover:text-tertiary-400"
      >
        Hi! I am <span class="font-black">Saad Azam</span>
      </h1>
      <p class="mx-4 mt-6 max-w-xl text-balance text-center text-xl">
        I am a Software Engineer who loves making amazing products and learning
        new tech stacks and technologies.
      </p>
    </div>
  </section>
</template>
