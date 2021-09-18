// import { gamesData } from './data/sample-data';

const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];
// * ============================== Code

// =========================== Make Chart

const makeChart = (games, targetTeam) => {
  const ul = document.createElement("ul");

  for (let game of games) {
    const li = document.createElement("li");
    
    li.innerHTML = getScoreLine(game);

    li.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');

    isWinner(game, targetTeam);

    ul.append(li);
  }
  return ul
};

const isWinner = ({homeTeam, awayTeam} = game, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

// ========================== getScoreLine

const getScoreLine = ({ homeTeam, awayTeam }) => {
    // destructure team and point from each team
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
      scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
      scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
};

const gsSection = document.getElementById('gs');
const hsSection = document.getElementById('hr');

const gsChart = makeChart(warriorsGames, 'Golden State');
const hsChart = makeChart(warriorsGames, 'Houston');

gsSection.append(gsChart);
hsSection.append(hsChart);
