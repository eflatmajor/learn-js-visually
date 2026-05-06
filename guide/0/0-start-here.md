---
{
  "outline": "deep"
}
---

<script setup>
import AnimationColour from "./components/AnimationColour.vue";
import AnimationMovement from "./components/AnimationMovement.vue";
import AnimationInteractivity from "./components/AnimationInteractivity.vue";
</script>

# Chapter #0 - Start Here <Badge type="tip" text="Work In Progress" />

Welcome to **Learn JavaScript, Visually**!

::: info Part 0 (Chapters #0 - #4) is optional!

If you just want to get straight to learning to code, please proceed to [Part 1: Chapter #5 - Getting Acquainted](/guide/1/5-getting-acquainted).

**Do note however that:**
- if you want to understand the course and its structure and conventions etc. then you should at least read *this chapter* ([Part 0: Chapter #0 - Start Here](/guide/0/0-start-here))
- if you don't know how to *run code* - you should probably at least read [Part 0: Chapter #2 - Environments](/guide/0/2-environments) first
:::

## Not Your Typical JS Course

This course aims to teach JavaScript in a completely different way than the standard approach.

### Your First Program

Typically, in *any* programming language, your first program would be displaying the text `"Hello, World!"` in some way - as tradition dictates.

For example, you might be taught about the `alert()` function and how it can be used to display a dialog box, containing some text, in the browser -

```js
alert("Hello, World!");
```

Or perhaps you'd be shown how to log text to a console or terminal -

```js
console.log("Hello, World!");
```

:::info Confused?
Don't worry if you don't understand `alert()` or `console.log()`, at this stage!
:::

:::tip Running code
If you'd like to try running either of the above lines of code, please refer to [Part 0: Chapter #2 - Environments](/guide/0/2-environments#browser-console-devtools).
:::

But that's just displaying static text, which is kinda boring.

What about <AnimationColour />? What about <AnimationMovement />? What about <AnimationInteractivity />?

### Philosophy

This guide aims to teach you JavaScript but with a focus on:

- visuals (rendering 2D graphics)
- interactivity (mouse, keyboard etc.)
- simulating natural/physical systems
- generating artwork with code
- building clones of classic video games

The ultimate aim is to make the learning process more engaging for the learner.

#### Canvas-first

Throughout the guide, we'll be making use of the [`<canvas>` HTML element](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) however no knowledge of HTML is required (although we will introduce HTML and CSS later on).

A `<canvas>` simply represents an area within which we can draw graphics via JavaScript.

#### Non-traditional Order

Most JavaScript guides (for example https://javascript.info/) will teach things in mostly the same order, introducing the simplest of concepts first and gradually moving on to more advanced concepts over time.

<!--
This approach is incompatible with the idea of this course, because we'll need to understand a fair few concepts before we can begin rendering graphics to a canvas.
-->

We're deliberately taking a different approach, and teaching things in a completely different order; so that we can go from zero to rendering graphics to the screen as quickly as possible and start building interesting, interactive and visually compelling things from very early on.

For this reason, the learning curve may be a *little higher* to begin with, but we'll do our best to keep things simple.

#### Focus on JavaScript

Other guides will often teach some basic HTML first and show you how you can embed JavaScript in your HTML file(s). In this course, zero HTML knowledge is necessary (until much later).

### P5.js

From the very beginning we'll be making use of a "library" called [**p5.js**](https://p5js.org/).

:::info What's a library?
A "library" is sort of like a toolbox. It simply provides you with a bunch of tools that make doing various tasks easier or quicker.

Using a library allows you to focus on the task at hand (e.g. hammering in a nail) without spending a bunch of time on crafting yourself a hammer.
:::

From the **p5.js** website -

> **p5.js** is a friendly tool for learning to code and make art. It is a free and open-source JavaScript library built by an inclusive, nurturing community. **p5.js** welcomes artists, designers, beginners, educators, and anyone else!

We're using **p5.js** primarily because it provides a simpler, more beginner-friendly, set of tools for rendering graphics than what JavaScript provides out of the box.

Later on we will probably take a deeper look at some of the stuff that **p5.js** is making easier for us - and see how things would be done *without using **p5.js***.

### Audience

The course is designed so that - even if you've never written a line of code in your life - you should still be able to follow it.

While we will be building some simple games along the way, the course is not *necessarily intended* to be a game development course - we're just using games to teach JavaScript because games are fun!

#### Expert Mode <Badge type="tip" text="Experimental Feature" />

**Expert Mode** is just a concept at this stage and may or may not make it into the final guide.

In any case, the idea is that more experienced developers can toggle **Expert Mode** in order to hide explanations which are aimed at complete beginners.

This allows intermediate-/expert-level developers to still take the course and build the projects etc., without being overwhelmed by information or concepts which they already know or understand.

### About the Course

#### How It's Structured

The guide is split into parts, each of which contain chapters. Parts and chapters both start from 0.

Excluding [Part 0: Chapter #0](/guide/0/0-start-here) (which is entirely optional), and so starting with [Part 1: Chapter #5](/guide/1/5-getting-acquainted) - the parts mostly follow a cadence of:

1. Introduce and learn new concepts
2. Apply what we learned by building a project

For example, [Part 1: Chapter #5 - Getting Acquainted](/guide/1/5-getting-acquainted) is where we will actually start learning JavaScript and then [Part 2: Chapter #12 - Project Overview](/guide/2/12-project-overview) will be our first project where we will apply what we learned in **Part 1**.

Sometimes, chapters (often the last chapter in a part) will have an optional "Tasks / Exercises" section at the end. These will give you a chance to try to apply what you've learned in the chapter in new/different ways. If you get stuck on a task - you can just reveal the solution.

#### Interacting with the Course

:::tip TODO
Talk about:
- how to interact with the course (how the examples work etc.)
- how to use the `<StackBlitz />` and `<JSFiddle />` components
- how to pace yourself / spread out your learning journey
- how **Expert Mode** works
:::

#### Conventions Used

:::tip TODO
Talk about:
- conventions that will apply throughout the course
:::

#### What We'll Learn/Build

:::tip TODO
Talk about
- the concepts we'll learn
- the projects we'll build
:::
