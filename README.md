# HerStory: Woven in Memory

Section S05

Group’s member roster:
- De Gracia, Kaleela Ysabel
- Guiller, Gerylyn
- Manaligod, Lei Ann
- Ross, Isabella Althea

## Theme: Historical Computing
Chosen Topic: “Women who built computing – the hidden pioneers“

## Core Discussion: 
This virtual exhibit looks at the building blocks of how computers actually work, specifically by studying how some of the earliest women in computing helped create the very first ways machines could store and run instructions. Rather than just listing names and dates, we wanted to dig deeper and explore how storage technology physically changed over time, from mechanical systems to electromagnetic ones.

We take a closer look at women in history who changed the world, and at today's technology. First, **Ada Lovelace (1840s)**, who figured out how to translate mathematical ideas into a format that a machine could follow, using punch cards as a kind of physical instruction manual for the Analytical Engine.

**Katherine Johnson (1950s - 1960s)**, was the reference architecture for early computers and NASA. She is known for calculating orbital mechanics and flight trajectories. Since in this era, people don't trust computers yet that ran on vacuum tubes and magnetic core memory. Katherine was tasked to write complex geometry equations to calculate trajectory tables. When NASA programmed the IBM computer, they used Katherine's hand-calculated tables to verify the computer's memory and processor logic were correct.

**Grace Hopper (1950s)**, realized that people shouldn't have to write code in binary. So she invented the first computer compiler, which allowed human-readable commands turn to binary, and she's also the creator of COBOL.

Then there's **Margaret Hamilton (Late 1960s)**, who helped design something called Core Rope Memory for the Apollo Guidance Computer, where actual copper wire was threaded through tiny magnetic rings to store binary code. Her architecture saved the Apollo 11 mission from an emergency system overload during landing. It sounds almost unbelievable, but that's literally how it worked.

The exhibit also tries to show how these early storage methods, even though they could only hold a tiny amount of data by today's standards, had a direct impact on how the computer's processor read and carried out instructions. It's a lot more hands-on and technical than your typical history lesson, but that's kind of the point.

## Group’s Tech Stack Plan
- Node.js 26 — we're using this as our runtime environment.
- Astro 6 — this is our main framework for building the exhibit pages.
- React (.jsx) — we'll use this for our interactive components.
- Tailwind CSS — for styling and making the layout mobile-friendly.
- JavaScript — for the logic and interactivity of our components.
- GitHub Pages — where we'll deploy and host the final website.

## Proposed Interactive Element
An animated Core Rope Memory Visualizer built in React. Users will be able to:
- Click on individual ferrite rings to toggle binary values (0 or 1) 
- Watch the wire-weaving pattern change visually to reflect the stored value
- Switch between two "modes", Ada Lovelace's punch card logic view and Margaret Hamilton's Core Rope Memory view, to compare how both women encoded instructions into physical media
- Read short tooltip pop-ups on each component explaining what it does

## Tentative Style Guide Snapshot
The exhibit is inspired by an [interactive online timeline](https://www.awwwards.com/sites/the-history-of-connection). Users can scroll through the page and move through a horizontal timeline featuring four important women in computing. Each person has their own section with short information about who they are and what they contributed, along with key images and insights. At the end of the timeline, users can interact with a Core Rope Memory Visualizer where they can click to binary values and see how early computers stored information.

---

## Incremental README.md Documentation

## Website description
- Deployment Link: https://oresamu.github.io/CSARCH2_Case-Study/herstory-woven-in-memory/
- The official files are in the `test` branch.
- This webpage includes both a historical overview and discussion that connects each individual's contributions to computing. There is also an interactivevisualizer on Ada Lovelace's punch cards and Margaret Hamilton's Core Rope Memory for users to try out, where they can toggle binary values by clicking on the "holes".

## Development process (Mid Progress)
- Experimented on multiple layouts, from the original (supposedly) landscape timeline to the vertical structure in the template.
- The original idea was hard to implement around the template provided as there were issues with the formatting and section sizing.
- Had to privot from our original idea from the proposal into something that would suit the provided exhibit layout.
-  Realized that designing the page is similar to CSS despite encountering JavaScript for the first time.
-  Found it convenient that Astro layouts separate the sections from the actual content, making it easier to edit information when needed.
- Realized that the visualizer could demonstrate multiple technologies by changing the representation, which saved us more time and space within the page.
- The interactive component had several iterations before the final.
- While researching for information of the pioneers, it was honestly impressive how their ideas laid foundations for many computing concepts that influence even the present.
- Changed the color scheme to pink to fit the theme.
- Planning to add a landing page in the future, adjust the images and the layout of each write-up, and refine the overall design and user experience.

## Development process (Final)
- Fixed the layout of the images and text, so the text hugs the image rather than the image awkwardly floating above it.
- Discovered that there was a "template" or format in the example Linux page that we could use for our own page.
- Scrapped the idea of a landing page, as it was difficult to navigate from one page to another (also due to layout issues).
- Added technical component breakdown which compares the discovery of each pioneer to current/modern computer concepts.
