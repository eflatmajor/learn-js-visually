import DefaultTheme from "vitepress/theme";

import JSFiddle from "../components/JSFiddle.vue";
import StackBlitz from "../components/StackBlitz.vue";
import Beginner from "../components/Beginner.vue";
import Layout from "./Layout.vue";

import "./main.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("JSFiddle", JSFiddle);
    app.component("StackBlitz", StackBlitz);
    app.component("Beginner", Beginner);
  },
}
