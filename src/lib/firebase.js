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

// Sport-wise Admin Credentials (from environment variables)
export const SPORT_ADMINS = {
  cricket: {
    username: import.meta.env.VITE_CRICKET_ADMIN_USERNAME,
    password: import.meta.env.VITE_CRICKET_ADMIN_PASSWORD,
    sportIds: ['cricket'],
    label: 'Cricket Admin',
    icon: '🏏'
  },
  football: {
    username: import.meta.env.VITE_FOOTBALL_ADMIN_USERNAME,
    password: import.meta.env.VITE_FOOTBALL_ADMIN_PASSWORD,
    sportIds: ['football'],
    label: 'Football Admin',
    icon: '⚽'
  },
  volleyball: {
    username: import.meta.env.VITE_VOLLEYBALL_ADMIN_USERNAME,
    password: import.meta.env.VITE_VOLLEYBALL_ADMIN_PASSWORD,
    sportIds: ['volleyball_boys', 'volleyball_girls'],
    label: 'Volleyball Admin',
    icon: '🏐'
  },
  basketball: {
    username: import.meta.env.VITE_BASKETBALL_ADMIN_USERNAME,
    password: import.meta.env.VITE_BASKETBALL_ADMIN_PASSWORD,
    sportIds: ['basketball_boys', 'basketball_girls'],
    label: 'Basketball Admin',
    icon: '🏀'
  },
  khokho: {
    username: import.meta.env.VITE_KHOKHO_ADMIN_USERNAME,
    password: import.meta.env.VITE_KHOKHO_ADMIN_PASSWORD,
    sportIds: ['khokho_boys', 'khokho_girls'],
    label: 'Kho-Kho Admin',
    icon: '🏃'
  },
  badminton: {
    username: import.meta.env.VITE_BADMINTON_ADMIN_USERNAME,
    password: import.meta.env.VITE_BADMINTON_ADMIN_PASSWORD,
    sportIds: ['badminton_boys', 'badminton_girls'],
    label: 'Badminton Admin',
    icon: '🏸'
  },
  tabletennis: {
    username: import.meta.env.VITE_TABLETENNIS_ADMIN_USERNAME,
    password: import.meta.env.VITE_TABLETENNIS_ADMIN_PASSWORD,
    sportIds: ['tabletennis_boys', 'tabletennis_girls'],
    label: 'Table Tennis Admin',
    icon: '🏓'
  },
};

// Validate admin login and return role info
export const validateAdminLogin = (username, password) => {
  // Check sport-specific admins
  for (const [categoryId, admin] of Object.entries(SPORT_ADMINS)) {
    if (username === admin.username && password === admin.password) {
      return {
        valid: true,
        role: categoryId,
        label: admin.label,
        icon: admin.icon,
        sportIds: admin.sportIds,
        allowedCategories: [categoryId]
      };
    }
  }

  return { valid: false };
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
  { id: 'volleyball_boys', name: 'Volleyball 🏐', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: 25 },
  { id: 'volleyball_girls', name: 'Volleyball 🏐', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: 25 },
  { id: 'basketball_boys', name: 'Basketball 🏀', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: '' },
  { id: 'basketball_girls', name: 'Basketball 🏀', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: '' },
  { id: 'khokho_boys', name: 'Kho-Kho 🏃', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: '' },
  { id: 'khokho_girls', name: 'Kho-Kho 🏃', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: '' },
  { id: 'badminton_boys', name: 'Badminton 🏸', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: 21 },
  { id: 'badminton_girls', name: 'Badminton 🏸', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: 21 },
  { id: 'tabletennis_boys', name: 'Table Tennis 🏓', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: 11 },
  { id: 'tabletennis_girls', name: 'Table Tennis 🏓', category: 'Girls', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: 11 },
  { id: 'football', name: 'Football ⚽', category: 'Boys', team1: '', team2: '', score1: 0, score2: 0, status: 'upcoming', scorelimit: '' },
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
    options: ['UIT Team A', 'UIT Team B', 'UCER Team A', 'UCER Team B', 'UIP Team A', 'UIP Team B', 'UIM Team A', 'UIM Team B', 'FUGS Team A', 'FUGS Team B']
  },
  // Team Sports - Crickett
  cricket: {
    type: 'team',
    label: 'Team',
    options: ['Royal Strikers', 'Super Kings', 'Thunder Hawks', 'Rising Stars', 'Brave Hearts', 'Storm Riders', 'Fire Wolves', 'Ice Dragons']
  },
  // Team Sports - Volleyball
  volleyball_boys: {
    type: 'team',
    label: 'Team',
    options: ['UIT Team A', 'UIT Team B', 'UCER Team A', 'UCER Team B', 'UIP Team', 'UIM Team', 'FUGS Team']
  },
  volleyball_girls: {
    type: 'team',
    label: 'Team',
    options: ['UIT Team', 'UCER Team', 'UIP Team', 'UIM Team', 'FUGS Team']
  },
  // Team Sports - Basketball
  basketball_boys: {
    type: 'team',
    label: 'Team',
    options: ['UIT Team', 'UCER Team', 'UIP Team', 'UIM Team', 'FUGS Team']
  },
  basketball_girls: {
    type: 'team',
    label: 'Team',
    options: ['UIT Team A', 'UIT Team B', 'UCER Team', 'UIM Team', 'FUGS Team ']
  },
  // Team Sports - Kho-Kho
  khokho_boys: {
    type: 'team',
    label: 'Team',
    options: ['UIT Team A', 'UIT Team B', 'UCER Team A', 'UCER Team B', 'UIP Team', 'UIM Team', 'FUGS Team']
  },
  khokho_girls: {
    type: 'team',
    label: 'Team',
    options: ['UIT Team A', 'UIT Team B', 'UCER Team', 'UIP Team', 'UIM Team', 'FUGS Team']
  },
  // Solo/Doubles - Badminton (Participant Names)
  badminton_boys: {
    type: 'player',
    label: 'Player',
    options: [
      "Shobhit",
      "Shikhar Awasthi",
      "Sanchit Verma",
      "Raj Pandey",
      "Piyush Maurya",
      "Ashwani Singh",
      "Ishant",
      "Harshit Verma",

      "Shaurya Dubey",
      "Prashant Shukla",
      "Vikrant Singh",
      "Neeraj Yadav",
      "Vishal Yadav",
      "Rajveer Dubey",
      "Abhinav Dixit",
      "Raj Dubey",

      "Ravi Ranjan",
      "Navneet Yadav",
      "Abhinav Tripathi",
      "Vishal Kumar",

      "Jayant Kumar Dhuria",
      "Varun Rathour",
      "Ujjawal Yadav",
      "Shivam Kumar Shukla",

      "Rishi Dwivedi",
      "Rishikesh Sarkar",
      "Sumit Kumar Singh",
      "Aryan Pratap Singh",
      "Gyan Singh",
      "Krishna Tripathi",
      "Aniket Pandey",
      "Pravan Gupta"
    ]

  },
  badminton_girls: {
    type: 'player',
    label: 'Player',
    options: [
      "Prachi Singh",
      "Riya Gupta",
      "Diya Gupta",
      "Sonam",
      "Arnika Patel",
      "Shreya Bachchan",
      "Aisha Shafeeque",
      "Shrijal Gupta",

      "Shristi Pandey",
      "Ananya Gupta",
      "Amisha Vishwakarma",
      "Aditi Singh",
      "Shreya Sharma",
      "Ashta Rai",
      "Anjali Singh",
      "Sneha Gaur",

      "Poornima Singh",
      "Nishi Gupta",
      "Pratiksha Agrahari",
      "Shraddha Mishra",

      "Shruti Shukla",
      "Shambhavi Mishra",

      "Satya Pandey",
      "Aishvi Asthana",
      "Muskan Yadav",
      "Apoorva Tripathi",
      "Gauri Singh",
      "Astha Singh",
      "Nandini Mishra",
      "Saumya Patel"
    ]

  },
  // Solo - Table Tennis (Participant Names)
  tabletennis_boys: {
    type: 'player',
    label: 'Player',
    options: [
      "Devesh Pandey",
      "Aarush Garg",
      "Prashant Tiwari",
      "Raunak Dubey",
      "Yashavi Raj",
      "Abhishek Gupta",

      "Shaurya Dubey",
      "Ayush Yadav",
      "Shivam",
      "Akash Srivastav",
      "Vishal Yadav",
      "Ashutosh Kumar",
      "Siddharth Maurya",
      "Atul Singh Yadav",

      "Aman Kr Verma",
      "Shivansh Kr Chaurasia",
      "Saurabh Yadav",
      "Aniket Kesarwani",

      "Yash Pandey",
      "Love Pandey",

      "Dhruv",
      "Arjun Vaish",
      "Shivam Patel",
      "Deekshansh Singh",
      "Raj Gupta",
      "Divansh Sharma"
    ]

  },
  tabletennis_girls: {
    type: 'player',
    label: 'Player',
    options: [
      "Ayushi Singh",
      "Harshita Mishra",
      "Meenal Baranwal",

      "Kirti Dubey",
      "Himanshi Singh",
      "Shrishti Sonkar",

      "Mahima Mehta",
      "Azra Khan",
      "Nikita Singh",
      "Khursheeda Bano",

      "Falak Ahmed",
      "Anchal Tiwari"
    ]

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

// Save match stats (score, winner, loser, etc.) in Firestore
export const saveMatchStats = ({
  sportId,
  matchId,
  team1,
  team2,
  score1,
  score2,
  winner,
  loser,
  extraStats = {},
}) => {
  // Reference: matchStats/{sportId}/{matchId}
  const matchStatsRef = ref(database, `matchStats/${sportId}/${matchId}`);
  const stats = {
    team1,
    team2,
    score1,
    score2,
    winner,
    loser,
    ...extraStats,
    timestamp: Date.now(),
  };
  set(matchStatsRef, stats);
};

