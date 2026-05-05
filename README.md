# Learn JavaScript, Visually

## What is LJV?

LJV ("Learn JS, Visually" (working title)) is a "Learn JavaScript" guide (which is 100% beginner friendly) where we approach things from a *completely different, non-traditional*, angle.

This guide is focused almost entirely on:

- visuals (rendering 2D graphics)
- interactivity (mouse, keyboard etc.)
- simulating natural/physical systems
- generating artwork with code
- building clones of classic video games

The idea is that **this approach will make the learning experience more engaging** and probably also more rewarding.

The ultimate (very ambitious) goal would be to teach as much as possible as what https://javascript.info/ covers, but in our own special way.

## Course Structure

> [!TIP]
> The first part (#0 - Setting the Stage) is **completely optional**!

The guide is split into parts, which contain chapters.

Some chapters (often the last chapter in a part) will sometimes have optional Tasks/Exercises at the end. These will give you a chance to try to apply what you learned in the chapter. If you get stuck, you can reveal the answer(s).

Part #1 will introduce some concepts and then part #2 will be a project where we apply those concepts. This pattern of "Learn Concepts, Build Project" repeats for much of the course.

Unlike most other courses, we do not teach things in what is probably the most logical order. For example, the popular JS guide [javascript.info](https://javascript.info/) tries to teach the most simple things first (variables, data types, basic operators etc.) and it doesn't teach functions until relatively late (part 2, chapter 15).

Whereas for us it's necessary to teach functions immediately (in part 1, chapter 1) because we need to be able to work with functions to be able to render to a canvas.

Also, often HTML/CSS is taught alongside JavaScript or in some cases it is taught before JavaScript. This guide will cover at least *some* HTML/CSS but it will come much later on in the guide.

## What Will We Learn?

Along the way, we'll be building stuff like:

- fun little visualisations
- simulations (e.g. particle systems, bird flocking behaviour)
- generative artwork
- clones of video games
- etc.

We'll also be learning some mathematics, but don't worry... this is not a maths course.

## About P5.js

We'll be using a library called [p5.js](https://p5js.org/) which provides a simpler, more beginner-friendly, API for rendering graphics to a canvas than the default browser APIs.

In the course, though, the beginner learner doesn't need to know that we're using **p5.js**, at least at first. Later on, when they have attained enough knowledge, we'll probably "pop the hood" and cover some more lower level stuff like the Canvas APIs that **p5.js** wraps and `requestAnimationFrame()` etc.

Despite us using **p5.js'** APIs, **much of what we learn will be applicable even in projects not using p5.js** and also will be useful for other kinds of non-visual/-interactive websites and web applications.

> [!NOTE]
> Of course, some of the maths and algorithms that we learn might not be applicable to building *most kinds* of websites or web apps but your command over the language will be applicable anywhere and everywhere.

## How Will We Be Learning?

From the very beginning we'll be working almost exclusively with the Canvas API. Instead of learning via printing to a console/terminal, or learning to build basic websites/apps (with HTML and CSS complimenting our JavaScript) like a boring TODO app, instead we'll be almost exclusively rendering to a `<canvas>` - even for our first "Hello, World" program.

## What is the Intended Audience?

The course is designed to be completely-100%-beginner-friendly. However, I'm thinking of adding an "Expert Mode" toggle switch.

The idea is that this mode would hide all the stuff that an intermediate/expert developer would already know, leaving stuff that should be more relevant or interesting to a non-beginner.

This would allow even experienced developers to go through the course and learn the mathematics, the physics, the algorithms etc. and build the projects that we build every second chapter - without being overwhelmed by explanations that are intended for beginners.
