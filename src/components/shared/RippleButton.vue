<script setup>
import { ref } from "vue";

const rippleButton = ref(null);
const isRippling = ref(false);

defineExpose({ createRipple });

function createRipple() {
  if (isRippling.value || !rippleButton.value) return;
  const btn = rippleButton.value;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");

  const size = Math.max(window.innerWidth, window.innerHeight);
  const x = rect.x + rect.width / 2 - size / 2;
  const y = rect.y + rect.height / 2 - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.position = "fixed";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(0, 0, 0, 0.3)";
  ripple.style.transform = "scale(0)";
  ripple.style.opacity = "1";
  ripple.style.transition = "transform 1s ease, opacity 1s ease";

  document.body.appendChild(ripple);
  isRippling.value = true;

  setTimeout(() => {
    ripple.style.transform = "scale(5)";
    ripple.style.opacity = "0";
  }, 0);

  setTimeout(() => {
    document.body.removeChild(ripple);
    isRippling.value = false;
  }, 1000);
}
</script>

<template>
  <div class="button-container">
    <button
      ref="rippleButton"
      class="fixed right-10 bottom-10 bg-blue-500 white px-2.5 py-5 rounded"
    >
      Click Me
    </button>
  </div>
</template>

<style scoped>
.ripple {
  pointer-events: none;
  transform: scale(0);
  z-index: -10;
}
</style>
