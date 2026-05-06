<template>
  <span id="animation-interactivity">interactivity</span>
</template>

<script>
export default {}
</script>

<style scoped>
#animation-interactivity {
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  transition: transform 1.2s ease-in-out;
}

#animation-interactivity:hover {
  transform: rotate(360deg);
}
</style>
