<script setup>
import { basePath } from "@/constants/globals";
import { PhArrowUpRight } from "@phosphor-icons/vue";

defineProps({
	id: String,
	primaryTag: String,
	createdAt: String,
	updatedAt: String,
	previewDetails: Object,
});
</script>

<template>
  <div class="p-6 rounded-lg shadow-lg bg-white">
    <div class="h-56 w-full">
      <img
        :src="`${basePath}/content/blogs/${id}/cover.jpg`"
        class="w-full h-full object-cover"
      />
    </div>
    <button class="font-extrabold block text-sm mt-2.5 uppercase text-primary-500">{{ primaryTag }}</button>
    <RouterLink class="flex justify-between items-center hover:text-primary-500" :to="{ name: 'blog', params: { id: id } }">
      <h6 class="font-bold text-2xl my-2.5">{{ previewDetails.title }}</h6>
      <PhArrowUpRight :size="32" />
    </RouterLink>
    <p class="text-gray-600">{{ previewDetails.description }}</p>
  </div>
</template>
