import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import useWindowScroll from "@/composables/scroll";

const useNavbarStylesStore = defineStore("navbar_styles", () => {
  const { scrollY } = useWindowScroll();

  const exactActiveClass = ref("font-black text-white");
  const finalExactActiveClass = ref('');
  const finalHeaderClass = ref('');
  const headerClass = ref("bg-transparent text-white");
  const scrolledDownExactActiveClass = ref("font-black text-primary-500");
  const scrolledDownHeaderClass = ref("bg-white/40 backdrop-blur border-b shadow-lg text-black");
  const scrollThreshold = ref(20);

  const computedExactActiveClass = computed(() => exactActiveClass);
  const computedFinalExactActiveClass = computed(() => finalExactActiveClass);
  const computedFinalHeaderClass = computed(() => finalHeaderClass);
  const computedHeaderClass = computed(() => headerClass);
  const computedScrolledDownExactActiveClass = computed(() => scrolledDownExactActiveClass);
  const computedScrolledDownHeaderClass = computed(() => scrolledDownHeaderClass);
  const computedScrollThreshold = computed(() => scrollThreshold);

  const updateExactActiveClass = (styleClass) =>
    (exactActiveClass.value = styleClass);
  const updateExactActiveClasses = (
    newExactActiveClass,
    newScrolledDownExactActiveClass,
  ) => {
    updateExactActiveClass(newExactActiveClass);
    updateScrolledDownExactActiveClass(newScrolledDownExactActiveClass);
  };
  const updateHeaderClass = (styleClass) => (headerClass.value = styleClass);
  const updateHeaderClasses = (
    newHeaderClass,
    newScrolledDownHeaderClass,
  ) => {
    updateHeaderClass(newHeaderClass);
    updateScrolledDownHeaderClass(newScrolledDownHeaderClass);
  };
  const updateScrolledDownExactActiveClass = (styleClass) =>
    (scrolledDownExactActiveClass.value = styleClass);
  const updateScrolledDownHeaderClass = (styleClass) =>
    (scrolledDownHeaderClass.value = styleClass);
  const updateScrollThreshold = (newThreshold) =>
    (scrollThreshold.value = newThreshold);

  watch(scrollY, (scrollYValue) => {
    if (scrollYValue > scrollThreshold.value) {
      finalExactActiveClass.value = scrolledDownExactActiveClass.value;
      finalHeaderClass.value = scrolledDownHeaderClass.value;
    } else {
      finalExactActiveClass.value = exactActiveClass.value;
      finalHeaderClass.value = headerClass.value;
    }
  }, { immediate: true })

  return {
    computedExactActiveClass,
    computedFinalExactActiveClass,
    computedFinalHeaderClass,
    computedHeaderClass,
    computedScrolledDownExactActiveClass,
    computedScrolledDownHeaderClass,
    computedScrollThreshold,
    updateExactActiveClass,
    updateExactActiveClasses,
    updateHeaderClass,
    updateHeaderClasses,
    updateScrolledDownExactActiveClass,
    updateScrolledDownHeaderClass,
    updateScrollThreshold,
  };
});

export default useNavbarStylesStore;
