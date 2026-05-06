<script setup>
import DefaultTheme from "vitepress/theme";
import ExpertModeToggle from "../components/ExpertModeButton.vue";
const { Layout } = DefaultTheme;
</script>
  
<template>
  <Layout>
    <template #sidebar-nav-before>
      <ExpertModeToggle />
    </template>
  </Layout>
</template>
