const gameContainer = document.getElementById("game");
const numRows = 8;
const numCols = 8;
let selectedCell = null;

// Create game board
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.innerText = Math.floor(Math.random() * 5) + 1; // Random number from 1 to 5
        cell.addEventListener("click", () => selectCell(cell));
        gameContainer.appendChild(cell);
    }
}

function selectCell(cell) {
    if (selectedCell === null) {
        selectedCell = cell;
        cell.classList.add("selected");
    } else {
        if (areAdjacent(selectedCell, cell)) {
            swapCells(selectedCell, cell);
        }
        selectedCell.classList.remove("selected");
        selectedCell = null;
    }
}

function areAdjacent(cell1, cell2) {
    const rowDiff = Math.abs(parseInt(cell1.dataset.row) - parseInt(cell2.dataset.row));
    const colDiff = Math.abs(parseInt(cell1.dataset.col) - parseInt(cell2.dataset.col));
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}

function swapCells(cell1, cell2) {
    const temp = cell1.innerText;
    cell1.innerText = cell2.innerText;
    cell2.innerText = temp;
}
