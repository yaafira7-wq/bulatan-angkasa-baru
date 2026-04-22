const screens = [...document.querySelectorAll(".screen")];
const progressFill = document.getElementById("progressFill");
const scoreValue = document.getElementById("scoreValue");
const starValue = document.getElementById("starValue");
const definitionTitle = document.getElementById("definitionTitle");
const definitionText = document.getElementById("definitionText");
const crosswordBoard = document.getElementById("crosswordBoard");
const clueList = document.getElementById("clueList");
const crosswordFeedback = document.getElementById("crosswordFeedback");
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

const state = {
  score: 0,
  stars: 0,
  viewedTerms: new Set(),
  currentScreen: "start",
  crosswordSolved: false,
  dragSolved: false,
  boardPosition: 0,
  pendingTile: null,
  solvedBoardTiles: new Set(),
};

const terms = {
  jejari: {
    title: "Jejari",
    text: "Jejari ialah garisan lurus dari pusat bulatan ke mana-mana titik pada lilitan.",
  },
  tembereng: {
    title: "Tembereng",
    text: "Tembereng ialah kawasan yang dibatasi oleh satu perentas dan satu lengkok yang sepadan.",
  },
  lilitan: {
    title: "Lilitan",
    text: "Lilitan ialah sempadan luar bulatan atau perimeter bulatan.",
  },
  pusat: {
    title: "Pusat",
    text: "Pusat ialah titik tengah bulatan yang sama jarak ke semua titik pada lilitan.",
  },
  sektor: {
    title: "Sektor",
    text: "Sektor ialah kawasan yang dibatasi oleh dua jejari dan satu lengkok.",
  },
  diameter: {
    title: "Diameter",
    text: "Diameter ialah garisan lurus yang melalui pusat dan menyambungkan dua titik pada lilitan.",
  },
  perentas: {
    title: "Perentas",
    text: "Perentas ialah garisan lurus yang menyambungkan mana-mana dua titik pada lilitan.",
  },
  lengkok: {
    title: "Lengkok",
    text: "Lengkok ialah sebahagian daripada lilitan bulatan.",
  },
};

const crosswordEntries = [
  { id: 1, answer: "jejari", clue: "Garis dari pusat ke lilitan.", row: 0, col: 0, dir: "across" },
  { id: 2, answer: "pusat", clue: "Titik tengah bulatan.", row: 0, col: 2, dir: "down" },
  { id: 3, answer: "diameter", clue: "Dua kali jejari.", row: 2, col: 0, dir: "across" },
  { id: 4, answer: "lengkok", clue: "Sebahagian daripada lilitan.", row: 0, col: 6, dir: "down" },
];

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

function updateHud() {
  scoreValue.textContent = state.score;
  starValue.textContent = `${state.stars} / 6`;
  const order = ["start", "terms", "crossword", "dragdrop", "mathopoly", "finish"];
  const index = order.indexOf(state.currentScreen);
  progressFill.style.width = `${Math.max(0, (index / (order.length - 1)) * 100)}%`;
}

function showFeedback(el, type, text) {
  el.textContent = text;
  el.className = `feedback show ${type}`;
}

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });
  state.currentScreen = name;
  updateHud();
  if (name === "finish") {
    finalScore.textContent = state.score;
    finalStars.textContent = `${state.stars} / 6`;
  }
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

document.querySelectorAll(".bubble").forEach((bubble) => {
  bubble.addEventListener("click", () => {
    const term = bubble.dataset.term;
    const info = terms[term];
    definitionTitle.textContent = info.title;
    definitionText.textContent = info.text;
    document.querySelectorAll(".bubble").forEach((item) => item.classList.remove("active"));
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

function buildCrossword() {
  const cells = new Map();
  crosswordEntries.forEach((entry) => {
    entry.answer.toUpperCase().split("").forEach((letter, index) => {
      const row = entry.row + (entry.dir === "down" ? index : 0);
      const col = entry.col + (entry.dir === "across" ? index : 0);
      const key = `${row}-${col}`;
      if (!cells.has(key)) {
        cells.set(key, { row, col, number: null, solution: letter });
      }
    });
  });

  crosswordEntries.forEach((entry) => {
    const key = `${entry.row}-${entry.col}`;
    if (cells.has(key)) {
      cells.get(key).number = entry.id;
    }
  });

  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const key = `${row}-${col}`;
      const cell = document.createElement("div");
      cell.className = "cell";
      if (!cells.has(key)) {
        cell.classList.add("block");
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;
        input.dataset.key = key;
        input.addEventListener("input", () => {
          input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
        });
        if (cells.get(key).number) {
          const number = document.createElement("span");
          number.className = "cell-number";
          number.textContent = cells.get(key).number;
          cell.appendChild(number);
        }
        cell.appendChild(input);
      }
      crosswordBoard.appendChild(cell);
    }
  }

  crosswordEntries.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.id}. ${entry.clue}`;
    clueList.appendChild(li);
  });

  crosswordBoard.dataset.solutions = JSON.stringify(
    Object.fromEntries([...cells.entries()].map(([key, value]) => [key, value.solution]))
  );
}

buildCrossword();

document.getElementById("checkCrossword").addEventListener("click", () => {
  const solutions = JSON.parse(crosswordBoard.dataset.solutions);
  let correct = 0;
  let total = 0;

  crosswordBoard.querySelectorAll("input").forEach((input) => {
    total += 1;
    if (normalizeAnswer(input.value) === normalizeAnswer(solutions[input.dataset.key])) {
      correct += 1;
    }
  });

  if (correct === total) {
    if (!state.crosswordSolved) {
      state.crosswordSolved = true;
      addScore(100);
      addStar();
    }
    showFeedback(crosswordFeedback, "success", "Semua jawapan betul.");
  } else {
    showFeedback(crosswordFeedback, "error", `Masih ada ${total - correct} kotak yang salah.`);
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

updateHud();
