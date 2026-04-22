const screens = [...document.querySelectorAll(".screen")];
const progressFill = document.getElementById("progressFill");
const scoreValue = document.getElementById("scoreValue");
const starValue = document.getElementById("starValue");
const definitionTitle = document.getElementById("definitionTitle");
const definitionText = document.getElementById("definitionText");
const crosswordBoard = document.getElementById("crosswordBoard");
const acrossClueList = document.getElementById("acrossClueList");
const downClueList = document.getElementById("downClueList");
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
  crosswordDirection: "across",
  activeCrosswordKey: "",
  dragSolved: false,
  boardPosition: 0,
  pendingTile: null,
  solvedBoardTiles: new Set(),
};

const CROSSWORD_CELL_SIZE = 36;

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
  { id: "1A", number: 1, answer: "luas", clue: "Kawasan di dalam bulatan.", row: 0, col: 4, dir: "across", hints: [0] },
  {
    id: "2D",
    number: 2,
    answer: "sektor",
    clue: "Kawasan yang dibatasi oleh dua jejari dan satu lengkok.",
    row: 0,
    col: 7,
    dir: "down",
    hints: [0],
  },
  {
    id: "3D",
    number: 3,
    answer: "bulatan",
    clue: "Lokus laluan lengkung bagi titik yang sama jarak daripada pusat.",
    row: 1,
    col: 0,
    dir: "down",
    hints: [0, 3],
  },
  {
    id: "4D",
    number: 4,
    answer: "pi",
    clue: "3.14159265359",
    row: 2,
    col: 4,
    dir: "down",
    hints: [0],
  },
  {
    id: "5A",
    number: 5,
    answer: "lilitan",
    clue: "Perimeter bulatan.",
    row: 3,
    col: 3,
    dir: "across",
    hints: [0, 4],
  },
  {
    id: "6D",
    number: 6,
    answer: "lengkokkecil",
    clue: "Lengkok kurang daripada 180°.",
    row: 3,
    col: 5,
    dir: "down",
    hints: [0, 7],
  },
  {
    id: "7A",
    number: 7,
    answer: "pusat",
    clue: "Titik ____ di mana semua titik pada lilitan adalah sama jarak daripadanya.",
    row: 6,
    col: 10,
    dir: "across",
    hints: [0],
  },
  {
    id: "8A",
    number: 8,
    answer: "lengkok",
    clue: "Bahagian lilitan.",
    row: 8,
    col: 0,
    dir: "across",
    hints: [0, 4],
  },
  {
    id: "9D",
    number: 9,
    answer: "diameter",
    clue: "Perentas terpanjang dalam bulatan.",
    row: 14,
    col: 6,
    dir: "down",
    hints: [0, 4],
  },
  {
    id: "10D",
    number: 10,
    answer: "tangen",
    clue: "Garis yang bersilang dengan bulatan tepat pada satu titik.",
    row: 16,
    col: 11,
    dir: "down",
    hints: [0],
  },
  {
    id: "11A",
    number: 11,
    answer: "perentas",
    clue: "Garis lurus yang menghubungkan mana-mana dua titik pada lilitan.",
    row: 18,
    col: 3,
    dir: "across",
    hints: [0, 4],
  },
  {
    id: "11D",
    number: 11,
    answer: "pusat",
    clue: "Semua titik pada bulatan adalah sama jarak dari titik ini.",
    row: 18,
    col: 3,
    dir: "down",
    hints: [0],
  },
  {
    id: "12A",
    number: 12,
    answer: "darjah",
    clue: "Sudut boleh diukur menggunakan ________.",
    row: 17,
    col: 10,
    dir: "across",
    hints: [0],
  },
  {
    id: "13A",
    number: 13,
    answer: "tembereng",
    clue: "Kawasan yang dikelilingi oleh perentas dan lengkok.",
    row: 20,
    col: 5,
    dir: "across",
    hints: [0, 4],
  },
];

const crosswordState = {
  cells: new Map(),
  inputs: new Map(),
  entryKeys: new Map(),
  editableKeys: [],
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
  crosswordBoard.innerHTML = "";
  acrossClueList.innerHTML = "";
  downClueList.innerHTML = "";

  const cells = new Map();
  const entryKeys = new Map();
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
      li.textContent = `${entry.number}. ${entry.clue}`;
      acrossClueList.appendChild(li);
    });

  crosswordEntries
    .filter((entry) => entry.dir === "down")
    .forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry.number}. ${entry.clue}`;
      downClueList.appendChild(li);
    });

  crosswordState.cells = cells;
  crosswordState.inputs = inputs;
  crosswordState.entryKeys = entryKeys;
  crosswordState.editableKeys = editableKeys;
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
  event.currentTarget.select();
}

function handleCrosswordInput(event) {
  const input = event.currentTarget;
  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);

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
  let correct = 0;
  const total = crosswordState.editableKeys.length;

  crosswordState.editableKeys.forEach((key) => {
    const input = crosswordState.inputs.get(key);
    const solution = crosswordState.cells.get(key).solution;
    if (normalizeAnswer(input.value) === normalizeAnswer(solution)) {
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
    showFeedback(crosswordFeedback, "error", `Masih ada ${total - correct} kotak yang salah atau kosong.`);
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
