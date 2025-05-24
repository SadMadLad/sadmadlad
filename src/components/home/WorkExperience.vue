<template>
  <section class="flex-center bg-primary-500">
    <div class="container py-20">
      <h3 class="mb-12 text-center text-4xl font-black text-white">
        Experience
      </h3>
      <div class="flex-center">
        <ul class="relative max-w-6xl pl-8">
          <div
            class="absolute left-[1.935rem] top-0 h-3/4 border-2 border-l border-white"
          ></div>
          <li
            v-for="(item, index) in workExperience"
            :key="index"
            class="relative mb-6"
          >
            <div
              class="absolute left-[-0.75rem] top-0 h-6 w-6 rounded-full border-4 border-white bg-primary-500"
            ></div>
            <div class="flex grid-cols-6 flex-col gap-2.5 xl:grid">
              <div class="ml-6 mt-0.5 min-w-32 text-start text-sm text-white">
                {{ item.dateRange }}
              </div>
              <div class="col-span-5 ml-4 min-w-32">
                <h3 class="text-lg font-black text-white" v-if="item.company">
                  {{ item.company }}, {{ item.location }}
                </h3>
                <h4 class="text-md italic text-gray-200">{{ item.role }}</h4>
                <p class="mt-1 text-sm text-white">{{ item.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const workExperience = [
	{
		dateRange: "Nov 2022 - Oct 2024",
		company: "Acklib",
		location: "Lahore",
		role: "Software Engineer",
		description:
			"At Acklib, I rapidly developed proficiency in Ruby on Rails and became a key contributor across numerous projects. My responsibilities encompassed maintaining and upgrading existing products, alongside the full lifecycle development of new features and applications",
	},
	{
		dateRange: "Nov 2024 - Dec 2024",
		company: "RStack Labs",
		location: "Lahore",
		role: "Senior Software Engineer",
		description:
			"During my brief 2-month tenure at RStack Labs, I gained rapid exposure to numerous high-level enterprise projects characterized by complex codebases. I actively contributed to both maintenance efforts and feature development, resulting in a significant and accelerated learning experience.",
	},
	{
		dateRange: "Jan 2025 - Present",
		role: "Freelancer",
		description:
			"Currently freelancing, I develop new software solutions and collaborate directly with enterprise clients to facilitate their goal achievement and expedite the launch of their Minimum Viable Products (MVPs). I also work with projects which require upgrade, maintenance and bug-fixing.",
	},
];
</script>
