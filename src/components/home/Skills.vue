<script setup>
import { ref } from "vue";
import Circle from "@/assets/svgs/circle.svg";
import Skill from "@/components/home/Skill.vue";
import skills from "@/assets/content/skills.yml";

import Ruby from "@/assets/svgs/tools/ruby.svg";
import Python from "@/assets/svgs/tools/python.svg";
import Cplusplus from "@/assets/svgs/tools/c++.svg";
import JavaScript from "@/assets/svgs/tools/javascript.svg";
import Elixir from "@/assets/svgs/tools/elixir.svg";
import Rails from "@/assets/svgs/tools/rails.svg";
import React from "@/assets/svgs/tools/react.svg";
import Vue from "@/assets/svgs/tools/vue.svg";
import Node from "@/assets/svgs/tools/node.svg";
import TailwindCSS from "@/assets/svgs/tools/tailwind.svg";
import Phoenix from "@/assets/svgs/tools/phoenix.svg";
import Brain from "@/assets/svgs/tools/brain.svg";

const skillIcons = [
  Ruby,
  Python,
  Cplusplus,
  JavaScript,
  Elixir,
  Rails,
  React,
  Vue,
  Node,
  TailwindCSS,
  Phoenix,
  Brain,
];

const currentSkillIndex = ref(0);
</script>

<template>
  <section
    class="relative flex flex-col-reverse items-start gap-8 p-4 lg:flex-row lg:p-12"
  >
    <Circle
      class="animate-slow-spin absolute left-8 top-8 hidden h-12 w-auto fill-secondary-500 lg:block"
    />
    <div class="relative px-4 py-2.5 lg:px-8">
      <Transition name="slide-fade">
        <Skill v-bind="skills[currentSkillIndex]" :key="currentSkillIndex" />
      </Transition>
    </div>
    <ul
      class="flex w-auto flex-shrink-0 flex-wrap items-start justify-center gap-2.5 lg:w-[32rem]"
    >
      <li
        v-for="(skillIcon, index) in skillIcons"
        :class="
          currentSkillIndex === index
            ? 'border-secondary-500'
            : 'border-primary-500'
        "
        class="flex-center h-20 w-20 cursor-pointer rounded-xl border-4 transition-all duration-300 lg:h-24 lg:w-24"
        @click="currentSkillIndex = index"
      >
        <Component
          :is="skillIcon"
          :class="
            currentSkillIndex === index
              ? 'fill-secondary-500'
              : 'fill-primary-500'
          "
          class="h-12 w-auto transition-all duration-300 lg:h-16"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.slide-fade-enter-active {
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.slide-fade-leave-active {
  transition:
    transform 0.3s ease-in,
    opacity 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(-100px);
  opacity: 0;
  position: absolute;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
  position: absolute;
}
</style>
