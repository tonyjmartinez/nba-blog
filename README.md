# NBA Blog

## Fetching upcoming games for October 2

You can retrieve the games that NBA.com lists for October 2 by consuming the public schedule feed exposed at [`https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json`](https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json).

The payload is a large season schedule. To extract just the contests for 2 October 2025 you can run:

```bash
curl -s https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json \
  | jq '.leagueSchedule.gameDates[]
        | select(.gameDate == "10/02/2025 00:00:00")
        | .games[]
        | {
            gameCode: .gameCode,
            label: .gameLabel,
            subLabel: .gameSubLabel,
            homeTeam: (.homeTeam.teamCity + " " + .homeTeam.teamName),
            awayTeam: (.awayTeam.teamCity + " " + .awayTeam.teamName),
            tipUTC: .gameDateTimeUTC
          }'
```

That returns structured data that mirrors the listing shown on NBA.com, for example:

```
{
  "gameCode": "20251002/PHINYK",
  "label": "Preseason",
  "subLabel": "NBA Abu Dhabi Game",
  "homeTeam": "New York Knicks",
  "awayTeam": "Philadelphia 76ers",
  "tipUTC": "2025-10-02T16:00:00Z"
}
```

The schedule feed is unauthenticated and free to query, so you can integrate it into scripts or applications to display the first set of NBA games coming up on October 2.
