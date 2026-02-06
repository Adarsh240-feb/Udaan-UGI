// Cricket-specific Firebase functions
import { updateSportScore } from './firebase';

// Update cricket score with ball-by-ball tracking
export const updateCricketScore = (ballType, runs = 0, cricketData) => {
  console.log('=== updateCricketScore called ===');
  console.log('ballType:', ballType, 'runs:', runs);

  const currentInnings = cricketData.currentInnings;
  const inningsKey = `innings${currentInnings}`;
  const innings = { ...cricketData[inningsKey] };
  const currentOver = [...(innings.currentOver || [])];
  const lastBalls = [...(cricketData.lastBalls || [])];

  let ballLabel = '';
  let isLegalBall = true;

  switch (ballType) {
    case 'dot':
      ballLabel = '0';
      break;
    case 'run':
      ballLabel = runs.toString();
      innings.runs += runs;
      break;
    case 'four':
      ballLabel = '4';
      innings.runs += 4;
      innings.fours += 1;
      break;
    case 'six':
      ballLabel = '6';
      innings.runs += 6;
      innings.sixes += 1;
      break;
    case 'wicket':
      ballLabel = 'W';
      innings.wickets += 1;
      break;
    case 'wide':
      if (runs > 0) {
        ballLabel = `WD+${runs}`;
      } else {
        ballLabel = 'WD';
      }
      innings.runs += 1 + runs; // 1 extra for wide, plus batsman runs
      innings.extras += 1; // only 1 extra for wide
      isLegalBall = false;
      break;
    case 'noball':
      if (runs > 0) {
        ballLabel = `NB+${runs}`;
      } else {
        ballLabel = 'NB';
      }
      innings.runs += 1 + runs; // 1 extra for no ball, plus batsman runs
      innings.extras += 1; // only 1 extra for no ball
      isLegalBall = false;
      break;
    case 'bye':
      ballLabel = `B${runs}`;
      innings.runs += runs;
      innings.extras += runs;
      break;
    case 'legbye':
      ballLabel = `LB${runs}`;
      innings.runs += runs;
      innings.extras += runs;
      break;
    default:
      ballLabel = runs.toString();
      innings.runs += runs;
  }

  // Add ball to current over and last balls
  currentOver.push(ballLabel);
  lastBalls.push(ballLabel);
  if (lastBalls.length > 30) lastBalls.shift();

  // Update ball count only for legal balls
  if (isLegalBall) {
    innings.balls += 1;
    if (innings.balls === 6) {
      innings.overs += 1;
      innings.balls = 0;
      innings.currentOver = [];
    } else {
      innings.currentOver = currentOver;
    }
  } else {
    innings.currentOver = currentOver;
  }

  console.log('After update - innings.currentOver:', innings.currentOver);
  console.log('isLegalBall:', isLegalBall);

  const updates = {
    [inningsKey]: innings,
    lastBalls: lastBalls
  };

  // Check if team 2 has won (reached target)
  if (currentInnings === 2) {
    const target = (cricketData.innings1?.runs || 0) + 1;
    if (innings.runs >= target) {
      updates.status = 'completed';
      updates.winner = cricketData.team2 || 'Team 2';
    }
  }

  // Check if innings is complete (all out or overs finished)
  if (innings.wickets >= 10 || innings.overs >= cricketData.totalOvers) {
    if (currentInnings === 1) {
      updates.currentInnings = 2;
      updates.battingTeam = 2;
    } else {
      updates.status = 'completed';
      // If team 2 didn't reach target, team 1 wins
      if (!updates.winner) {
        const target = (cricketData.innings1?.runs || 0) + 1;
        if (innings.runs < target) {
          updates.winner = cricketData.team1 || 'Team 1';
        }
      }
    }
  }

  updateSportScore('cricket', updates);
  return innings;
};

// Reset cricket innings
export const resetCricketInnings = (inningsNumber) => {
  const inningsKey = `innings${inningsNumber}`;
  updateSportScore('cricket', {
    [inningsKey]: { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] }
  });
};

// Switch between innings
export const switchCricketInnings = (currentData) => {
  updateSportScore('cricket', {
    currentInnings: currentData.currentInnings === 1 ? 2 : 1,
    battingTeam: currentData.battingTeam === 1 ? 2 : 1
  });
};

// Undo last ball
export const undoLastBall = (cricketData) => {
  const currentInnings = cricketData.currentInnings;
  const inningsKey = `innings${currentInnings}`;
  const innings = { ...cricketData[inningsKey] };
  const currentOver = [...(innings.currentOver || [])];
  const lastBalls = [...(cricketData.lastBalls || [])];

  if (lastBalls.length === 0) return;

  const lastBall = lastBalls.pop();
  if (currentOver.length > 0) currentOver.pop();

  // For all balls except wide and no ball, undo the ball/over as well
  let shouldUndoBall = true;

  // Reverse the ball effect
  if (lastBall === '0') {
    // Dot ball, just remove
  } else if (lastBall === 'W') {
    innings.wickets = Math.max(0, innings.wickets - 1);
  } else if (lastBall === '4') {
    innings.runs = Math.max(0, innings.runs - 4);
    innings.fours = Math.max(0, innings.fours - 1);
  } else if (lastBall === '6') {
    innings.runs = Math.max(0, innings.runs - 6);
    innings.sixes = Math.max(0, innings.sixes - 1);
  } else if (lastBall === 'WD') {
    innings.runs = Math.max(0, innings.runs - 1);
    innings.extras = Math.max(0, innings.extras - 1);
    shouldUndoBall = false;
    innings.currentOver = currentOver;
    updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
    return;
  } else if (lastBall && lastBall.startsWith('WD+')) {
    // WD+<runs> format
    const runs = parseInt(lastBall.split('+')[1]) || 0;
    innings.runs = Math.max(0, innings.runs - (1 + runs));
    innings.extras = Math.max(0, innings.extras - 1);
    shouldUndoBall = false;
    innings.currentOver = currentOver;
    updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
    return;
  } else if (lastBall && lastBall.startsWith('NB+')) {
    // NB+<runs> format
    const runs = parseInt(lastBall.split('+')[1]) || 0;
    innings.runs = Math.max(0, innings.runs - (1 + runs));
    innings.extras = Math.max(0, innings.extras - 1);
    shouldUndoBall = false;
    innings.currentOver = currentOver;
    updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
    return;
  } else if (lastBall === 'NB') {
    innings.runs = Math.max(0, innings.runs - 1);
    innings.extras = Math.max(0, innings.extras - 1);
    shouldUndoBall = false;
    innings.currentOver = currentOver;
    updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
    return;
  } else if (lastBall && (lastBall.startsWith('B') || lastBall.startsWith('LB'))) {
    const runs = parseInt(lastBall.replace(/[^0-9]/g, '')) || 0;
    innings.runs = Math.max(0, innings.runs - runs);
    innings.extras = Math.max(0, innings.extras - runs);
  } else {
    const runs = parseInt(lastBall) || 0;
    innings.runs = Math.max(0, innings.runs - runs);
  }

  // Adjust ball count only if not wide or no ball
  if (shouldUndoBall) {
    if (innings.balls === 0) {
      if (innings.overs > 0) {
        innings.overs = Math.max(0, innings.overs - 1);
        innings.balls = 5;
      } else {
        innings.balls = 0;
      }
    } else {
      innings.balls = Math.max(0, innings.balls - 1);
    }
  }

  innings.currentOver = currentOver;
  updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
};
