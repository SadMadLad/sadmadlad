import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import useWindowScroll from "@/composables/scroll";

const useNavbarStylesStore = defineStore("navbar_styles", () => {
  const { scrollY } = useWindowScroll();

  /** Data Variables **/

  const exactActiveClass = ref("font-black text-white");
  const finalExactActiveClass = ref("");
  const finalHeaderClass = ref("");
  const headerClass = ref("bg-transparent text-white");
  const scrolledDownExactActiveClass = ref("font-black text-primary-500");
  const scrolledDownHeaderClass = ref(
    "bg-white/70 backdrop-blur border-b shadow-lg text-black",
  );
  const scrollThreshold = ref(20);

  /** Getters **/

  const computedFinalExactActiveClass = computed(() => finalExactActiveClass);
  const computedFinalHeaderClass = computed(() => finalHeaderClass);
  const computedScrollThreshold = computed(() => scrollThreshold);

  /** Methods **/

  /* Private */
  function updateExactActiveClass(styleClass) {
    exactActiveClass.value = styleClass;
  }
  function updateHeaderClass(styleClass) {
    headerClass.value = styleClass;
  }
  function updateScrolledDownExactActiveClass(styleClass) {
    scrolledDownExactActiveClass.value = styleClass;
  }
  function updateScrolledDownHeaderClass(styleClass) {
    scrolledDownHeaderClass.value = styleClass;
  }
  function updateFinalClasses() {
    if (scrollY.value > scrollThreshold.value) {
      finalExactActiveClass.value = scrolledDownExactActiveClass.value;
      finalHeaderClass.value = scrolledDownHeaderClass.value;
    } else {
      finalExactActiveClass.value = exactActiveClass.value;
      finalHeaderClass.value = headerClass.value;
    }
  }

  /* Public */
  function updateHeaderClasses({ newHeaderClass, newScrolledDownHeaderClass }) {
    updateHeaderClass(newHeaderClass);
    updateScrolledDownHeaderClass(newScrolledDownHeaderClass);
  }
  function updateExactActiveClasses({
    newExactActiveClass,
    newScrolledDownExactActiveClass,
  }) {
    updateExactActiveClass(newExactActiveClass);
    updateScrolledDownExactActiveClass(newScrolledDownExactActiveClass);
  }
  function updateScrollThreshold(newThreshold) {
    scrollThreshold.value = newThreshold;
  }

  /** Watchers **/

  watch(scrollY, () => updateFinalClasses(), { immediate: true });
  watch(
    [
      scrolledDownExactActiveClass,
      scrolledDownHeaderClass,
      exactActiveClass,
      headerClass,
    ],
    () => updateFinalClasses(),
    { immediate: true },
  );

  return {
    computedFinalExactActiveClass,
    computedFinalHeaderClass,
    computedScrollThreshold,

    updateExactActiveClasses,
    updateHeaderClasses,
    updateScrollThreshold,
  };
});

export default useNavbarStylesStore;
