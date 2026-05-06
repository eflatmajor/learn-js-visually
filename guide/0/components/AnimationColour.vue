<template>
  <span id="animation-colour">colour</span>
</template>

<script>
export default {}
</script>

<style scoped>
@keyframes hue-cycle {
  0%   { color: hsl(0, 75%, 50%);   }
  16%  { color: hsl(60, 75%, 50%);  }
  33%  { color: hsl(120, 75%, 50%); }
  50%  { color: hsl(180, 75%, 50%); }
  66%  { color: hsl(240, 75%, 50%); }
  83%  { color: hsl(300, 75%, 50%); }
  100% { color: hsl(360, 75%, 50%); }
}

#animation-colour {
  font-weight: bold;
  animation: hue-cycle 8s linear infinite;
}
</style>
