const screens = [...document.querySelectorAll(".screen")];
const progressFill = document.getElementById("progressFill");
const scoreValue = document.getElementById("scoreValue");
const starValue = document.getElementById("starValue");
const definitionTitle = document.getElementById("definitionTitle");
const definitionText = document.getElementById("definitionText");
const definitionVisual = document.getElementById("definitionVisual");
const crosswordBoard = document.getElementById("crosswordBoard");
const acrossClueList = document.getElementById("acrossClueList");
const downClueList = document.getElementById("downClueList");
const crosswordFeedback = document.getElementById("crosswordFeedback");
const crosswordTimerLabel = document.getElementById("crosswordTimerLabel");
const crosswordTimerValue = document.getElementById("crosswordTimerValue");
const crosswordHintLabel = document.getElementById("crosswordHintLabel");
const crosswordHintValue = document.getElementById("crosswordHintValue");
const crosswordBonusLabel = document.getElementById("crosswordBonusLabel");
const crosswordBonusValue = document.getElementById("crosswordBonusValue");
const crosswordStatusText = document.getElementById("crosswordStatusText");
const labelBank = document.getElementById("labelBank");
const dragFeedback = document.getElementById("dragFeedback");
const boardGrid = document.getElementById("boardGrid");
const playerPosition = document.getElementById("playerPosition");
const diceFace = document.getElementById("diceFace");
const boardPrompt = document.getElementById("boardPrompt");
const boardAnswer = document.getElementById("boardAnswer");
const boardFeedback = document.getElementById("boardFeedback");
const finalScore = document.getElementById("finalScore");
const finalStars = document.getElementById("finalStars");
const langButtons = document.querySelectorAll(".lang-btn");
const playerNameInput = document.getElementById("playerName");
const playerEmailInput = document.getElementById("playerEmail");
const startGameButton = document.getElementById("startGameButton");
const formNote = document.getElementById("formNote");
const formFeedback = document.getElementById("formFeedback");
const heroSubtitleLead = document.getElementById("heroSubtitleLead");
const heroProfileName = document.getElementById("heroProfileName");
const heroAvatarInitial = document.getElementById("heroAvatarInitial");
const heroLevelBadge = document.getElementById("heroLevelBadge");
const heroXpValue = document.getElementById("heroXpValue");
const heroXpFill = document.getElementById("heroXpFill");
const frontScoreValue = document.getElementById("frontScoreValue");
const frontCoinValue = document.getElementById("frontCoinValue");
const toggleSoundButton = document.getElementById("toggleSoundButton");
const toggleMusicButton = document.getElementById("toggleMusicButton");
const soundStatus = document.getElementById("soundStatus");
const musicStatus = document.getElementById("musicStatus");
const mysteryStory = document.getElementById("mysteryStory");
const mysteryRiddle = document.getElementById("mysteryRiddle");
const mysteryCardsGrid = document.getElementById("mysteryCardsGrid");
const mysteryFeedback = document.getElementById("mysteryFeedback");
const detectiveClues = document.getElementById("detectiveClues");
const clueList = document.getElementById("clueList");
const detectiveWitnesses = document.getElementById("detectiveWitnesses");
const witnessContainer = document.getElementById("witnessContainer");
const detectivePuzzle = document.getElementById("detectivePuzzle");
const detectiveAnswer = document.getElementById("detectiveAnswer");
const submitDetective = document.getElementById("submitDetective");
const detectiveFeedback = document.getElementById("detectiveFeedback");
const boardEnhancedGrid = document.getElementById("boardEnhancedGrid");
const rollDiceEnhanced = document.getElementById("rollDiceEnhanced");
const overallProgressFill = document.getElementById("overallProgressFill");
const progressText = document.getElementById("progressText");
const achievementList = document.getElementById("achievementList");
const learningRecommendation = document.getElementById("learningRecommendation");
const termsNavButtons = document.querySelectorAll(".terms-nav-btn");
const noteBeforeCrossword = document.querySelector(".note-before-crossword");
const termBubbles = document.querySelectorAll(".bubble");
const conceptTermButtons = document.querySelectorAll(".concept-note[data-term]");
const mindmapDetailTitle = document.getElementById("mindmapDetailTitle");
const mindmapDetailText = document.getElementById("mindmapDetailText");
const mindmapDetailVisual = document.getElementById("mindmapDetailVisual");
const noteSpeakButton = document.getElementById("noteSpeakButton");
const noteStopAudioButton = document.getElementById("noteStopAudioButton");
const noteFactLabel = document.getElementById("noteFactLabel");
const noteFactText = document.getElementById("noteFactText");
const noteHoloPill = document.getElementById("noteHoloPill");
const noteClickHint = document.getElementById("noteClickHint");
const mindmapPopupLabel = document.getElementById("mindmapPopupLabel");
const formulaGlowLabel = document.getElementById("formulaGlowLabel");
const quickPanelButtons = document.querySelectorAll("[data-quick-panel]");
const heroQuickPanel = document.getElementById("heroQuickPanel");
const heroQuickPanelBackdrop = document.getElementById("heroQuickPanelBackdrop");
const heroQuickPanelLabel = document.getElementById("heroQuickPanelLabel");
const heroQuickPanelTitle = document.getElementById("heroQuickPanelTitle");
const heroQuickPanelContent = document.getElementById("heroQuickPanelContent");
const closeHeroQuickPanel = document.getElementById("closeHeroQuickPanel");

const mysteryQuestionBank = [
  {
    id: 1,
    title: "Pilihan 01",
    prompt: "Sebuah bulatan mempunyai jejari 14 cm. Cari luas sektor dengan sudut 135�.",
    answer: "230.90cm�",
    distractors: ["184.80cm�", "269.40cm�", "154.00cm�"],
  },
  {
    id: 2,
    title: "Pilihan 02",
    prompt: "Lilitan bulatan ialah 44 cm. Cari jejari. (Guna p = 22/7)",
    answer: "7cm",
    distractors: ["6cm", "14cm", "3.5cm"],
  },
  {
    id: 3,
    title: "Pilihan 03",
    prompt: "Seutas dawai sepanjang 88 cm dibengkokkan untuk membentuk bulatan. Cari luas bulatan itu.",
    answer: "616cm�",
    distractors: ["588cm�", "554cm�", "692cm�"],
  },
  {
    id: 4,
    title: "Pilihan 04",
    prompt: "Cari panjang lengkok bagi 150� dalam bulatan dengan diameter 14 cm.",
    answer: "18.33cm",
    distractors: ["16.50cm", "21.99cm", "14.67cm"],
  },
];

const texts = {
  bm: {
    kicker: "Topik Bulatan",
    topicLine: "Matematik",
    topicLevel: "Tingkatan 2 KSSM",
    title: "CIRCLIX",
    subtitleLead: "Cabaran Bulatan Bermula:",
    subtitle: "Terokai Dunia Bulatan!",
    soundLabel: "Sound",
    musicLabel: "Muzik",
    achievementLabel: "Pencapaian",
    profileLabel: "Profil",
    bubbleText: "Jom mula misi dan kuasai bulatan!",
    profileFallback: "Tetamu",
    scoreLabel: "Skor",
    coinLabel: "Syiling",
    menuGuide: "Arahan",
    menuLeaderboard: "Papan Kedudukan",
    menuAbout: "Tentang CircliX",
    menuExit: "Keluar",
    quickGuideTitle: "Cara Bermain CircliX",
    quickGuideIntro: "Ikuti langkah ringkas ini untuk memulakan misi anda:",
    quickGuideStep1: "Masukkan nama dan e-mel anda pada panel utama.",
    quickGuideStep2: "Tekan butang Mula Misi untuk membuka Peta Misi.",
    quickGuideStep3: "Selesaikan 5 bahagian utama: nota, silang kata, kad misteri, seret label, dan monopoly game.",
    quickGuideStep4: "Kumpul skor dan bintang untuk menjejaki kemajuan pembelajaran anda.",
    quickLeaderboardTitle: "Papan Kedudukan Misi",
    quickLeaderboardNote: "Kedudukan disusun berdasarkan skor semasa permainan ini.",
    quickAboutTitle: "Tentang CircliX",
    quickAboutText1: "CircliX ialah permainan pembelajaran interaktif bertema angkasa untuk membantu murid memahami konsep bulatan Tingkatan 2 KSSM.",
    quickAboutText2: "Setiap bahagian direka supaya ulang kaji menjadi lebih visual, menyeronokkan, dan mudah diingati.",
    quickExitTitle: "Keluar Dari Panel Mula",
    quickExitText: "Anda masih berada di muka depan permainan. Jika mahu mula semula, kosongkan borang dan tetapan pada panel ini.",
    quickExitAction: "Kosongkan Borang",
    featureInteractiveTitle: "Interaktif",
    featureInteractiveText: "Belajar sambil bermain dengan cabaran menarik!",
    featureUnderstandTitle: "Fahami",
    featureUnderstandText: "Terokai konsep bulatan dengan cara yang menyeronokkan.",
    featureWinTitle: "Kumpul & Menang",
    featureWinText: "Kumpul bintang, pecahkan rekod dan raih pencapaian.",
    featureLevelTitle: "Tingkatkan Diri",
    featureLevelText: "Naik level dan kuasai setiap cabaran bulatan.",
    noteAudioPlay: "Dengar Penerangan",
    noteAudioStop: "Henti Audio",
    noteFactLabel: "Tahukah Anda?",
    noteHoloPill: "Hologram Note",
    noteClickHint: "Klik mana-mana bulatan untuk buka info",
    notePopupLabel: "Interactive Pop-Up",
    formulaGlowLabel: "Sorotan Formula",
    mapSectionTag: "Peta Misi",
    mapHeading: "Pilih Bahagian Permainan",
    mapDescription: "Mulakan pengembaraan CircliX dengan memilih mana-mana daripada 5 bahagian utama di bawah.",
    mapNoteTitle: "Nota",
    mapNoteText: "Ulang kaji konsep, istilah dan formula bulatan.",
    mapCrosswordTitle: "Teka Silang Kata",
    mapCrosswordText: "Jawab petunjuk melintang dan menegak berkaitan bulatan.",
    mapMysteryTitle: "Kad Misteri",
    mapMysteryText: "Buka misteri dan jawab teka-teki untuk temui petunjuk penting.",
    mapDragTitle: "Seretkan Bulatan",
    mapDragText: "Padankan label kepada bahagian bulatan pada rajah interaktif.",
    mapBoardTitle: "Monopoly Game",
    mapBoardText: "Gerak di papan permainan dan jawab cabaran ringkas bulatan.",
    mapBackButton: "Kembali Ke Home",
    mapBeginButton: "Ikut Turutan Misi",
    tabNota: "1. Nota",
    tabCrossword: "2. Teka Silang Kata",
    tabMystery: "3. Kad Misteri",
    tabDrag: "4. Seretkan Bulatan",
    tabBoard: "5. Monopoly Game",
    termsHeroKicker: "Menu Pembelajaran",
    termsHeroTitle: "TEROKAI DUNIA BULATAN",
    termsHeroSubtitle:
      "Ikut 5 bahagian utama permainan untuk memahami dan menguasai topik bulatan.",
    noteSectionTag: "Bahagian 1",
    noteHeading: "Nota Interaktif Bulatan",
    noteDescription:
      "Klik hologram bahagian bulatan untuk buka pop-up info, dengar penerangan audio, dan terokai rumus yang menyala.",
    termsReminder:
      "Selepas semak nota di atas, teruskan ke latihan silang kata untuk menguji kefahaman anda.",
    infoChip: "Info Istilah",
    termsPrev: "Peta Misi",
    termsNext: "Seterusnya",
    crosswordSectionTag: "Bahagian 2",
    crosswordHeading: "Teka Silang Kata Bulatan",
    crosswordDescription:
      "Selesaikan silang kata ini sebelum masa tamat. Gunakan hint dengan bijak untuk kekalkan skor bonus anda.",
    clueHeading: "Petunjuk",
    acrossLabel: "Melintang",
    downLabel: "Menegak",
    checkCrossword: "Semak Jawapan",
    hintCrossword: "Petunjuk",
    crosswordTimerLabel: "Masa",
    crosswordHintLabel: "Hint",
    crosswordBonusLabel: "Bonus",
    crosswordStatusReady: "Bonus aktif",
    crosswordStatusRunning: "Misi sedang berjalan",
    crosswordStatusSolved: "Silang kata lengkap",
    crosswordStatusTimeUp: "Masa tamat",
    crosswordHintApplied: "Petunjuk dibuka untuk satu kotak.",
    crosswordHintExhausted: "Semua hint sudah digunakan.",
    crosswordHintNotNeeded: "Semua kotak sudah dijawab dengan betul.",
    crosswordTimeUpMessage: "Masa tamat. Anda masih boleh semak jawapan, tetapi bonus masa sudah habis.",
    crosswordSolvedMessage: "Hebat! Semua jawapan betul. +{total} skor ({base} asas + {bonus} bonus).",
    crosswordSolvedRepeat: "Silang kata ini sudah selesai.",
    crosswordIncompleteMessage: "Masih ada {count} kotak yang salah atau kosong.",
    dragSectionTag: "Bahagian 4",
    dragHeading: "Seretkan Bulatan",
    dragDescription: "Seret label ke tempat yang betul pada gambar rajah bulatan.",
    resetDrag: "Set Semula",
    checkDrag: "Semak Label",
    mathopolySectionTag: "Bahagian 5",
    mathopolyHeading: "Monopoly Game CircliX",
    mathopolyDescription:
      "Pusing dadu, gerak ke hadapan, dan jawab soalan ringkas tentang bulatan.",
    playerLabel: "Pemain",
    rollDiceButton: "Pusing Dadu",
    challengeHeading: "Cabaran",
    boardPrompt: "Tekan butang untuk mula bergerak.",
    boardAnswerPlaceholder: "Masukkan jawapan",
    submitBoardAnswer: "Hantar",
    dragPrev: "Sebelumnya",
    dragNext: "Seterusnya",
    mathopolyPrev: "Sebelumnya",
    mathopolyFinish: "Seterusnya",
    finishSectionTag: "Tamat Misi",
    finishHeading: "Tahniah",
    finishDescription: "Anda telah menyelesaikan 5 bahagian utama permainan CircliX.",
    restartButton: "Main Semula",
    bubbleJejari: "Jejari",
    bubbleTembereng: "Tembereng",
    bubbleLilitan: "Lilitan",
    bubblePusat: "Pusat",
    bubbleSektor: "Sektor",
    bubbleDiameter: "Diameter",
    bubblePerentas: "Perentas",
    bubbleLengkok: "Lengkok",
    nameLabel: "Nama",
    emailLabel: "E-mel",
    namePlaceholder: "Masukkan nama anda",
    emailPlaceholder: "contoh@mail.com",
    startButton: "Mula Misi",
    formNote: "Masukkan nama dan e-mel untuk memulakan misi anda.",
    welcome: "Selamat datang, {name}! Mari mulakan misi anda dan jadi pakar bulatan!",
    missingName: "Sila masukkan nama.",
    invalidEmail: "Sila masukkan e-mel yang sah.",
    mysterySectionTag: "Bahagian 3",
    mysteryHeading: "Kad Misteri Bulatan",
    mysteryDescription: "Selesaikan teka-teki misteri untuk mendedahkan teorem bulatan yang tersembunyi.",
    riddleHeading: "Teka-teki",
    submitRiddle: "Hantar",
    detectiveSectionTag: "Zon 3",
    detectiveHeading: "Detektif Bulatan",
    detectiveDescription: "Kumpulkan petunjuk, soal saksi, dan selesaikan misteri bulatan.",
    submitDetective: "Selesai",
    boardEnhancedSectionTag: "Zon 7",
    boardEnhancedHeading: "Papan Permainan Lanjutan",
    boardEnhancedDescription: "Papan permainan dengan cabaran matematik bulatan yang lebih kompleks dan mod berbilang pemain.",
    rollDiceEnhanced: "Pusing Dadu",
    userViewSectionTag: "Zon 5",
    userViewHeading: "Pandangan Pengguna",
    userViewDescription: "Lihat kemajuan anda, pencapaian, dan laluan pembelajaran yang diperibadikan.",
  },
  en: {
    kicker: "Circle Topic",
    topicLine: "Mathematics",
    topicLevel: "Form 2 KSSM",
    title: "CIRCLIX",
    subtitleLead: "Circle Mission Begins:",
    subtitle: "Explore the World of Circles!",
    soundLabel: "Sound",
    musicLabel: "Music",
    achievementLabel: "Achievements",
    profileLabel: "Profile",
    bubbleText: "Let's launch the mission and master circles!",
    profileFallback: "Player",
    scoreLabel: "Score",
    coinLabel: "Coins",
    menuGuide: "Guide",
    menuLeaderboard: "Leaderboard",
    menuAbout: "About CircliX",
    menuExit: "Exit",
    quickGuideTitle: "How To Play CircliX",
    quickGuideIntro: "Follow these quick steps to begin your mission:",
    quickGuideStep1: "Enter your name and email in the main panel.",
    quickGuideStep2: "Press Start Mission to open the Mission Map.",
    quickGuideStep3: "Complete the 5 main sections: notes, crossword, mystery cards, drag labels, and the monopoly game.",
    quickGuideStep4: "Collect score and stars to track your learning progress.",
    quickLeaderboardTitle: "Mission Leaderboard",
    quickLeaderboardNote: "Rankings are arranged using the current score in this session.",
    quickAboutTitle: "About CircliX",
    quickAboutText1: "CircliX is a space-themed interactive learning game that helps students understand Form 2 KSSM circle concepts.",
    quickAboutText2: "Each section is designed to make revision more visual, enjoyable, and memorable.",
    quickExitTitle: "Exit Start Panel",
    quickExitText: "You are still on the game's front screen. If you want a clean restart, clear the form and begin again from here.",
    quickExitAction: "Clear Form",
    featureInteractiveTitle: "Interactive",
    featureInteractiveText: "Learn through play with exciting challenges!",
    featureUnderstandTitle: "Understand",
    featureUnderstandText: "Explore circle concepts in a fun and memorable way.",
    featureWinTitle: "Collect & Win",
    featureWinText: "Collect stars, break records, and unlock achievements.",
    featureLevelTitle: "Level Up",
    featureLevelText: "Grow your level and master every circle challenge.",
    noteAudioPlay: "Play Audio",
    noteAudioStop: "Stop Audio",
    noteFactLabel: "Did You Know?",
    noteHoloPill: "Hologram Note",
    noteClickHint: "Tap any circle to open the info pop-up",
    notePopupLabel: "Interactive Pop-Up",
    formulaGlowLabel: "Formula Focus",
    mapSectionTag: "Mission Map",
    mapHeading: "Choose Your Game Section",
    mapDescription: "Start the CircliX adventure by choosing any of the 5 main game sections below.",
    mapNoteTitle: "Notes",
    mapNoteText: "Review circle concepts, terms, and formulas.",
    mapCrosswordTitle: "Crossword",
    mapCrosswordText: "Answer across and down clues related to circles.",
    mapMysteryTitle: "Mystery Cards",
    mapMysteryText: "Uncover the mystery and solve riddles to find key clues.",
    mapDragTitle: "Drag the Circle",
    mapDragText: "Match labels to the correct parts of the interactive diagram.",
    mapBoardTitle: "Monopoly Game",
    mapBoardText: "Move on the board and answer quick circle challenges.",
    mapBackButton: "Back To Home",
    mapBeginButton: "Follow Mission Order",
    tabNota: "1. Notes",
    tabCrossword: "2. Crossword",
    tabMystery: "3. Mystery Cards",
    tabDrag: "4. Drag the Circle",
    tabBoard: "5. Monopoly Game",
    termsHeroKicker: "Learning Menu",
    termsHeroTitle: "EXPLORE THE WORLD OF CIRCLES",
    termsHeroSubtitle:
      "Follow the 5 main game sections to understand and master circles.",
    noteSectionTag: "Part 1",
    noteHeading: "Interactive Circle Notes",
    noteDescription:
      "Tap any circle hologram to open the info pop-up, hear the audio explanation, and explore glowing formulas.",
    termsReminder:
      "After reviewing the notes above, continue to the crossword activity to test your understanding.",
    infoChip: "Term Info",
    termsPrev: "Mission Map",
    termsNext: "Next",
    crosswordSectionTag: "Part 2",
    crosswordHeading: "Circle Crossword",
    crosswordDescription:
      "Complete this crossword before time runs out. Use hints wisely to keep your bonus score high.",
    clueHeading: "Clues",
    acrossLabel: "Across",
    downLabel: "Down",
    checkCrossword: "Check Answers",
    hintCrossword: "Hint",
    crosswordTimerLabel: "Time",
    crosswordHintLabel: "Hints",
    crosswordBonusLabel: "Bonus",
    crosswordStatusReady: "Bonus active",
    crosswordStatusRunning: "Mission in progress",
    crosswordStatusSolved: "Crossword complete",
    crosswordStatusTimeUp: "Time up",
    crosswordHintApplied: "One box has been revealed.",
    crosswordHintExhausted: "All hints have been used.",
    crosswordHintNotNeeded: "Every box is already correct.",
    crosswordTimeUpMessage: "Time is up. You can still check your answers, but the time bonus is gone.",
    crosswordSolvedMessage: "Excellent! All answers are correct. +{total} score ({base} base + {bonus} bonus).",
    crosswordSolvedRepeat: "This crossword has already been completed.",
    crosswordIncompleteMessage: "There are still {count} incorrect or empty boxes.",
    dragSectionTag: "Part 4",
    dragHeading: "Drag the Circle",
    dragDescription: "Drag each label to the correct part of the circle diagram.",
    resetDrag: "Reset",
    checkDrag: "Check Labels",
    mathopolySectionTag: "Part 5",
    mathopolyHeading: "CircliX Monopoly Game",
    mathopolyDescription:
      "Roll the dice, move forward, and answer quick circle questions.",
    playerLabel: "Player",
    rollDiceButton: "Roll Dice",
    challengeHeading: "Challenge",
    boardPrompt: "Press the button to start moving.",
    boardAnswerPlaceholder: "Enter answer",
    submitBoardAnswer: "Submit",
    dragPrev: "Back",
    dragNext: "Next",
    mathopolyPrev: "Back",
    mathopolyFinish: "Next",
    finishSectionTag: "Mission Complete",
    finishHeading: "Congratulations",
    finishDescription: "You have completed the 5 main CircliX game sections.",
    restartButton: "Play Again",
    bubbleJejari: "Radius",
    bubbleTembereng: "Segment",
    bubbleLilitan: "Circumference",
    bubblePusat: "Center",
    bubbleSektor: "Sector",
    bubbleDiameter: "Diameter",
    bubblePerentas: "Chord",
    bubbleLengkok: "Arc",
    nameLabel: "Name",
    emailLabel: "Email",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "example@mail.com",
    startButton: "Start Mission",
    formNote: "Enter your name and email to begin the mission.",
    welcome: "Welcome, {name}! Let's begin your mission and master circles!",
    missingName: "Please enter your name.",
    invalidEmail: "Please enter a valid email.",
    mysterySectionTag: "Part 3",
    mysteryHeading: "Circle Mystery Cards",
    mysteryDescription: "Solve mystery riddles to uncover hidden circle theorems.",
    riddleHeading: "Riddle",
    submitRiddle: "Submit",
    detectiveSectionTag: "Zone 3",
    detectiveHeading: "Circle Detective",
    detectiveDescription: "Gather clues, question witnesses, and solve circle mysteries.",
    submitDetective: "Complete",
    boardEnhancedSectionTag: "Zone 7",
    boardEnhancedHeading: "Advanced Game Board",
    boardEnhancedDescription: "Game board with more complex circle math challenges and multiplayer mode.",
    rollDiceEnhanced: "Roll Dice",
    userViewSectionTag: "Zone 5",
    userViewHeading: "User View",
    userViewDescription: "View your progress, achievements, and personalized learning path.",
  },
};

const state = {
  score: 0,
  stars: 0,
  viewedTerms: new Set(),
  currentScreen: "start",
  crosswordSolved: false,
  crosswordDirection: "across",
  activeCrosswordKey: "",
  dragSolved: false,
  boardPosition: 0,
  pendingTile: null,
  solvedBoardTiles: new Set(),
  language: "bm",
  playerName: "",
  playerEmail: "",
  quickPanel: "",
  mysterySolved: false,
  detectiveSolved: false,
  boardEnhancedPosition: 0,
  solvedBoardEnhancedTiles: new Set(),
};

const CROSSWORD_CELL_SIZE = 30;
const CROSSWORD_TIME_LIMIT = 300;
const CROSSWORD_MAX_HINTS = 3;
const CROSSWORD_BASE_SCORE = 100;
const CROSSWORD_TIME_BONUS_DIVISOR = 4;
const CROSSWORD_HINT_BONUS = 10;
const AUDIO_LEVELS = {
  on: "ON",
  off: "OFF",
};
const ambientProgression = [
  { bass: 110.0, chord: [220.0, 261.63, 329.63], sparkle: 659.25 },
  { bass: 98.0, chord: [196.0, 246.94, 293.66], sparkle: 587.33 },
  { bass: 130.81, chord: [261.63, 329.63, 392.0], sparkle: 783.99 },
  { bass: 146.83, chord: [293.66, 349.23, 440.0], sparkle: 698.46 },
];
const audioState = {
  context: null,
  masterBus: null,
  musicBus: null,
  effectsBus: null,
  musicIntervalId: null,
  progressionIndex: 0,
  musicEnabled: true,
  soundEnabled: true,
  musicRunning: false,
  unlockBound: false,
};

const noteSpeechState = {
  utterance: null,
};

const noteFacts = {
  bm: {
    jejari: "Semua jejari dalam bulatan yang sama sentiasa sama panjang.",
    lilitan: "Lilitan ialah jarak lengkap mengelilingi bulatan, sama seperti perimeter bagi bentuk lain.",
    pusat: "Pusat menjadi titik rujukan utama kerana semua titik pada lilitan berjarak sama daripadanya.",
    diameter: "Diameter ialah perentas terpanjang kerana ia melalui pusat bulatan.",
    tembereng: "Tembereng boleh jadi minor atau major bergantung pada lengkok yang membatasinya.",
    perentas: "Semakin hampir perentas kepada pusat bulatan, semakin panjang perentas itu.",
    lengkok: "Lengkok major lebih panjang daripada lengkok minor walaupun kedua-duanya berada pada bulatan yang sama.",
    sektor: "Sektor menggunakan dua jejari, jadi luasnya sering dikira menggunakan sudut pusat.",
  },
  en: {
    jejari: "All radii in the same circle are always equal in length.",
    lilitan: "Circumference is the full distance around a circle, just like perimeter for other shapes.",
    pusat: "The center is the key reference point because every point on the circle is equally distant from it.",
    diameter: "The diameter is the longest chord because it passes through the center of the circle.",
    tembereng: "A segment can be minor or major depending on the arc that bounds it.",
    perentas: "The closer a chord is to the center of a circle, the longer the chord becomes.",
    lengkok: "A major arc is longer than a minor arc even though both belong to the same circle.",
    sektor: "A sector uses two radii, so its area is often calculated using the central angle.",
  },
};

const terms = {
  jejari: {
    title: "Jejari",
    text: "Garis lurus dari pusat bulatan ke sebarang titik pada lilitan bulatan.",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="88" stroke="#4ec5ff" stroke-width="14" fill="rgba(78,197,255,0.12)" />
      <line x1="110" y1="110" x2="188" y2="110" stroke="#ffd957" stroke-width="10" stroke-linecap="round" />
      <circle cx="110" cy="110" r="6" fill="#fff" />
    </svg>`,
  },
  tembereng: {
    title: "Tembereng",
    text: "Rantau yang dibatasi oleh satu lengkok dan satu perentas.",
    svg: `<img class="mindmap-detail-image mindmap-detail-image-tembereng" src="assets/circle_04.gif" alt="Rajah tembereng minor dan tembereng major" />`,
  },
  lilitan: {
    title: "Lilitan",
    text: "Perimeter sebuah bulatan.",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="88" stroke="#4ec5ff" stroke-width="14" fill="none" />
      <circle cx="110" cy="110" r="88" stroke="#ffd957" stroke-width="8" stroke-dasharray="10 8" fill="none" />
    </svg>`,
  },
  pusat: {
    title: "Pusat",
    text: "Satu titik tetap yang berjarak sama dari semua titik pada lilitan bulatan.",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="88" stroke="#4ec5ff" stroke-width="14" fill="rgba(78,197,255,0.08)" />
      <circle cx="110" cy="110" r="12" fill="#ffd957" />
    </svg>`,
  },
  sektor: {
    title: "Sektor",
    text: "Rantau yang dibatasi oleh satu lengkok dan dua jejari.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="120" r="92" fill="#fff" stroke="#1788e5" stroke-width="4" />
      <path d="M120 120 L46 162 A92 92 0 1 1 194 162 Z" fill="rgba(23,136,229,0.08)" />
      <path d="M120 120 L46 162 A92 92 0 0 0 194 162 Z" fill="rgba(23,136,229,0.28)" />
      <line x1="120" y1="120" x2="46" y2="162" stroke="#1788e5" stroke-width="3" stroke-linecap="round" />
      <line x1="120" y1="120" x2="194" y2="162" stroke="#1788e5" stroke-width="3" stroke-linecap="round" />
      <circle cx="120" cy="120" r="4.5" fill="#111" />
      <text x="54" y="70" fill="#111" font-size="17" font-weight="400" font-family="Georgia, 'Times New Roman', serif">Sektor major</text>
      <text x="120" y="162" text-anchor="middle" fill="#111" font-size="18" font-weight="400" font-family="Georgia, 'Times New Roman', serif">Sektor</text>
      <text x="120" y="188" text-anchor="middle" fill="#111" font-size="18" font-weight="400" font-family="Georgia, 'Times New Roman', serif">minor</text>
    </svg>`,
  },
  diameter: {
    title: "Diameter",
    text: "Garis lurus yang menyentuh lilitan dan melalui pusat bulatan.",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="88" stroke="#4ec5ff" stroke-width="14" fill="rgba(78,197,255,0.08)" />
      <line x1="22" y1="110" x2="198" y2="110" stroke="#ffd957" stroke-width="10" stroke-linecap="round" />
    </svg>`,
  },
  perentas: {
    title: "Perentas",
    text: "Garis lurus yang menyambung sebarang dua titik pada lilitan bulatan.",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="88" stroke="#4ec5ff" stroke-width="14" fill="rgba(78,197,255,0.06)" />
      <line x1="58" y1="64" x2="176" y2="156" stroke="#ff618f" stroke-width="10" stroke-linecap="round" />
    </svg>`,
  },
  lengkok: {
    title: "Lengkok",
    text: "Lengkok adalah sebahagian daripada bulatan.",
    svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-lengkok" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill="#111" />
        </marker>
      </defs>
      <circle cx="132" cy="112" r="82" fill="#fff" stroke="#111" stroke-width="4" />
      <line x1="132" y1="112" x2="76" y2="172" stroke="#8e5ad7" stroke-width="4" stroke-linecap="round" />
      <line x1="132" y1="112" x2="188" y2="172" stroke="#8e5ad7" stroke-width="4" stroke-linecap="round" />
      <path d="M76 172 A82 82 0 0 0 188 172" stroke="#8e5ad7" stroke-width="5" fill="none" stroke-linecap="round" />
      <circle cx="132" cy="112" r="5.5" fill="#111" />
      <text x="224" y="58" fill="#8e5ad7" font-size="16" font-weight="700" font-family="Segoe UI, sans-serif">Lengkok</text>
      <text x="250" y="80" fill="#8e5ad7" font-size="16" font-weight="700" font-family="Segoe UI, sans-serif">major</text>
      <path d="M214 60 C200 60 192 58 182 54" fill="none" stroke="#111" stroke-width="3" marker-end="url(#arrow-lengkok)" />
      <text x="222" y="186" fill="#8e5ad7" font-size="16" font-weight="700" font-family="Segoe UI, sans-serif">Lengkok</text>
      <text x="248" y="208" fill="#8e5ad7" font-size="16" font-weight="700" font-family="Segoe UI, sans-serif">minor</text>
      <path d="M214 184 C200 184 192 182 184 178" fill="none" stroke="#111" stroke-width="3" marker-end="url(#arrow-lengkok)" />
    </svg>`,
  },
};

const crosswordEntries = [
  { id: "1A", number: 1, answer: "luas", clue: "Kawasan di dalam bulatan.", row: 0, col: 5, dir: "across", hints: [] },
  {
    id: "2D",
    number: 2,
    answer: "sektor",
    clue: "Kawasan yang dibatasi oleh dua jejari dan satu lengkok.",
    row: 0,
    col: 8,
    dir: "down",
    hints: [],
  },
  {
    id: "3D",
    number: 3,
    answer: "bulatan",
    clue: "Lokus laluan lengkung bagi titik yang sama jarak daripada pusat.",
    row: 1,
    col: 2,
    dir: "down",
    hints: [],
  },
  {
    id: "4D",
    number: 4,
    answer: "pi",
    clue: "3.14159265359",
    row: 2,
    col: 5,
    dir: "down",
    hints: [],
  },
  {
    id: "5A",
    number: 5,
    answer: "lilitan",
    clue: "Perimeter bulatan.",
    row: 3,
    col: 4,
    dir: "across",
    hints: [],
  },
  {
    id: "6D",
    number: 6,
    answer: "lengkokminor",
    clue: "Lengkok kurang daripada 180°.",
    row: 3,
    col: 6,
    dir: "down",
    hints: [],
  },
  {
    id: "7A",
    number: 7,
    answer: "tetap",
    clue: "Titik ____ di mana semua titik pada lilitan adalah sama jarak daripadanya.",
    row: 5,
    col: 0,
    dir: "across",
    hints: [],
  },
  {
    id: "8A",
    number: 8,
    answer: "lengkok",
    clue: "Bahagian lilitan.",
    row: 7,
    col: 0,
    dir: "across",
    hints: [],
  },
  {
    id: "9D",
    number: 9,
    answer: "diameter",
    clue: "Perentas terpanjang dalam bulatan.",
    row: 10,
    col: 8,
    dir: "down",
    hints: [],
  },
  {
    id: "10D",
    number: 10,
    answer: "tangen",
    clue: "Garis yang bersilang dengan bulatan tepat pada satu titik.",
    row: 11,
    col: 12,
    dir: "down",
    hints: [],
  },
  {
    id: "11A",
    number: 11,
    answer: "perentas",
    clue: "Garis lurus yang menghubungkan mana-mana dua titik pada lilitan.",
    row: 12,
    col: 2,
    dir: "across",
    hints: [],
  },
  {
    id: "11D",
    number: 11,
    answer: "pusat",
    clue: "Semua titik pada bulatan adalah sama jarak dari titik ini.",
    row: 12,
    col: 2,
    dir: "down",
    hints: [],
  },
  {
    id: "12A",
    number: 12,
    answer: "radian",
    clue: "Sudut boleh diukur menggunakan ________.",
    row: 12,
    col: 11,
    dir: "across",
    hints: [],
  },
  {
    id: "13A",
    number: 13,
    answer: "segmen",
    clue: "Kawasan yang dikelilingi oleh perentas dan lengkok.",
    row: 16,
    col: 7,
    dir: "across",
    hints: [],
  },
];

const crosswordState = {
  cells: new Map(),
  inputs: new Map(),
  entryKeys: new Map(),
  clueElements: new Map(),
  editableKeys: [],
  secondsLeft: CROSSWORD_TIME_LIMIT,
  hintsRemaining: CROSSWORD_MAX_HINTS,
  hintsUsed: 0,
  timerId: 0,
  expired: false,
};

const dragLabels = ["Perentas", "Diameter", "Lilitan", "Pusat", "Jejari", "Sektor"];

const boardTiles = [
  { title: "Mula", prompt: "Selamat datang ke Mathopoly Mini.", answer: "", special: true },
  { title: "Jejari", prompt: "Jika diameter 12 cm, jejari ialah?", answer: "6" },
  { title: "Lilitan", prompt: "Perimeter bulatan dipanggil?", answer: "lilitan" },
  { title: "Pusat", prompt: "Titik tengah bulatan dipanggil?", answer: "pusat" },
  { title: "Sektor", prompt: "Sektor dibatasi oleh berapa jejari?", answer: "2" },
  { title: "Perentas", prompt: "Perentas menyambung berapa titik pada lilitan?", answer: "2" },
  { title: "Diameter", prompt: "Diameter ialah berapa kali jejari?", answer: "2" },
  { title: "Penamat", prompt: "Tahniah, anda sampai ke penamat.", answer: "", special: true },
];

function getAudioContextClass() {
  return window.AudioContext || window.webkitAudioContext || null;
}

function createAudioEngine() {
  if (audioState.context) return audioState.context;

  const AudioContextClass = getAudioContextClass();
  if (!AudioContextClass) return null;

  const context = new AudioContextClass();
  const compressor = context.createDynamicsCompressor();
  compressor.threshold.value = -22;
  compressor.knee.value = 12;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.02;
  compressor.release.value = 0.25;

  const masterBus = context.createGain();
  masterBus.gain.value = 0.95;

  const musicBus = context.createGain();
  musicBus.gain.value = 0.0001;

  const effectsBus = context.createGain();
  effectsBus.gain.value = 0.0001;

  musicBus.connect(masterBus);
  effectsBus.connect(masterBus);
  masterBus.connect(compressor);
  compressor.connect(context.destination);

  audioState.context = context;
  audioState.masterBus = masterBus;
  audioState.musicBus = musicBus;
  audioState.effectsBus = effectsBus;
  updateAudioToggles();

  return context;
}

function updateAudioToggles() {
  if (toggleSoundButton) {
    toggleSoundButton.classList.toggle("active", audioState.soundEnabled);
    toggleSoundButton.setAttribute("aria-pressed", audioState.soundEnabled ? "true" : "false");
  }

  if (toggleMusicButton) {
    toggleMusicButton.classList.toggle("active", audioState.musicEnabled);
    toggleMusicButton.setAttribute("aria-pressed", audioState.musicEnabled ? "true" : "false");
  }

  if (soundStatus) {
    soundStatus.textContent = audioState.soundEnabled ? AUDIO_LEVELS.on : AUDIO_LEVELS.off;
  }

  if (musicStatus) {
    musicStatus.textContent = audioState.musicEnabled ? AUDIO_LEVELS.on : AUDIO_LEVELS.off;
  }

  if (!audioState.context) return;

  const now = audioState.context.currentTime;

  if (audioState.effectsBus) {
    audioState.effectsBus.gain.cancelScheduledValues(now);
    audioState.effectsBus.gain.setTargetAtTime(audioState.soundEnabled ? 0.16 : 0.0001, now, 0.08);
  }

  if (audioState.musicBus) {
    audioState.musicBus.gain.cancelScheduledValues(now);
    audioState.musicBus.gain.setTargetAtTime(audioState.musicEnabled ? 0.42 : 0.0001, now, 0.22);
  }
}

function playTone(frequency, startTime, duration, options = {}) {
  const context = audioState.context;
  const destination = options.destination || audioState.musicBus;

  if (!context || !destination) return;

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const filter = context.createBiquadFilter();
  const attack = options.attack ?? 0.02;
  const release = options.release ?? 0.3;
  const volume = options.volume ?? 0.03;

  oscillator.type = options.type || "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  oscillator.detune.setValueAtTime(options.detune ?? 0, startTime);

  filter.type = options.filterType || "lowpass";
  filter.frequency.setValueAtTime(options.filterFrequency ?? 1600, startTime);
  filter.Q.setValueAtTime(options.filterQ ?? 0.8, startTime);

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(volume, startTime + attack);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration + release);

  oscillator.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + release + 0.05);
}

function scheduleAmbientBar() {
  if (!audioState.context || !audioState.musicEnabled) return;

  const step = ambientProgression[audioState.progressionIndex % ambientProgression.length];
  const start = audioState.context.currentTime + 0.05;

  playTone(step.bass, start, 0.78, {
    type: "triangle",
    volume: 0.095,
    attack: 0.02,
    release: 0.22,
    filterFrequency: 480,
  });

  step.chord.forEach((frequency, index) => {
    playTone(frequency, start + index * 0.06, 1.65, {
      type: index === 0 ? "triangle" : "sine",
      volume: 0.055 + index * 0.012,
      attack: 0.09,
      release: 0.68,
      filterFrequency: 1200 + index * 260,
      detune: index === 2 ? 4 : 0,
    });
  });

  playTone(step.sparkle, start + 0.55, 0.2, {
    type: "sine",
    volume: 0.022,
    attack: 0.01,
    release: 0.36,
    filterFrequency: 2600,
  });

  playTone(step.sparkle / 2, start + 1.2, 0.16, {
    type: "sine",
    volume: 0.016,
    attack: 0.01,
    release: 0.24,
    filterFrequency: 2200,
  });

  audioState.progressionIndex = (audioState.progressionIndex + 1) % ambientProgression.length;
}

function startAmbientMusic() {
  if (!audioState.context || audioState.musicRunning || !audioState.musicEnabled) return;

  scheduleAmbientBar();
  audioState.musicIntervalId = window.setInterval(() => {
    if (audioState.context?.state === "running" && audioState.musicEnabled) {
      scheduleAmbientBar();
    }
  }, 2200);
  audioState.musicRunning = true;
}

function stopAmbientMusic() {
  if (audioState.musicIntervalId) {
    window.clearInterval(audioState.musicIntervalId);
    audioState.musicIntervalId = null;
  }
  audioState.musicRunning = false;
}

async function ensureAudioReady() {
  const context = createAudioEngine();
  if (!context) return null;

  if (context.state !== "running") {
    try {
      await context.resume();
    } catch (error) {
      return context;
    }
  }

  updateAudioToggles();

  if (audioState.musicEnabled) {
    startAmbientMusic();
  }

  return context;
}

function isAudioActive() {
  return Boolean(audioState.context && audioState.context.state === "running");
}

async function startMusicIfNeeded() {
  if (!audioState.musicEnabled) {
    audioState.musicEnabled = true;
  }

  const context = await ensureAudioReady();

  if (!context || context.state !== "running") {
    updateAudioToggles();
    return false;
  }

  startAmbientMusic();
  updateAudioToggles();
  return true;
}

function queueUiBlip(frequency = 720, duration = 0.06) {
  if (!audioState.soundEnabled) return;

  ensureAudioReady()
    .then((context) => {
      if (!context || !audioState.soundEnabled) return;
      playTone(frequency, context.currentTime + 0.01, duration, {
        type: "square",
        volume: 0.012,
        attack: 0.005,
        release: 0.12,
        filterFrequency: 1900,
        destination: audioState.effectsBus,
      });
    })
    .catch(() => {});
}

function queueEffectPattern(pattern) {
  if (!audioState.soundEnabled) return;

  ensureAudioReady()
    .then((context) => {
      if (!context || !audioState.soundEnabled) return;
      const start = context.currentTime + 0.01;
      pattern.forEach((tone) => {
        playTone(tone.frequency, start + tone.delay, tone.duration, {
          type: tone.type || "sine",
          volume: tone.volume ?? 0.018,
          attack: tone.attack ?? 0.005,
          release: tone.release ?? 0.14,
          filterFrequency: tone.filterFrequency ?? 2200,
          destination: audioState.effectsBus,
        });
      });
    })
    .catch(() => {});
}

function queueSuccessSound() {
  queueEffectPattern([
    { frequency: 660, delay: 0, duration: 0.08, type: "triangle", volume: 0.02 },
    { frequency: 880, delay: 0.09, duration: 0.1, type: "triangle", volume: 0.022 },
    { frequency: 1108, delay: 0.2, duration: 0.12, type: "sine", volume: 0.024 },
  ]);
}

function queueErrorSound() {
  queueEffectPattern([
    { frequency: 220, delay: 0, duration: 0.1, type: "square", volume: 0.018, filterFrequency: 1400 },
    { frequency: 180, delay: 0.09, duration: 0.14, type: "square", volume: 0.02, filterFrequency: 1200 },
  ]);
}

function queueHintSound() {
  queueEffectPattern([
    { frequency: 520, delay: 0, duration: 0.07, type: "triangle", volume: 0.018 },
    { frequency: 740, delay: 0.08, duration: 0.09, type: "sine", volume: 0.02 },
  ]);
}

function queueTimerUpSound() {
  queueEffectPattern([
    { frequency: 380, delay: 0, duration: 0.08, type: "sawtooth", volume: 0.02, filterFrequency: 1300 },
    { frequency: 320, delay: 0.1, duration: 0.08, type: "sawtooth", volume: 0.02, filterFrequency: 1100 },
    { frequency: 260, delay: 0.2, duration: 0.12, type: "sawtooth", volume: 0.022, filterFrequency: 900 },
  ]);
}

function setupAudioControls() {
  updateAudioToggles();

  const unlockAudio = async () => {
    const started = await startMusicIfNeeded().catch(() => false);
    if (started) {
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("click", unlockAudio);
    }
  };

  if (!audioState.unlockBound) {
    document.addEventListener("pointerdown", unlockAudio);
    document.addEventListener("keydown", unlockAudio);
    document.addEventListener("click", unlockAudio);
    audioState.unlockBound = true;
  }

  window.setTimeout(() => {
    startMusicIfNeeded().catch(() => {});
  }, 250);

  if (toggleSoundButton) {
    toggleSoundButton.addEventListener("click", async () => {
      const enableSound = !audioState.soundEnabled;

      if (enableSound) {
        audioState.soundEnabled = true;
        await ensureAudioReady();
        updateAudioToggles();
        queueUiBlip(780, 0.07);
        return;
      }

      queueUiBlip(420, 0.05);
      window.setTimeout(() => {
        audioState.soundEnabled = false;
        updateAudioToggles();
      }, 70);
    });
  }

  if (toggleMusicButton) {
    toggleMusicButton.addEventListener("click", async () => {
      const shouldStartMusic = !audioState.musicEnabled || !isAudioActive() || !audioState.musicRunning;

      if (shouldStartMusic) {
        audioState.musicEnabled = true;
        const started = await startMusicIfNeeded();
        if (started) {
          queueUiBlip(860, 0.08);
        }
      } else {
        queueUiBlip(520, 0.06);
        audioState.musicEnabled = false;
        stopAmbientMusic();
        updateAudioToggles();
      }

      updateAudioToggles();
    });
  }
}

function normalizeAnswer(value) {
  return value.toString().trim().toLowerCase();
}

function addScore(points) {
  state.score += points;
  updateHud();
}

function addStar() {
  state.stars += 1;
  updateHud();
}

function updateFrontPagePreview() {
  const locale = texts[state.language];
  const previewName = state.playerName || playerNameInput.value.trim() || locale.profileFallback;
  const totalXp = 300;
  const xp = Math.min(totalXp, 120 + state.score * 6);
  const level = 1 + Math.floor((120 + state.score * 6) / totalXp);

  if (heroProfileName) {
    heroProfileName.textContent = previewName;
  }

  if (heroAvatarInitial) {
    heroAvatarInitial.textContent = previewName.charAt(0).toUpperCase();
  }

  if (heroLevelBadge) {
    heroLevelBadge.textContent = `Level ${level}`;
  }

  if (heroXpValue) {
    heroXpValue.textContent = `${xp} / ${totalXp}`;
  }

  if (heroXpFill) {
    heroXpFill.style.width = `${(xp / totalXp) * 100}%`;
  }

  if (frontScoreValue) {
    frontScoreValue.textContent = state.score;
  }

  if (frontCoinValue) {
    frontCoinValue.textContent = state.stars * 10;
  }
}

function renderHeroTitle(title) {
  const heroTitle = document.getElementById("heroTitle");
  if (!heroTitle) return;

  const safeTitle = (title || "CIRCLIX").trim();
  if (safeTitle.length <= 1) {
    heroTitle.textContent = safeTitle;
    return;
  }

  heroTitle.innerHTML = `<span class="hero-title-main">${safeTitle.slice(0, -1)}</span><span class="hero-title-accent">${safeTitle.slice(-1)}</span>`;
}

function getPreviewPlayerName() {
  return state.playerName || playerNameInput.value.trim() || texts[state.language].profileFallback;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildQuickPanelMarkup(panelName) {
  const locale = texts[state.language];
  const previewName = escapeHtml(getPreviewPlayerName());

  if (panelName === "guide") {
    return {
      label: locale.menuGuide,
      title: locale.quickGuideTitle,
      html: `
        <p>${locale.quickGuideIntro}</p>
        <ol class="hero-quick-list">
          <li>${locale.quickGuideStep1}</li>
          <li>${locale.quickGuideStep2}</li>
          <li>${locale.quickGuideStep3}</li>
          <li>${locale.quickGuideStep4}</li>
        </ol>
      `,
    };
  }

  if (panelName === "leaderboard") {
    const leaderboardRows = [
      { name: "Nova", score: 150, stars: 5 },
      { name: "Alya", score: 125, stars: 4 },
      { name: previewName, score: state.score, stars: state.stars, current: true },
      { name: "Iman", score: 80, stars: 3 },
    ]
      .sort((left, right) => right.score - left.score)
      .map((entry, index) => `
        <div class="hero-leader-row${entry.current ? " current" : ""}">
          <span class="hero-leader-rank">${index + 1}</span>
          <div class="hero-leader-meta">
            <strong>${entry.name}</strong>
            <span>${entry.stars} ★</span>
          </div>
          <div class="hero-leader-score">
            <strong>${entry.score}</strong>
            <span>${locale.scoreLabel}</span>
          </div>
        </div>
      `)
      .join("");

    return {
      label: locale.menuLeaderboard,
      title: locale.quickLeaderboardTitle,
      html: `
        <div class="hero-leaderboard">${leaderboardRows}</div>
        <p class="hero-quick-note">${locale.quickLeaderboardNote}</p>
      `,
    };
  }

  if (panelName === "about") {
    return {
      label: locale.menuAbout,
      title: locale.quickAboutTitle,
      html: `
        <p>${locale.quickAboutText1}</p>
        <p>${locale.quickAboutText2}</p>
      `,
    };
  }

  return {
    label: locale.menuExit,
    title: locale.quickExitTitle,
    html: `
      <p>${locale.quickExitText}</p>
      <div class="hero-quick-actions">
        <button class="hero-mini-action" id="heroQuickResetButton" type="button">${locale.quickExitAction}</button>
      </div>
    `,
  };
}

function openQuickPanel(panelName) {
  if (!heroQuickPanel || !heroQuickPanelLabel || !heroQuickPanelTitle || !heroQuickPanelContent) return;

  const panel = buildQuickPanelMarkup(panelName);
  state.quickPanel = panelName;
  heroQuickPanel.hidden = false;
  heroQuickPanelLabel.textContent = panel.label;
  heroQuickPanelTitle.textContent = panel.title;
  heroQuickPanelContent.innerHTML = panel.html;
  closeHeroQuickPanel?.focus();
}

function closeQuickPanel() {
  if (!heroQuickPanel) return;
  heroQuickPanel.hidden = true;
  state.quickPanel = "";
}

function resetStartPanel() {
  playerNameInput.value = "";
  playerEmailInput.value = "";
  state.playerName = "";
  state.playerEmail = "";
  formFeedback.textContent = "";
  formFeedback.className = "feedback";
  formNote.textContent = texts[state.language].formNote;
  updateFrontPagePreview();
  playerNameInput.focus();
}

function updateHud() {
  scoreValue.textContent = state.score;
  starValue.textContent = `${state.stars} / 5`;
  const order = ["start", "map", "terms", "crossword", "mystery", "dragdrop", "mathopoly", "finish"];
  const index = order.indexOf(state.currentScreen);
  progressFill.style.width = `${Math.max(0, (index / (order.length - 1)) * 100)}%`;
  updateFrontPagePreview();
}

function updateStartScreenLanguage(lang) {
  state.language = lang;
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  const locale = texts[lang];
  document.getElementById("heroKicker").textContent = locale.kicker;
  const heroTopicLine = document.getElementById("heroTopicLine");
  const heroTopicLevel = document.getElementById("heroTopicLevel");
  if (heroTopicLine) {
    heroTopicLine.textContent = locale.topicLine;
  }
  if (heroTopicLevel) {
    heroTopicLevel.textContent = locale.topicLevel;
  }
  renderHeroTitle(locale.title);
  if (heroSubtitleLead) {
    heroSubtitleLead.textContent = locale.subtitleLead;
  }
  document.getElementById("heroSubtitle").textContent = locale.subtitle;
  document.getElementById("nameLabel").textContent = locale.nameLabel;
  document.getElementById("emailLabel").textContent = locale.emailLabel;
  playerNameInput.placeholder = locale.namePlaceholder;
  playerEmailInput.placeholder = locale.emailPlaceholder;
  const startButtonText = document.getElementById("startButtonText");
  if (startButtonText) {
    startButtonText.textContent = locale.startButton;
  } else {
    startGameButton.textContent = locale.startButton;
  }
  const startCopyIds = {
    soundLabel: locale.soundLabel,
    musicLabel: locale.musicLabel,
    achievementLabel: locale.achievementLabel,
    profileLabel: locale.profileLabel,
    heroBubbleText: locale.bubbleText,
    menuGuideText: locale.menuGuide,
    menuLeaderboardText: locale.menuLeaderboard,
    menuAboutText: locale.menuAbout,
    menuExitText: locale.menuExit,
    scoreStatLabel: locale.scoreLabel,
    coinStatLabel: locale.coinLabel,
    featureInteractiveTitle: locale.featureInteractiveTitle,
    featureInteractiveText: locale.featureInteractiveText,
    featureUnderstandTitle: locale.featureUnderstandTitle,
    featureUnderstandText: locale.featureUnderstandText,
    featureWinTitle: locale.featureWinTitle,
    featureWinText: locale.featureWinText,
    featureLevelTitle: locale.featureLevelTitle,
    featureLevelText: locale.featureLevelText,
    noteFactLabel: locale.noteFactLabel,
    noteHoloPill: locale.noteHoloPill,
    noteClickHint: locale.noteClickHint,
    mindmapPopupLabel: locale.notePopupLabel,
    formulaGlowLabel: locale.formulaGlowLabel,
  };
  Object.entries(startCopyIds).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value;
    }
  });
  const mapCopyIds = {
    mapSectionTag: locale.mapSectionTag,
    mapHeading: locale.mapHeading,
    mapDescription: locale.mapDescription,
    mapNoteTitle: locale.mapNoteTitle,
    mapNoteText: locale.mapNoteText,
    mapCrosswordTitle: locale.mapCrosswordTitle,
    mapCrosswordText: locale.mapCrosswordText,
    mapMysteryTitle: locale.mapMysteryTitle,
    mapMysteryText: locale.mapMysteryText,
    mapDragTitle: locale.mapDragTitle,
    mapDragText: locale.mapDragText,
    mapBoardTitle: locale.mapBoardTitle,
    mapBoardText: locale.mapBoardText,
    mapBackBtn: locale.mapBackButton,
    mapBeginBtn: locale.mapBeginButton,
  };
  Object.entries(mapCopyIds).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value;
    }
  });
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const key = btn.dataset.i18n;
    if (key === "tabNota") btn.textContent = locale.tabNota;
    if (key === "tabCrossword") btn.textContent = locale.tabCrossword;
    if (key === "tabMystery") btn.textContent = locale.tabMystery;
    if (key === "tabDrag") btn.textContent = locale.tabDrag;
    if (key === "tabBoard") btn.textContent = locale.tabBoard;
  });
  const termsHeroKicker = document.getElementById("termsHeroKicker");
  const termsHeroTitle = document.getElementById("termsHeroTitle");
  const termsHeroSubtitle = document.getElementById("termsHeroSubtitle");
  if (termsHeroKicker) {
    termsHeroKicker.textContent = locale.termsHeroKicker;
  }
  if (termsHeroTitle) {
    termsHeroTitle.textContent = locale.termsHeroTitle;
  }
  if (termsHeroSubtitle) {
    termsHeroSubtitle.textContent = locale.termsHeroSubtitle;
  }
  if (noteSpeakButton) {
    noteSpeakButton.textContent = locale.noteAudioPlay;
  }
  if (noteStopAudioButton) {
    noteStopAudioButton.textContent = locale.noteAudioStop;
  }
  formNote.textContent = locale.formNote;
  formFeedback.textContent = "";
  formFeedback.className = "feedback";
  updateFrontPagePreview();
  if (state.quickPanel) {
    openQuickPanel(state.quickPanel);
  }
  // Update current screen texts if not start
  if (state.currentScreen !== "start") {
    updateScreenTexts(state.currentScreen);
  }
}

function hasValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showFormError(message) {
  formFeedback.textContent = message;
  formFeedback.className = "feedback show error";
}

function handleStartButton() {
  const name = playerNameInput.value.trim();
  const email = playerEmailInput.value.trim();

  if (!name) {
    showFormError(texts[state.language].missingName);
    return;
  }

  if (!email || !hasValidEmail(email)) {
    showFormError(texts[state.language].invalidEmail);
    return;
  }

  state.playerName = name;
  state.playerEmail = email;
  const welcomeText = texts[state.language].welcome.replace("{name}", name);
  formNote.textContent = welcomeText;
  formFeedback.textContent = "";
  formFeedback.className = "feedback";
  closeQuickPanel();
  showScreen("map");
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    queueUiBlip(760, 0.06);
    updateStartScreenLanguage(button.dataset.lang);
  });
});

playerNameInput.addEventListener("input", updateFrontPagePreview);

startGameButton.addEventListener("click", () => {
  queueUiBlip(680, 0.07);
  handleStartButton();
});

quickPanelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    queueUiBlip(720, 0.06);
    openQuickPanel(button.dataset.quickPanel);
  });
});

if (heroQuickPanelContent) {
  heroQuickPanelContent.addEventListener("click", (event) => {
    const resetButton = event.target.closest("#heroQuickResetButton");
    if (!resetButton) return;
    queueUiBlip(520, 0.05);
    resetStartPanel();
    closeQuickPanel();
  });
}

if (closeHeroQuickPanel) {
  closeHeroQuickPanel.addEventListener("click", () => {
    queueUiBlip(420, 0.05);
    closeQuickPanel();
  });
}

if (heroQuickPanelBackdrop) {
  heroQuickPanelBackdrop.addEventListener("click", closeQuickPanel);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && heroQuickPanel && !heroQuickPanel.hidden) {
    closeQuickPanel();
  }
});

updateStartScreenLanguage(state.language);
setupAudioControls();
document.body.classList.toggle("screen-start", state.currentScreen === "start");
updateHud();

function showFeedback(el, type, text) {
  el.textContent = text;
  el.className = `feedback show ${type}`;
}

function updateScreenTexts(name) {
  const locale = texts[state.language];
  if (name === "map") {
    document.getElementById("mapSectionTag").textContent = locale.mapSectionTag;
    document.getElementById("mapHeading").textContent = locale.mapHeading;
    document.getElementById("mapDescription").textContent = locale.mapDescription;
  }
  if (name === "terms") {
    const termsHeroKicker = document.getElementById("termsHeroKicker");
    const termsHeroTitle = document.getElementById("termsHeroTitle");
    const termsHeroSubtitle = document.getElementById("termsHeroSubtitle");
    if (termsHeroKicker) {
      termsHeroKicker.textContent = locale.termsHeroKicker;
    }
    if (termsHeroTitle) {
      termsHeroTitle.textContent = locale.termsHeroTitle;
    }
    if (termsHeroSubtitle) {
      termsHeroSubtitle.textContent = locale.termsHeroSubtitle;
    }
    document.getElementById("noteSectionTag").textContent = locale.noteSectionTag;
    document.getElementById("noteHeading").textContent = locale.noteHeading;
    document.getElementById("noteDescription").textContent = locale.noteDescription;
    document.getElementById("termsPrevBtn").textContent = locale.termsPrev;
    document.getElementById("termsNextBtn").textContent = locale.termsNext;
    if (noteSpeakButton) {
      noteSpeakButton.textContent = locale.noteAudioPlay;
    }
    if (noteStopAudioButton) {
      noteStopAudioButton.textContent = locale.noteAudioStop;
    }
    if (noteFactLabel) {
      noteFactLabel.textContent = locale.noteFactLabel;
    }
    if (noteHoloPill) {
      noteHoloPill.textContent = locale.noteHoloPill;
    }
    if (noteClickHint) {
      noteClickHint.textContent = locale.noteClickHint;
    }
    if (mindmapPopupLabel) {
      mindmapPopupLabel.textContent = locale.notePopupLabel;
    }
    if (formulaGlowLabel) {
      formulaGlowLabel.textContent = locale.formulaGlowLabel;
    }
    const activeConcept = document.querySelector(".concept-note.active");
    if (activeConcept?.dataset.term) {
      updateMindmapDetail(activeConcept.dataset.term);
    }
    if (noteBeforeCrossword) {
      noteBeforeCrossword.textContent = locale.termsReminder;
    }
  }
  if (name === "crossword") {
    document.getElementById("crosswordSectionTag").textContent = locale.crosswordSectionTag;
    document.getElementById("crosswordHeading").textContent = locale.crosswordHeading;
    document.getElementById("crosswordDescription").textContent = locale.crosswordDescription;
    document.getElementById("clueHeading").textContent = locale.clueHeading;
    document.getElementById("acrossLabel").textContent = locale.acrossLabel;
    document.getElementById("downLabel").textContent = locale.downLabel;
    document.getElementById("checkCrossword").textContent = locale.checkCrossword;
    document.getElementById("hintCrossword").textContent = locale.hintCrossword;
    document.getElementById("crosswordPrevBtn").textContent = locale.termsPrev;
    document.getElementById("crosswordNextBtn").textContent = locale.termsNext;
    updateCrosswordHud();
  }
  if (name === "dragdrop") {
    document.getElementById("dragSectionTag").textContent = locale.dragSectionTag;
    document.getElementById("dragHeading").textContent = locale.dragHeading;
    document.getElementById("dragDescription").textContent = locale.dragDescription;
    document.getElementById("resetDrag").textContent = locale.resetDrag;
    document.getElementById("checkDrag").textContent = locale.checkDrag;
    document.getElementById("dragPrevBtn").textContent = locale.dragPrev;
    document.getElementById("dragNextBtn").textContent = locale.dragNext;
  }
  if (name === "mathopoly") {
    document.getElementById("mathopolySectionTag").textContent = locale.mathopolySectionTag;
    document.getElementById("mathopolyHeading").textContent = locale.mathopolyHeading;
    document.getElementById("mathopolyDescription").textContent = locale.mathopolyDescription;
    document.getElementById("playerLabel").textContent = locale.playerLabel;
    document.getElementById("rollDice").textContent = locale.rollDiceButton;
    document.getElementById("challengeHeading").textContent = locale.challengeHeading;
    document.getElementById("boardPrompt").textContent = locale.boardPrompt;
    document.getElementById("boardAnswer").placeholder = locale.boardAnswerPlaceholder;
    document.getElementById("submitBoardAnswer").textContent = locale.submitBoardAnswer;
    document.getElementById("mathopolyPrevBtn").textContent = locale.mathopolyPrev;
    document.getElementById("mathopolyFinishBtn").textContent = locale.mathopolyFinish;
  }
  if (name === "mystery") {
    document.getElementById("mysterySectionTag").textContent = locale.mysterySectionTag;
    document.getElementById("mysteryHeading").textContent = locale.mysteryHeading;
    document.getElementById("mysteryDescription").textContent = locale.mysteryDescription;
    document.getElementById("riddleHeading").textContent = locale.riddleHeading;
    renderMysteryCards();
    document.getElementById("mysteryPrevBtn").textContent = locale.dragPrev;
    document.getElementById("mysteryNextBtn").textContent = locale.dragNext;
  }
  if (name === "detective") {
    document.getElementById("detectiveSectionTag").textContent = locale.detectiveSectionTag;
    document.getElementById("detectiveHeading").textContent = locale.detectiveHeading;
    document.getElementById("detectiveDescription").textContent = locale.detectiveDescription;
    document.getElementById("submitDetective").textContent = locale.submitDetective;
  }
  if (name === "board_enhanced") {
    document.getElementById("boardEnhancedSectionTag").textContent = locale.boardEnhancedSectionTag;
    document.getElementById("boardEnhancedHeading").textContent = locale.boardEnhancedHeading;
    document.getElementById("boardEnhancedDescription").textContent = locale.boardEnhancedDescription;
    document.getElementById("rollDiceEnhanced").textContent = locale.rollDiceEnhanced;
  }
  if (name === "user_view") {
    document.getElementById("userViewSectionTag").textContent = locale.userViewSectionTag;
    document.getElementById("userViewHeading").textContent = locale.userViewHeading;
    document.getElementById("userViewDescription").textContent = locale.userViewDescription;
  }
  if (name === "finish") {
    document.getElementById("finishSectionTag").textContent = locale.finishSectionTag;
    document.getElementById("finishHeading").textContent = locale.finishHeading;
    document.getElementById("finishDescription").textContent = locale.finishDescription;
    document.getElementById("restartGame").textContent = locale.restartButton;
  }
}

function getTermsNavTarget(screen) {
  if (["terms", "crossword", "mystery", "dragdrop", "mathopoly"].includes(screen)) {
    return screen;
  }
  return "";
}

function updateTermsNavState(screen) {
  const activeTarget = getTermsNavTarget(screen);
  termsNavButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.screenTarget === activeTarget);
  });
}

function getNoteFact(termKey) {
  return noteFacts[state.language]?.[termKey] || noteFacts.bm[termKey] || "";
}

function stopNoteAudio() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  noteSpeechState.utterance = null;
}

function speakCurrentNoteDetail() {
  if (!("speechSynthesis" in window) || !mindmapDetailTitle || !mindmapDetailText) return;

  stopNoteAudio();

  const utterance = new SpeechSynthesisUtterance(
    `${mindmapDetailTitle.textContent}. ${mindmapDetailText.textContent} ${noteFactText?.textContent || ""}`,
  );
  utterance.lang = state.language === "en" ? "en-US" : "ms-MY";
  utterance.rate = 0.95;
  utterance.pitch = 1.03;
  utterance.onend = () => {
    noteSpeechState.utterance = null;
  };

  noteSpeechState.utterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function updateMindmapDetail(termKey) {
  if (!mindmapDetailTitle || !mindmapDetailText || !mindmapDetailVisual) return;
  const info = terms[termKey];
  if (!info) return;

  mindmapDetailTitle.textContent = info.title;
  mindmapDetailText.textContent = info.text;
  mindmapDetailVisual.innerHTML = info.svg || "";
  if (noteFactText) {
    noteFactText.textContent = getNoteFact(termKey);
  }

  conceptTermButtons.forEach((button) => {
    const isActive = button.dataset.term === termKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (!state.viewedTerms.has(termKey)) {
    state.viewedTerms.add(termKey);
    addScore(5);
    if (state.viewedTerms.size === Object.keys(terms).length) {
      addStar();
    }
  }
}

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });
  state.currentScreen = name;
  document.body.classList.toggle("screen-start", name === "start");
  if (name !== "terms") {
    stopNoteAudio();
  }
  if (name === "crossword") {
    startCrosswordTimer();
  } else {
    stopCrosswordTimer();
  }
  updateHud();
  updateScreenTexts(name);
  updateTermsNavState(name);
  if (name === "detective") {
    buildDetective();
  }
  if (name === "user_view") {
    updateUserView();
  }
  if (name === "finish") {
    finalScore.textContent = state.score;
    finalStars.textContent = `${state.stars} / 5`;
  }
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

termsNavButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.screenTarget));
});

if (definitionTitle && definitionText && definitionVisual && termBubbles.length > 0) {
  termBubbles.forEach((bubble) => {
    bubble.addEventListener("click", () => {
      const term = bubble.dataset.term;
      const info = terms[term];
      definitionTitle.textContent = info.title;
      definitionText.textContent = info.text;
      definitionVisual.innerHTML = info.svg || "";
      termBubbles.forEach((item) => item.classList.remove("active"));
      bubble.classList.add("active");
      if (!state.viewedTerms.has(term)) {
        state.viewedTerms.add(term);
        addScore(5);
        if (state.viewedTerms.size === Object.keys(terms).length) {
          addStar();
        }
      }
    });
  });
}

if (conceptTermButtons.length > 0) {
  conceptTermButtons.forEach((button) => {
    button.addEventListener("click", () => updateMindmapDetail(button.dataset.term));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        updateMindmapDetail(button.dataset.term);
      }
    });
  });

  updateMindmapDetail("jejari");
}

if (noteSpeakButton) {
  if (!("speechSynthesis" in window)) {
    noteSpeakButton.disabled = true;
    noteStopAudioButton.disabled = true;
  } else {
    noteSpeakButton.addEventListener("click", () => {
      queueUiBlip(820, 0.06);
      speakCurrentNoteDetail();
    });
    noteStopAudioButton.addEventListener("click", () => {
      queueUiBlip(460, 0.05);
      stopNoteAudio();
    });
  }
}

function getCrosswordClueText(entry) {
  if (entry.id === "6D") {
    return "Lengkok kurang daripada 180 darjah.";
  }
  return entry.clue;
}

function formatCrosswordTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function getCrosswordTimeBonus() {
  return Math.floor(Math.max(0, crosswordState.secondsLeft) / CROSSWORD_TIME_BONUS_DIVISOR);
}

function getCrosswordHintBonus() {
  return crosswordState.hintsRemaining * CROSSWORD_HINT_BONUS;
}

function getCrosswordBonusPoints() {
  return getCrosswordTimeBonus() + getCrosswordHintBonus();
}

function getCrosswordStatusCopy() {
  const locale = texts[state.language];
  if (state.crosswordSolved) {
    return locale.crosswordStatusSolved;
  }
  if (crosswordState.expired) {
    return locale.crosswordStatusTimeUp;
  }
  if (crosswordState.timerId) {
    return locale.crosswordStatusRunning;
  }
  return locale.crosswordStatusReady;
}

function updateCrosswordHud() {
  const locale = texts[state.language];

  if (crosswordTimerLabel) {
    crosswordTimerLabel.textContent = locale.crosswordTimerLabel;
  }
  if (crosswordHintLabel) {
    crosswordHintLabel.textContent = locale.crosswordHintLabel;
  }
  if (crosswordBonusLabel) {
    crosswordBonusLabel.textContent = locale.crosswordBonusLabel;
  }
  if (crosswordTimerValue) {
    crosswordTimerValue.textContent = formatCrosswordTime(crosswordState.secondsLeft);
  }
  if (crosswordHintValue) {
    crosswordHintValue.textContent = `${crosswordState.hintsRemaining}`;
  }
  if (crosswordBonusValue) {
    crosswordBonusValue.textContent = `+${getCrosswordBonusPoints()}`;
  }
  if (crosswordStatusText) {
    crosswordStatusText.textContent = getCrosswordStatusCopy();
    crosswordStatusText.classList.toggle("expired", crosswordState.expired && !state.crosswordSolved);
    crosswordStatusText.classList.toggle("solved", state.crosswordSolved);
  }

  const hintButton = document.getElementById("hintCrossword");
  if (hintButton) {
    hintButton.disabled = state.crosswordSolved || crosswordState.hintsRemaining <= 0;
  }
}

function stopCrosswordTimer() {
  if (crosswordState.timerId) {
    window.clearInterval(crosswordState.timerId);
    crosswordState.timerId = 0;
  }
  updateCrosswordHud();
}

function handleCrosswordTimeExpired() {
  crosswordState.secondsLeft = 0;
  crosswordState.expired = true;
  stopCrosswordTimer();
  queueTimerUpSound();
  showFeedback(crosswordFeedback, "warning", texts[state.language].crosswordTimeUpMessage);
}

function startCrosswordTimer() {
  if (state.currentScreen !== "crossword" || state.crosswordSolved || crosswordState.expired || crosswordState.timerId) {
    updateCrosswordHud();
    return;
  }

  crosswordState.timerId = window.setInterval(() => {
    if (crosswordState.secondsLeft <= 1) {
      handleCrosswordTimeExpired();
      return;
    }

    crosswordState.secondsLeft -= 1;
    updateCrosswordHud();
  }, 1000);

  updateCrosswordHud();
}

function getCrosswordUnresolvedKeys() {
  return crosswordState.editableKeys.filter((key) => {
    const input = crosswordState.inputs.get(key);
    const cell = crosswordState.cells.get(key);
    return input && cell && normalizeAnswer(input.value) !== normalizeAnswer(cell.solution);
  });
}

function getCrosswordHintTarget() {
  const activeKey = state.activeCrosswordKey;
  if (activeKey) {
    const activeInput = crosswordState.inputs.get(activeKey);
    const activeCell = crosswordState.cells.get(activeKey);
    if (
      activeInput &&
      activeCell &&
      !activeInput.readOnly &&
      normalizeAnswer(activeInput.value) !== normalizeAnswer(activeCell.solution)
    ) {
      return activeKey;
    }
  }

  const unresolvedKeys = getCrosswordUnresolvedKeys();
  const emptyKeys = unresolvedKeys.filter((key) => !crosswordState.inputs.get(key)?.value);
  const pool = emptyKeys.length > 0 ? emptyKeys : unresolvedKeys;
  if (pool.length === 0) {
    return "";
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function updateCrosswordClueHighlights() {
  crosswordState.clueElements.forEach((element) => {
    element.classList.remove("active", "active-secondary");
  });

  const activeCell = crosswordState.cells.get(state.activeCrosswordKey);
  if (!activeCell) {
    return;
  }

  const primaryEntry = activeCell.entries[state.crosswordDirection]?.entryId;
  const secondaryDirection = state.crosswordDirection === "across" ? "down" : "across";
  const secondaryEntry = activeCell.entries[secondaryDirection]?.entryId;

  if (primaryEntry) {
    crosswordState.clueElements.get(primaryEntry)?.classList.add("active");
  }
  if (secondaryEntry && secondaryEntry !== primaryEntry) {
    crosswordState.clueElements.get(secondaryEntry)?.classList.add("active-secondary");
  }
}

function buildCrossword() {
  crosswordBoard.innerHTML = "";
  acrossClueList.innerHTML = "";
  downClueList.innerHTML = "";

  const cells = new Map();
  const entryKeys = new Map();
  const clueElements = new Map();
  let maxRow = 0;
  let maxCol = 0;

  crosswordEntries.forEach((entry) => {
    const keys = [];
    entry.answer.toUpperCase().split("").forEach((letter, index) => {
      const row = entry.row + (entry.dir === "down" ? index : 0);
      const col = entry.col + (entry.dir === "across" ? index : 0);
      const key = `${row}-${col}`;

      maxRow = Math.max(maxRow, row);
      maxCol = Math.max(maxCol, col);

      if (cells.has(key)) {
        const existing = cells.get(key);
        if (existing.solution !== letter) {
          throw new Error(`Silang kata mempunyai konflik huruf pada petak ${key}.`);
        }

        existing.entries[entry.dir] = { entryId: entry.id, index };
        if ((entry.hints || []).includes(index)) {
          existing.prefilled = true;
        }
      } else {
        cells.set(key, {
          row,
          col,
          number: null,
          solution: letter,
          prefilled: (entry.hints || []).includes(index),
          entries: {
            [entry.dir]: { entryId: entry.id, index },
          },
        });
      }
      keys.push(key);
    });
    entryKeys.set(entry.id, keys);
  });

  crosswordEntries.forEach((entry) => {
    const key = `${entry.row}-${entry.col}`;
    if (cells.has(key) && cells.get(key).number === null) {
      cells.get(key).number = entry.number;
    }
  });

  crosswordBoard.style.gridTemplateColumns = `repeat(${maxCol + 1}, ${CROSSWORD_CELL_SIZE}px)`;
  crosswordBoard.style.gridTemplateRows = `repeat(${maxRow + 1}, ${CROSSWORD_CELL_SIZE}px)`;

  const inputs = new Map();
  const editableKeys = [];

  for (let row = 0; row <= maxRow; row += 1) {
    for (let col = 0; col <= maxCol; col += 1) {
      const key = `${row}-${col}`;
      const cell = document.createElement("div");
      cell.className = "cell";
      if (!cells.has(key)) {
        cell.classList.add("block");
      } else {
        const cellData = cells.get(key);
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.autocomplete = "off";
        input.spellcheck = false;
        input.inputMode = "text";
        input.dataset.key = key;

        if (cellData.prefilled) {
          input.value = cellData.solution;
          input.readOnly = true;
          input.tabIndex = -1;
          input.classList.add("prefilled");
        } else {
          editableKeys.push(key);
          input.addEventListener("focus", handleCrosswordFocus);
          input.addEventListener("click", handleCrosswordFocus);
          input.addEventListener("input", handleCrosswordInput);
          input.addEventListener("keydown", handleCrosswordKeydown);
        }

        if (cellData.number) {
          const number = document.createElement("span");
          number.className = "cell-number";
          number.textContent = cellData.number;
          cell.appendChild(number);
        }
        cell.appendChild(input);
        inputs.set(key, input);
      }
      crosswordBoard.appendChild(cell);
    }
  }

  crosswordEntries
    .filter((entry) => entry.dir === "across")
    .forEach((entry) => {
      const li = document.createElement("li");
      li.className = "clue-item";
      li.value = entry.number;
      li.textContent = getCrosswordClueText(entry);
      acrossClueList.appendChild(li);
      clueElements.set(entry.id, li);
    });

  crosswordEntries
    .filter((entry) => entry.dir === "down")
    .forEach((entry) => {
      const li = document.createElement("li");
      li.className = "clue-item";
      li.value = entry.number;
      li.textContent = getCrosswordClueText(entry);
      downClueList.appendChild(li);
      clueElements.set(entry.id, li);
    });

  crosswordState.cells = cells;
  crosswordState.inputs = inputs;
  crosswordState.entryKeys = entryKeys;
  crosswordState.clueElements = clueElements;
  crosswordState.editableKeys = editableKeys;
  crosswordState.secondsLeft = CROSSWORD_TIME_LIMIT;
  crosswordState.hintsRemaining = CROSSWORD_MAX_HINTS;
  crosswordState.hintsUsed = 0;
  crosswordState.expired = false;
  stopCrosswordTimer();
  state.activeCrosswordKey = editableKeys[0] || "";
  state.crosswordDirection = "across";
  updateCrosswordClueHighlights();
  updateCrosswordHud();
}

buildCrossword();

function getCrosswordDirection(key) {
  const cell = crosswordState.cells.get(key);
  if (!cell) {
    return "across";
  }

  if (cell.entries[state.crosswordDirection]) {
    return state.crosswordDirection;
  }

  if (cell.entries.across) {
    return "across";
  }

  return "down";
}

function setCrosswordActive(key, direction = getCrosswordDirection(key)) {
  state.activeCrosswordKey = key;
  state.crosswordDirection = direction;
  updateCrosswordClueHighlights();
}

function focusCrosswordInput(key, direction = getCrosswordDirection(key)) {
  const input = crosswordState.inputs.get(key);
  if (!input) {
    return;
  }

  setCrosswordActive(key, direction);
  input.focus();
  input.select();
}

function getCrosswordAdjacentKey(key, direction, step) {
  const cell = crosswordState.cells.get(key);
  if (!cell || !cell.entries[direction]) {
    return "";
  }

  const { entryId, index } = cell.entries[direction];
  const keys = crosswordState.entryKeys.get(entryId) || [];
  let nextIndex = index + step;

  while (nextIndex >= 0 && nextIndex < keys.length) {
    const nextKey = keys[nextIndex];
    const nextCell = crosswordState.cells.get(nextKey);
    if (nextCell && !nextCell.prefilled) {
      return nextKey;
    }
    nextIndex += step;
  }

  return "";
}

function clearCrosswordFeedback() {
  crosswordFeedback.className = "feedback";
  crosswordFeedback.textContent = "";
}

function handleCrosswordFocus(event) {
  const key = event.currentTarget.dataset.key;
  setCrosswordActive(key, getCrosswordDirection(key));
  startCrosswordTimer();
  event.currentTarget.select();
}

function handleCrosswordInput(event) {
  const input = event.currentTarget;
  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);
  input.classList.remove("correct", "incorrect");

  if (!input.value) {
    return;
  }

  clearCrosswordFeedback();

  const key = input.dataset.key;
  const direction = getCrosswordDirection(key);
  const nextKey = getCrosswordAdjacentKey(key, direction, 1);

  if (nextKey) {
    focusCrosswordInput(nextKey, direction);
  }
}

function handleCrosswordKeydown(event) {
  const input = event.currentTarget;
  const key = input.dataset.key;
  const direction = getCrosswordDirection(key);

  if (event.key === "Backspace") {
    event.preventDefault();
    clearCrosswordFeedback();

    if (input.value) {
      input.value = "";
      return;
    }

    const previousKey = getCrosswordAdjacentKey(key, direction, -1);
    if (previousKey) {
      const previousInput = crosswordState.inputs.get(previousKey);
      previousInput.value = "";
      focusCrosswordInput(previousKey, direction);
    }
    return;
  }

  if (event.key === "Delete") {
    event.preventDefault();
    clearCrosswordFeedback();
    input.value = "";
    return;
  }

  const arrowMap = {
    ArrowRight: { direction: "across", step: 1 },
    ArrowLeft: { direction: "across", step: -1 },
    ArrowDown: { direction: "down", step: 1 },
    ArrowUp: { direction: "down", step: -1 },
  };

  if (arrowMap[event.key]) {
    event.preventDefault();
    const move = arrowMap[event.key];
    const nextKey = getCrosswordAdjacentKey(key, move.direction, move.step);
    if (nextKey) {
      focusCrosswordInput(nextKey, move.direction);
    } else {
      setCrosswordActive(key, move.direction);
    }
  }
}

document.getElementById("checkCrossword").addEventListener("click", () => {
  const locale = texts[state.language];

  if (state.crosswordSolved) {
    queueUiBlip(740, 0.05);
    showFeedback(crosswordFeedback, "info", locale.crosswordSolvedRepeat);
    return;
  }

  let correct = 0;
  const total = crosswordState.editableKeys.length;

  crosswordState.editableKeys.forEach((key) => {
    const input = crosswordState.inputs.get(key);
    const solution = crosswordState.cells.get(key).solution;
    input.classList.remove("correct", "incorrect");
    if (normalizeAnswer(input.value) === normalizeAnswer(solution)) {
      correct += 1;
      input.classList.add("correct");
    } else {
      input.classList.add("incorrect");
    }
  });

  if (correct === total) {
    if (!state.crosswordSolved) {
      state.crosswordSolved = true;
      stopCrosswordTimer();
      const bonus = getCrosswordBonusPoints();
      const totalScore = CROSSWORD_BASE_SCORE + bonus;
      addScore(totalScore);
      addStar();
    }
    queueSuccessSound();
    showFeedback(
      crosswordFeedback,
      "success",
      locale.crosswordSolvedMessage
        .replace("{total}", `${CROSSWORD_BASE_SCORE + getCrosswordBonusPoints()}`)
        .replace("{base}", `${CROSSWORD_BASE_SCORE}`)
        .replace("{bonus}", `${getCrosswordBonusPoints()}`),
    );
  } else {
    queueErrorSound();
    showFeedback(
      crosswordFeedback,
      "error",
      locale.crosswordIncompleteMessage.replace("{count}", `${total - correct}`),
    );
  }

  updateCrosswordHud();
});

document.getElementById("hintCrossword").addEventListener("click", () => {
  const locale = texts[state.language];

  if (state.crosswordSolved) {
    showFeedback(crosswordFeedback, "info", locale.crosswordSolvedRepeat);
    return;
  }

  if (crosswordState.hintsRemaining <= 0) {
    queueErrorSound();
    showFeedback(crosswordFeedback, "warning", locale.crosswordHintExhausted);
    return;
  }

  const targetKey = getCrosswordHintTarget();
  if (!targetKey) {
    queueUiBlip(620, 0.05);
    showFeedback(crosswordFeedback, "info", locale.crosswordHintNotNeeded);
    return;
  }

  const input = crosswordState.inputs.get(targetKey);
  const cell = crosswordState.cells.get(targetKey);
  if (!input || !cell) {
    return;
  }

  crosswordState.hintsRemaining -= 1;
  crosswordState.hintsUsed += 1;
  input.value = cell.solution;
  input.readOnly = true;
  input.tabIndex = -1;
  input.classList.remove("correct", "incorrect");
  input.classList.add("hinted");
  cell.prefilled = true;

  queueHintSound();
  showFeedback(crosswordFeedback, "info", locale.crosswordHintApplied);
  updateCrosswordHud();

  const nextKey = getCrosswordUnresolvedKeys()[0];
  if (nextKey) {
    focusCrosswordInput(nextKey);
  }
});

function buildLabels() {
  labelBank.innerHTML = "";
  dragLabels.forEach((label) => {
    const div = document.createElement("div");
    div.className = "draggable-label";
    div.draggable = true;
    div.dataset.label = label.toLowerCase();
    div.textContent = label;
    div.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", div.dataset.label);
    });
    labelBank.appendChild(div);
  });
}

function attachZones() {
  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.textContent = "";
    zone.dataset.value = "";
    zone.classList.remove("filled");
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const label = event.dataTransfer.getData("text/plain");
      const source = [...document.querySelectorAll(".draggable-label")].find((item) => item.dataset.label === label);
      if (!source) return;
      zone.textContent = source.textContent;
      zone.dataset.value = label;
      zone.classList.add("filled");
      source.remove();
    });
  });
}

buildLabels();
attachZones();

document.getElementById("resetDrag").addEventListener("click", () => {
  buildLabels();
  attachZones();
  dragFeedback.className = "feedback";
  dragFeedback.textContent = "";
});

document.getElementById("checkDrag").addEventListener("click", () => {
  const zones = [...document.querySelectorAll(".drop-zone")];
  const correct = zones.filter((zone) => zone.dataset.value === zone.dataset.accept).length;
  if (correct === zones.length) {
    if (!state.dragSolved) {
      state.dragSolved = true;
      addScore(100);
      addStar();
    }
    showFeedback(dragFeedback, "success", "Semua label tepat.");
  } else {
    showFeedback(dragFeedback, "error", "Masih ada label yang belum betul.");
  }
});

function buildBoard() {
  boardTiles.forEach((tile, index) => {
    const div = document.createElement("div");
    div.className = "board-tile";
    div.dataset.index = index;
    div.innerHTML = `<span>Petak ${index + 1}</span><strong>${tile.title}</strong>`;
    boardGrid.appendChild(div);
  });
  updateBoard();
}

function updateBoard() {
  document.querySelectorAll(".board-tile").forEach((tile, index) => {
    tile.classList.toggle("current", index === state.boardPosition);
  });
  playerPosition.textContent = `Petak ${state.boardPosition + 1} / ${boardTiles.length}`;
}

buildBoard();

document.getElementById("rollDice").addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 3) + 1;
  diceFace.textContent = roll;
  state.boardPosition = Math.min(state.boardPosition + roll, boardTiles.length - 1);
  state.pendingTile = boardTiles[state.boardPosition];
  boardPrompt.textContent = state.pendingTile.prompt;
  boardAnswer.value = "";
  boardFeedback.className = "feedback";
  boardFeedback.textContent = "";
  updateBoard();
  if (state.boardPosition === boardTiles.length - 1) {
    addScore(80);
    addStar();
  }
});

document.getElementById("submitBoardAnswer").addEventListener("click", () => {
  if (!state.pendingTile) return;
  if (state.pendingTile.special) {
    showFeedback(boardFeedback, "success", "Petak ini tiada jawapan diperlukan.");
    return;
  }
  if (normalizeAnswer(boardAnswer.value) === normalizeAnswer(state.pendingTile.answer)) {
    if (!state.solvedBoardTiles.has(state.boardPosition)) {
      state.solvedBoardTiles.add(state.boardPosition);
      addScore(25);
    }
    showFeedback(boardFeedback, "success", "Jawapan betul.");
  } else {
    showFeedback(boardFeedback, "error", "Jawapan belum tepat.");
  }
});

document.getElementById("restartGame").addEventListener("click", () => {
  window.location.reload();
});

function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function renderMysteryCards() {
  if (!mysteryCardsGrid) return;

  mysteryCardsGrid.innerHTML = "";
  mysteryFeedback.className = "feedback";
  mysteryFeedback.textContent = "";
  state.mysterySolved = false;

  mysteryQuestionBank.forEach((question) => {
    const card = document.createElement("article");
    card.className = "mystery-choice-card";

    const options = shuffleArray([
      { value: question.answer, correct: true },
      ...question.distractors.map((value) => ({ value, correct: false })),
    ]).map((option, index) => ({
      ...option,
      buttonLabel: `Jawapan ${String.fromCharCode(65 + index)}`
    }));

    card.innerHTML = `
      <div class="mystery-card-top">
        <p class="mystery-card-tag">Kad Soalan</p>
        <h3>${question.title}</h3>
      </div>
      <p class="mystery-card-question">${question.prompt}</p>
      <div class="mystery-option-list">
        ${options.map((option) => `
          <button class="mystery-option-btn" type="button" data-correct="${option.correct}" data-question="${question.id}">
            <span>${option.buttonLabel}</span>
            <strong>${option.value}</strong>
          </button>`).join("")}
      </div>
    `;

    mysteryCardsGrid.appendChild(card);
  });
}

mysteryCardsGrid?.addEventListener("click", (event) => {
  const button = event.target.closest(".mystery-option-btn");
  if (!button) return;

  const card = button.closest(".mystery-choice-card");
  const buttons = [...card.querySelectorAll(".mystery-option-btn")];
  const isCorrect = button.dataset.correct === "true";

  buttons.forEach((item) => {
    item.disabled = true;
    item.classList.toggle("correct", item.dataset.correct === "true");
  });

  if (isCorrect) {
    card.classList.add("solved");
    queueUiBlip(920, 0.08);
  } else {
    button.classList.add("wrong");
    queueUiBlip(250, 0.09);
  }

  const solvedCards = document.querySelectorAll(".mystery-choice-card.solved").length;
  if (solvedCards === mysteryQuestionBank.length) {
    if (!state.mysterySolved) {
      state.mysterySolved = true;
      addScore(80);
      addStar();
    }
    showFeedback(mysteryFeedback, "success", "Hebat! Semua kad misteri telah diselesaikan dengan betul.");
  } else if (!isCorrect) {
    showFeedback(mysteryFeedback, "error", "Pilihan itu belum tepat. Cuba lagi pada kad seterusnya.");
  } else {
    showFeedback(mysteryFeedback, "success", "Betul! Teruskan menjawab kad yang lain.");
  }
});

// Detective zone logic
// Detective zone logic
function buildDetective() {
  clueList.innerHTML = "";
  const clues = ["Petunjuk 1: Sudut di pusat adalah dua kali sudut di lilitan.", "Petunjuk 2: Jika sudut di lilitan 30°, sudut di pusat ialah 60°."];
  clues.forEach(clue => {
    const li = document.createElement("li");
    li.textContent = clue;
    clueList.appendChild(li);
  });

  witnessContainer.innerHTML = "";
  const witnesses = ["Saksi A: Sudut di pusat lebih besar.", "Saksi B: Nisbah adalah 2:1."];
  witnesses.forEach(witness => {
    const div = document.createElement("div");
    div.textContent = witness;
    witnessContainer.appendChild(div);
  });
}

document.getElementById("submitDetective").addEventListener("click", () => {
  const answer = normalizeAnswer(detectiveAnswer.value);
  if (answer === "teorem sudut di pusat") {
    if (!state.detectiveSolved) {
      state.detectiveSolved = true;
      addScore(60);
      addStar();
    }
    showFeedback(detectiveFeedback, "success", "Betul! Teorem sudut di pusat ditemui.");
  } else {
    showFeedback(detectiveFeedback, "error", "Jawapan belum tepat.");
  }
});

// Enhanced board logic
function buildBoardEnhanced() {
  boardEnhancedGrid.innerHTML = "";
  boardTiles.forEach((tile, index) => {
    const div = document.createElement("div");
    div.className = "board-tile";
    div.dataset.index = index;
    div.innerHTML = `<span>Petak ${index + 1}</span><strong>${tile.title}</strong>`;
    boardEnhancedGrid.appendChild(div);
  });
  updateBoardEnhanced();
}

function updateBoardEnhanced() {
  document.querySelectorAll("#boardEnhancedGrid .board-tile").forEach((tile, index) => {
    tile.classList.toggle("current", index === state.boardEnhancedPosition);
  });
  document.getElementById("playerPosition").textContent = `Posisi: ${state.boardEnhancedPosition + 1}`;
}

buildBoardEnhanced();

document.getElementById("rollDiceEnhanced").addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 4) + 1; // 1-4 for more challenge
  document.getElementById("diceFace").textContent = roll;
  state.boardEnhancedPosition = Math.min(state.boardEnhancedPosition + roll, boardTiles.length - 1);
  state.pendingTile = boardTiles[state.boardEnhancedPosition];
  document.getElementById("boardPrompt").textContent = state.pendingTile.prompt;
  boardAnswer.value = "";
  boardFeedback.className = "feedback";
  boardFeedback.textContent = "";
  updateBoardEnhanced();
  if (state.boardEnhancedPosition === boardTiles.length - 1) {
    addScore(100);
    addStar();
  }
});

// User view logic
function updateUserView() {
  const completedZones = [state.crosswordSolved, state.mysterySolved, state.detectiveSolved, state.boardPosition > 0, state.user_view].filter(Boolean).length;
  const totalZones = 5; // Updated total
  overallProgressFill.style.width = `${(completedZones / totalZones) * 100}%`;
  progressText.textContent = `${completedZones} / ${totalZones} zon selesai`;

  achievementList.innerHTML = "";
  const achievements = [];
  if (state.crosswordSolved) achievements.push("Penyelesai Crossword");
  if (state.dragSolved) achievements.push("Penyusun Label");
  if (state.mysterySolved) achievements.push("Penyelesai Misteri");
  if (state.detectiveSolved) achievements.push("Detektif Bulatan");
  achievements.forEach(ach => {
    const li = document.createElement("li");
    li.textContent = ach;
    achievementList.appendChild(li);
  });

  learningRecommendation.textContent = completedZones < 4 ? "Selesaikan lebih banyak zon untuk menguasai bulatan." : "Anda sudah mahir! Cuba cabaran lanjutan.";
}

updateHud();


