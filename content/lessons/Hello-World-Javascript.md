---
title: 'DD30: Hello World - Javascript Style'
date: '2023-07-11'
draft: true
summary: "Where should I start?"
tags:
  - DD10
  - Hello World
image: 
href: http://www.dummydaniel.com
author: Dummy Daniel
---
# Hello World
A traditional first step in software programming is to write a "Hello World" program. It is one of the easiest programs you can write in any language and it demonstrates what is often a core goal of software, to display information to a user.

With many languages it also introduces you to compiling your code and the tools you will work with. With Javascript, we get to skip past all of that since it will run directly in your browser!

Hold `Ctrl` and click this [link](https://stackblitz.com/edit/dd10-exercises?file=hello-world%2Fhello-world.js) to open up a new tab with a development environment set up. You will see a list of exercises like this in the right-most panel.

<figure>
  <img style="border: solid .5px;" src="/assets/preview-panel-exercise-list.png" alt="List of coding exercises" />
  <figcaption>Right - Exercise List</figcaption>
</figure>

Click into the `Hello World` exercise in the preview panel and you'll be presented with an editor and a preview that looks like the following.

<figure>
  <img style="border: solid .5px;" src="/assets/hello-world-js.png" alt="Stackblitz code editor" />
  <figcaption>Left - Code Editor</figcaption>
</figure>

<figure>
  <img style="border: solid .5px;" src="/assets/hello-world-preview.png" alt="Preview of Hello WorldApp before changes" />
  <figcaption>Right - Preview Panel</figcaption>
</figure>

Follow along with the instructions in this guide to make changes to the code editor to display 'Hello World!'.

# Edit the function helloWorld()

Often, the goal of hello world is to print 'Hello World!' via native methods in the language.

I have modified this exercise slightly to handle the displaying for you.

The goal here instead is to modify the `helloWorld function` in `hello-world.js` to return the data we wish to display; in this case, 'Hello World!'.

We will do this via a the keyword `return`.

The desired statement should follow this form.

`return <string>;`

There are three parts to this statement.

1. **return** - Return tells the javascript interpreter to 'return' the information to the right of the return keyword. Later we will see that statements in programming often flow from left to right, where we first supply the operator or function, then the piece of data we want to operate on.

2. **string** - the information we want to operate on.

3. **semi-colon** - The semi-colon `;` is subtle but an important piece of syntax. Semi-colons are a divider to signal that we are finished with one statement so it can process another.

Don't get too caught up in where we're returning to for now, that will be explained later in discussing functions.

For now, just know that once you `return` the desired text, it will automatically be displayed in the preview for you.

Here is an example of how we would return my name instead.

`return 'Dummy Daniel';`

When you have substituted 'Hello World' appropriately, the preview should look like the following.

<img style="border: solid .5px;" src="/assets/hello-world-preview-after.png" alt="Preview of Hello WorldApp after changes" />

 # Tests

 Once you have the desired output, click the `Run Tests` link below your output to run an automated test to confirm your results. We will talk more about tests much later. For now, it's just an easy tool to confirm your results.

 # Solution

<details class="spoiler" style="--hidden: 'Text to be hidden'">
<summary>Click here to reveal solution!</summary>
<pre>
function helloWorld() {'{'}
  return 'Hello World!';
{'}'}
</pre> 
</details>