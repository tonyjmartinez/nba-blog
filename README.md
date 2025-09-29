# NBA Blog

This simple static site fetches the NBA's public schedule feed and highlights the games that take place on October 2. The home page displays the upcoming matchups pulled from `https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json`, and a secondary page spotlights Steph Curry.

## Getting started

1. Start a local web server from the project root, for example:

   ```bash
   python -m http.server 8000
   ```

2. Open [http://localhost:8000/index.html](http://localhost:8000/index.html) to see the October 2 schedule.
3. Use the navigation links to jump to the Steph Curry page.

The schedule listing updates automatically every time the page loads, so it reflects whatever games the NBA has scheduled for that date.
