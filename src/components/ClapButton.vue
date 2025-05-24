<script setup>
import RippleButton from "@/components/shared/RippleButton.vue";
import { ref, watch } from "vue";

const SENSTIVITY_THRESHOLD = 0.175;

const props = defineProps({
	clapPoints: Array,
	currentTimestamp: Number,
});

const rippleButton = ref(null);

watch(
	() => props.currentTimestamp,
	(timestamp) => {
		if (!rippleButton.value || props.clapPoints.length === 0) return;

		if (
			props.clapPoints.some(
				(point) =>
					point > timestamp - SENSTIVITY_THRESHOLD &&
					point < timestamp + SENSTIVITY_THRESHOLD,
			)
		) {
			rippleButton.value.createRipple();
		}
	},
);
</script>

<template>
  <RippleButton ref="rippleButton" />
</template>
