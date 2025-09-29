# NBA Blog

This project now ships its pages as MDX files. The home page fetches the NBA's public schedule feed and highlights the games that take place on October 2, while a secondary page spotlights Steph Curry.

## Pages

- `pages/index.mdx` — October 2 schedule that calls `https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json` on the client and renders the games scheduled for that date.
- `pages/curry.mdx` — Steph Curry profile page with navigation back to the schedule.

Import these MDX files into your existing site pipeline to expose the pages wherever you need them.
