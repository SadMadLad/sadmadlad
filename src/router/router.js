import { createWebHistory, createRouter } from "vue-router";

import ApplicationLayout from "@/layouts/ApplicationLayout.vue";

import BlogsPage from "@/pages/BlogsPage.vue";
import HangoutPage from "@/pages/HangoutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import NotesPage from "@/pages/NotesPage.vue";
import NotFoundPage from "@/pages/errors/NotFoundPage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import ResumePage from "@/pages/ResumePage.vue";

const routes = [
	{
		path: "/",
		component: ApplicationLayout,
		children: [
			{
				path: "blogs",
				name: "blogs",
				component: BlogsPage,
			},
			{
				path: "",
				name: "home",
				component: HomePage,
			},
			{
				path: "hangout",
				name: "hangout",
				component: HangoutPage,
			},
			{
				path: "notes",
				name: "notes",
				component: NotesPage,
			},
			{
				path: "projects",
				name: "projects",
				component: ProjectsPage,
			},
			{
				path: "resume",
				name: "resume",
				component: ResumePage,
			},
		],
	},
	{
		path: "/:pathMatch(.*)*",
		name: "not-found",
		component: NotFoundPage,
	},
];

const router = createRouter({
	history: createWebHistory("/sadmadlad"),
	routes,
});

export { router };
