import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Admin credentials from environment variables
export const ADMIN_CREDENTIALS = {
  username: import.meta.env.VITE_ADMIN_USERNAME,
  password: import.meta.env.VITE_ADMIN_PASSWORD
};

// Sports list with initial scores
export const initialSportsData = [
  { 
    id: 'cricket', 
    name: 'Cricket 🏏', 
    category: 'Boys', 
    team1: '', 
    team2: '', 
    status: 'upcoming',
    // Cricket-specific fields
    currentInnings: 1,
    innings1: { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] },
    innings2: { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] },
    totalOvers: 10, // 10 overs match
    battingTeam: 1,
    lastBalls: [] // Last 12 balls for display
  },
  { id: 'volleyball_boys', name: 'Volleyball 🏐', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'volleyball_girls', name: 'Volleyball 🏐', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'basketball_boys', name: 'Basketball 🏀', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'basketball_girls', name: 'Basketball 🏀', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'kabaddi_boys', name: 'Kabaddi 🤼', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'kabaddi_girls', name: 'Kabaddi 🤼', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'khokho_boys', name: 'Kho-Kho 🏃', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'khokho_girls', name: 'Kho-Kho 🏃', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'tugofwar_boys', name: 'Tug of War 🪢', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'tugofwar_girls', name: 'Tug of War 🪢', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'badminton_boys', name: 'Badminton 🏸', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'badminton_girls', name: 'Badminton 🏸', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'tabletennis_boys', name: 'Table Tennis 🏓', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'tabletennis_girls', name: 'Table Tennis 🏓', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'chess', name: 'Chess ♟️', category: 'Mixed', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'carrom', name: 'Carrom 🎯', category: 'Mixed', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
];

// Teams list
export const teamsList = [
  'Team 1',
  'Team 2',
  'Team 3',
  'Team 4',
  'Team 5',
  'Team 6',
  'Team 7',
  'Team 8'
];

// Sport-specific teams/participants
export const sportTeams = {
  // Team Sports - Football
  football: {
    type: 'team',
    label: 'Team',
    options: ['Red Warriors', 'Blue Thunder', 'Green Eagles', 'Yellow Lions', 'Orange Flames', 'Purple Storm', 'White Knights', 'Black Panthers']
  },
  // Team Sports - Cricket
  cricket: {
    type: 'team',
    label: 'Team',
    options: ['Royal Strikers', 'Super Kings', 'Thunder Hawks', 'Rising Stars', 'Brave Hearts', 'Storm Riders', 'Fire Wolves', 'Ice Dragons']
  },
  // Team Sports - Volleyball
  volleyball_boys: {
    type: 'team',
    label: 'Team',
    options: ['Spikers A', 'Spikers B', 'Blockers A', 'Blockers B', 'Smashers A', 'Smashers B', 'Aces A', 'Aces B']
  },
  volleyball_girls: {
    type: 'team',
    label: 'Team',
    options: ['Phoenix', 'Titans', 'Falcons', 'Hawks', 'Eagles', 'Vipers', 'Cobras', 'Panthers']
  },
  // Team Sports - Basketball
  basketball_boys: {
    type: 'team',
    label: 'Team',
    options: ['Dunkers', 'Shooters', 'Ballers', 'Hoopers', 'Slammers', 'Dribblers', 'Lakers', 'Bulls']
  },
  basketball_girls: {
    type: 'team',
    label: 'Team',
    options: ['Sparks', 'Storm', 'Mercury', 'Sky', 'Wings', 'Aces', 'Dream', 'Fever']
  },
  // Team Sports - Kabaddi
  kabaddi_boys: {
    type: 'team',
    label: 'Team',
    options: ['Raiders', 'Defenders', 'Warriors', 'Tigers', 'Bulls', 'Yoddhas', 'Pirates', 'Titans']
  },
  kabaddi_girls: {
    type: 'team',
    label: 'Team',
    options: ['Amazons', 'Valkyries', 'Spartans', 'Gladiators', 'Queens', 'Legends', 'Divas', 'Rebels']
  },
  // Team Sports - Kho-Kho
  khokho_boys: {
    type: 'team',
    label: 'Team',
    options: ['Chasers A', 'Chasers B', 'Runners A', 'Runners B', 'Speedsters A', 'Speedsters B', 'Flash A', 'Flash B']
  },
  khokho_girls: {
    type: 'team',
    label: 'Team',
    options: ['Sprinters A', 'Sprinters B', 'Dashers A', 'Dashers B', 'Bolts A', 'Bolts B', 'Jets A', 'Jets B']
  },
  // Team Sports - Tug of War
  tugofwar_boys: {
    type: 'team',
    label: 'Team',
    options: ['Power A', 'Power B', 'Strength A', 'Strength B', 'Force A', 'Force B', 'Might A', 'Might B']
  },
  tugofwar_girls: {
    type: 'team',
    label: 'Team',
    options: ['Unity A', 'Unity B', 'Grip A', 'Grip B', 'Pull A', 'Pull B', 'Strong A', 'Strong B']
  },
  // Solo/Doubles - Badminton (Participant Names)
  badminton_boys: {
    type: 'player',
    label: 'Player',
    options: ['Rahul S.', 'Amit K.', 'Vikram P.', 'Rohan M.', 'Arjun D.', 'Karan T.', 'Nikhil R.', 'Saurabh G.']
  },
  badminton_girls: {
    type: 'player',
    label: 'Player',
    options: ['Priya S.', 'Neha K.', 'Anjali P.', 'Kavya M.', 'Riya D.', 'Simran T.', 'Pooja R.', 'Ananya G.']
  },
  // Solo - Table Tennis (Participant Names)
  tabletennis_boys: {
    type: 'player',
    label: 'Player',
    options: ['Aditya V.', 'Harsh B.', 'Pranav S.', 'Yash M.', 'Dev K.', 'Ishaan P.', 'Aarav R.', 'Vihaan T.']
  },
  tabletennis_girls: {
    type: 'player',
    label: 'Player',
    options: ['Shruti V.', 'Tanvi B.', 'Nidhi S.', 'Kritika M.', 'Aditi K.', 'Mansi P.', 'Divya R.', 'Sneha T.']
  },
  // Solo - Chess (Participant Names)
  chess: {
    type: 'player',
    label: 'Player',
    options: ['Aryan C.', 'Vivaan S.', 'Reyansh K.', 'Ayaan M.', 'Ananya P.', 'Ishita D.', 'Saanvi R.', 'Aanya T.']
  },
  // Solo/Doubles - Carrom (Participant Names)
  carrom: {
    type: 'player',
    label: 'Player',
    options: ['Mohit L.', 'Suresh N.', 'Rajesh K.', 'Deepak S.', 'Megha P.', 'Swati R.', 'Komal D.', 'Jyoti M.']
  }
};

// Helper function to get teams/players for a sport
export const getOptionsForSport = (sportId) => {
  return sportTeams[sportId] || { type: 'team', label: 'Team', options: teamsList };
};

// Database reference
export const scoresRef = ref(database, 'liveScores');

// Initialize scores in database
export const initializeScores = () => {
  const scoresObj = {};
  initialSportsData.forEach(sport => {
    scoresObj[sport.id] = sport;
  });
  set(scoresRef, scoresObj);
};

// Update a single sport score
export const updateSportScore = (sportId, updates) => {
  const sportRef = ref(database, `liveScores/${sportId}`);
  update(sportRef, updates);
};

// Fix cricket overs (call this once to update existing data)
export const fixCricketOvers = () => {
  const cricketRef = ref(database, 'liveScores/cricket');
  update(cricketRef, { totalOvers: 10 });
};

// Call immediately to fix existing data
fixCricketOvers();

// Listen to score changes
export const subscribeToScores = (callback) => {
  onValue(scoresRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback(Object.values(data));
    } else {
      // Initialize if no data exists
      initializeScores();
      callback(initialSportsData);
    }
  });
};

// Cricket-specific functions
export const updateCricketScore = (ballType, runs = 0, cricketData) => {
  const currentInnings = cricketData.currentInnings;
  const inningsKey = `innings${currentInnings}`;
  const innings = { ...cricketData[inningsKey] };
  const currentOver = [...(innings.currentOver || [])];
  const lastBalls = [...(cricketData.lastBalls || [])];
  
  let ballLabel = '';
  let isLegalBall = true;
  
  switch(ballType) {
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
      ballLabel = 'WD';
      innings.runs += 1;
      innings.extras += 1;
      isLegalBall = false;
      break;
    case 'noball':
      ballLabel = 'NB';
      innings.runs += 1;
      innings.extras += 1;
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
  if (lastBalls.length > 12) lastBalls.shift();
  
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
  
  const updates = {
    [inningsKey]: innings,
    lastBalls: lastBalls
  };
  
  // Check if innings is complete (all out or overs finished)
  if (innings.wickets >= 10 || innings.overs >= cricketData.totalOvers) {
    if (currentInnings === 1) {
      updates.currentInnings = 2;
      updates.battingTeam = 2;
    } else {
      updates.status = 'completed';
    }
  }
  
  updateSportScore('cricket', updates);
  return innings;
};

export const resetCricketInnings = (inningsNumber) => {
  const inningsKey = `innings${inningsNumber}`;
  updateSportScore('cricket', {
    [inningsKey]: { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] }
  });
};

export const switchCricketInnings = (currentData) => {
  updateSportScore('cricket', {
    currentInnings: currentData.currentInnings === 1 ? 2 : 1,
    battingTeam: currentData.battingTeam === 1 ? 2 : 1
  });
};

export const undoLastBall = (cricketData) => {
  const currentInnings = cricketData.currentInnings;
  const inningsKey = `innings${currentInnings}`;
  const innings = { ...cricketData[inningsKey] };
  const currentOver = [...(innings.currentOver || [])];
  const lastBalls = [...(cricketData.lastBalls || [])];
  
  if (lastBalls.length === 0) return;
  
  const lastBall = lastBalls.pop();
  if (currentOver.length > 0) currentOver.pop();
  
  // Reverse the ball effect
  if (lastBall === '0') {
    // Dot ball, just remove
  } else if (lastBall === 'W') {
    innings.wickets -= 1;
  } else if (lastBall === '4') {
    innings.runs -= 4;
    innings.fours -= 1;
  } else if (lastBall === '6') {
    innings.runs -= 6;
    innings.sixes -= 1;
  } else if (lastBall === 'WD' || lastBall === 'NB') {
    innings.runs -= 1;
    innings.extras -= 1;
    // No ball count change for extras
    innings.currentOver = currentOver;
    updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
    return;
  } else if (lastBall.startsWith('B') || lastBall.startsWith('LB')) {
    const runs = parseInt(lastBall.replace(/[^0-9]/g, '')) || 0;
    innings.runs -= runs;
    innings.extras -= runs;
  } else {
    const runs = parseInt(lastBall) || 0;
    innings.runs -= runs;
  }
  
  // Adjust ball count
  if (innings.balls === 0) {
    innings.overs -= 1;
    innings.balls = 5;
  } else {
    innings.balls -= 1;
  }
  
  innings.currentOver = currentOver;
  updateSportScore('cricket', { [inningsKey]: innings, lastBalls });
};

export { database, ref, set, onValue, update };
