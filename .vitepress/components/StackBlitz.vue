<script>
import { useData } from "vitepress";
import sdk from '@stackblitz/sdk'

const VALID_VIEWS = [
  "editor",
  "preview",
  "both",
];
const DEFAULT_VIEW = "editor";
const DEFAULT_FILE = "sketch.js";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },

    file: {
      type: String,
      default() {
        return DEFAULT_FILE;
      },
    },

    view: {
      type: String,
      validator(value) {
        return VALID_VIEWS.includes(value);
      },
      default() {
        return DEFAULT_VIEW;
      },
    },

    clickToLoad: {
      type: Boolean,
      default: true,
    },

    showNavigation: {
      type: Boolean,
      default: false,
    },

    showDevTools: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const { isDark } = useData();

    return { isDark };
  },

  watch: {
    isDark() {
      this.vm?.editor.setTheme(this.themeName);
    }
  },

  data() {
    return {
      vm: null,
    };
  },

  mounted() {
    sdk.embedProjectId(this.$refs.container, this.id, {
      openFile: this.file,
      view: this.view,
      theme: this.themeName,
      hideNavigation: ! this.showNavigation,
      hideDevTools: ! this.showDevTools,
      clickToLoad: this.clickToLoad,
      hideExplorer: true,
    }).then(async (vm) => {
      this.vm = vm;
      // this.vm.editor.showSidebar(true);
    });
  },

  computed: {
    themeName() {
      return this.isDark ? "dark" : "light";
    },
  },
}
</script>

<template>
  <div ref="container"></div>
</template>

<style>
iframe {
  border: none !important;
}
</style>
