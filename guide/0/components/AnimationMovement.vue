<template>
  <span id="animation-movement">
    <span v-for="(letter, index) in 'movement'" :key="index" class="letter" :style="{ animationDelay: `${index * animationDelay}s` }">{{ letter }}</span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      animationDelay: "0.08"
    }
  }
}
</script>

<style scoped>
@keyframes text-wave {
  0%, 100% { transform: translateY(0);    }
  50%      { transform: translateY(-6px); }
}

#animation-movement {
  font-weight: bold;
}

#animation-movement .letter {
  display: inline-block;
  animation: text-wave 1.2s ease-in-out infinite;
}
</style>
