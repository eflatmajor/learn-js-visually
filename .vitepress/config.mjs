import { defineConfig } from "vitepress";

const BASE_URL = process.env.NODE_ENV === "production" ? "/learn-js-visually/" : "/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: BASE_URL,
  title: "Learn JavaScript, Visually",
  description: "A new approach to learning JavaScript.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Testing", link: "/testing" },
      { text: "Guide", link: "/guide/" },
      { text: "Reference", link: "/reference/" },
    ],

    sidebar: {
      "/testing": [
        {
          text: "Foo Bar Baz Qux",
          collapsed: false,
        },
      ],

      "/guide/": [
        {
          text: "Part 0 - Setting the Stage",
          collapsed: false,
          items: [
            { text: "Start Here", link: "/guide/0/0-start-here" },
            { text: "History of JS", link: "/guide/0/1-history-of-js" },
            { text: "Environments", link: "/guide/0/2-environments" },
            { text: "Ecosystem", link: "/guide/0/3-ecosystem" },
            { text: "Mindset", link: "/guide/0/4-mindset" },
          ],
        },
        {
          text: "Part 1 - Let There Be Circles",
          collapsed: false,
          items: [
            { text: "Getting Acquainted", link: "/guide/1/5-getting-acquainted" },
            { text: "Hello, Canvas", link: "/guide/1/6-hello-canvas" },
            { text: "Adding Flavour", link: "/guide/1/7-adding-flavour" },
            { text: "Taking Shape", link: "/guide/1/8-taking-shape" },
            { text: "Playing With Numbers", link: "/guide/1/9-playing-with-numbers" },
            { text: "From One To Many", link: "/guide/1/10-from-one-to-many" },
            { text: "Play Time", link: "/guide/1/11-play-time" },
          ],
        },
        {
          text: "Part 2 - Project: Bubble Game",
          collapsed: false,
          items: [
            { text: "Project Overview", link: "/guide/2/12-project-overview" },
            { text: "The Bubble", link: "/guide/2/13-the-bubble" },
            { text: "Bringing It To Life", link: "/guide/2/14-bringing-it-to-life" },
            { text: "A World of Bubbles", link: "/guide/2/15-a-world-of-bubbles" },
            { text: "Things That Go Pop", link: "/guide/2/16-things-that-go-pop" },
            { text: "A Touch of Class", link: "/guide/2/17-a-touch-of-class" },
            { text: "Pop Quiz", link: "/guide/2/18-pop-quiz" },
          ],
        },
        {
          text: "Part 3 - Linear Algebra",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 4 - Project: Fireworks",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 5 - Trigonometry",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 6 - Project: Solar System",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 7 - Forces & Steering",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 8 - Project: Boids",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 9 - Cellular Automata",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 10 - Project: Conway's Game of Life",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 11 - Fractals",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 12 - Project: Fractal Tree",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 13 - User Interface (HTML/CSS)",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 14 - Game Dev Fundamentals",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 15 - Project: Bubble Game (Revisited)",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 16 - Game: Breakout",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 17 - Game: Space Invaders",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 18 - Game: Asteroids",
          collapsed: false,
          items: [],
        },
        {
          text: "Part 19 - Game: Flappy Bird",
          collapsed: false,
          items: [],
        },
      ],

      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Reference One", link: "/reference/" },
            { text: "Reference Two", link: "/reference/" },
            { text: "Reference Three", link: "/reference/" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
  },
});
