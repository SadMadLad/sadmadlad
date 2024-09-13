import { ref, onMounted, onUnmounted } from "vue";

function useWindowScroll() {
  const scrollX = ref(0);
  const scrollY = ref(0);

  function update() {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  }

  onMounted(() => window.addEventListener("scroll", update));
  onUnmounted(() => window.removeEventListener("scroll", update));

  return { scrollX, scrollY };
}

export default useWindowScroll;
