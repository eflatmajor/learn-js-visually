---
layout: false
---

<script setup>
import { onMounted } from "vue";
import { useRouter, withBase } from "vitepress";

const router = useRouter();

onMounted(() => router.go(withBase("/guide/0/0-start-here")));
</script>
