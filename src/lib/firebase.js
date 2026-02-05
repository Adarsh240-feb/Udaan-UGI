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

// Admin credentials (in production, use proper authentication)
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'udaan2026'
};

// Sports list with initial scores
export const initialSportsData = [
  { id: 'football', name: 'Football ⚽', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
  { id: 'cricket', name: 'Cricket 🏏', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming' },
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

export { database, ref, set, onValue, update };
