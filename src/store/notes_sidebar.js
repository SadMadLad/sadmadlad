import { defineStore } from "pinia";
import { ref } from "vue";

const useNotesSidebarStore = defineStore("notes_sidebar", () => {
	const isSidebarOpen = ref(false);
	const markdownHtml = ref(null);

	return {
		isSidebarOpen,
		markdownHtml,
	};
});

export default useNotesSidebarStore;
