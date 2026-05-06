<template>
  <div class="expert-mode-toggle">
    <button @click="toggleExpertMode" :class="{ active: isExpertMode }" :title="tooltip">
      <span class="icon">⚡</span>
      <span class="label">Expert Mode: {{ displayText }}</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpertMode: false,
      tooltip: "Expert Mode hides explanations that are aimed at beginners.",
    }
  },

  mounted() {
    this.isExpertMode = localStorage.getItem('expertMode') === "true";
    this.applyClass();
  },

  computed: {
    displayText() {
      return this.isExpertMode ? "On" : "Off";
    }
  },

  methods: {
    toggleExpertMode() {
      this.isExpertMode = ! this.isExpertMode;
      localStorage.setItem("expertMode", this.isExpertMode);
      this.applyClass();
    },

    applyClass() {
      document.documentElement.classList.toggle("expert-mode", this.isExpertMode);
    }
  }
}
</script>

<style scoped>
.expert-mode-toggle {
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 8px;
}

button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

button.active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
