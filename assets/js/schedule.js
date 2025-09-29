const scheduleContainer = document.getElementById('games');
const statusMessage = document.createElement('p');
statusMessage.className = 'status';

async function loadSchedule() {
  try {
    const response = await fetch('https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const targetDatePrefix = '10/02/';

    const gameDate = data.leagueSchedule.gameDates.find((entry) =>
      typeof entry.gameDate === 'string' && entry.gameDate.startsWith(targetDatePrefix)
    );

    if (!gameDate || !Array.isArray(gameDate.games) || gameDate.games.length === 0) {
      statusMessage.textContent = 'No games found for October 2 in the current schedule.';
      scheduleContainer.replaceChildren(statusMessage);
      return;
    }

    const list = document.createElement('div');
    list.className = 'game-list';

    gameDate.games.forEach((game) => {
      const card = document.createElement('article');
      card.className = 'game-card';

      const title = document.createElement('h3');
      title.textContent = `${game.awayTeam.teamCity} ${game.awayTeam.teamName} at ${game.homeTeam.teamCity} ${game.homeTeam.teamName}`;

      const subtitle = document.createElement('p');
      subtitle.textContent = [game.gameLabel, game.gameSubLabel].filter(Boolean).join(' • ');
      subtitle.setAttribute('aria-label', 'Game type and label');

      const tipOff = document.createElement('p');
      const tipTime = new Date(game.gameDateTimeUTC);
      tipOff.textContent = `Tip-off: ${tipTime.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      })}`;

      card.append(title, subtitle, tipOff);
      list.appendChild(card);
    });

    scheduleContainer.replaceChildren(list);
  } catch (error) {
    console.error('Failed to load schedule', error);
    statusMessage.textContent = 'Unable to load the NBA schedule. Please try again later.';
    scheduleContainer.replaceChildren(statusMessage);
  }
}

loadSchedule();
