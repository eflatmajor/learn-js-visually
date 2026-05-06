<script>
import { useData } from "vitepress";

const VALID_TABS = [
  "result",
  "js",
  "css",
  "html",
];

const DEFAULT_TABS = [
  "result",
  "js",
];

const DEFAULT_USERNAME = "eflat_major";

export default {
  props: {
    username: {
      type: String,
      default: DEFAULT_USERNAME,
    },

    sketch: {
      type: String,
      required: true,
    },

    version: {
      type: Number,
      required: true,
    },

    tabs: {
      type: Array,
      validator(value) {
        return value.every(tab => VALID_TABS.includes(tab));
      },
      default() {
        return DEFAULT_TABS;
      },
    },
  },

  setup() {
    const { isDark } = useData();

    return { isDark };
  },

  computed: {
    themeName() {
      return this.isDark ? "dark" : "light";
    },

    tabList() {
      return this.tabs.join(",");
    },

    fiddleUrl() {
      return `//jsfiddle.net/${this.username}/${this.sketch}/${this.version}/embedded/${this.tabList}/${this.themeName}/`;
    }
  }
}
</script>

<template>
  <iframe width="100%" height="300px" :src="fiddleUrl" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
</template>
