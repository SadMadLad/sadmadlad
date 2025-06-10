<script setup>
import blogs from "@/assets/content/blogs/metadata.json";
import { onMounted, ref } from "vue";
import useNavbarStylesStore from "@/store/navbar_styles";
import { useRoute } from "vue-router";

// reactive ref to hold the loaded HTML
const blogHtml = ref("");

const { updateExactActiveClasses, updateHeaderClasses } =
	useNavbarStylesStore();

onMounted(async () => {
	const route = useRoute();
	const id = route.params.id;
	const blogTitle = blogs.find((blog) => blog.id === id).previewDetails.title;

	document.title = blogTitle;

	fetch(`/sadmadlad/content/blogs/${id}/blog.html`)
		.then((response) => response.text())
		.then((html) => {
			blogHtml.value = html;
		});

	updateHeaderClasses({
		newHeaderClass: "bg-transparent text-primary-500",
		newScrolledDownHeaderClass: "bg-white text-primary-500",
	});
	updateExactActiveClasses({
		newExactActiveClass: "font-black text-primary-500",
		newScrolledDownExactActiveClass: "font-black text-primary-500",
	});
});
</script>

<template>
	<Suspense>
		<div class="flex items-center justify-center mt-48">
			<article data-controller="blog" class="max-w-4xl" v-html="blogHtml"></article>
		</div>
	</Suspense>
</template>
