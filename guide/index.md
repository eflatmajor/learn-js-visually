---
layout: false
---

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();

onMounted(() => router.go("/guide/0/0-start-here"));
</script>
