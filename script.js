const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('colorPicker');
const newGrid = document.getElementById('grid-size');
const randomColorModeButton = document.getElementById('random-color-mode');
let isDrawing = false;
let randomColorMode = false;

function createGrid(squaresPerSide) {
    gridContainer.innerHTML = '';
    
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = 400 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16);

newGrid.addEventListener('click', () => {
    let userInput = prompt('How many squares per side do you want? Min: 1 - Max: 100');
    userInput = parseInt(userInput);

    if (isNaN(userInput) || userInput > 100 || userInput < 1) {
        alert('Please enter a valid number between 1 and 100!');
        return;
    }

    createGrid(userInput);
});

randomColorModeButton.addEventListener('click', () => {
    randomColorMode = !randomColorMode;
    randomColorModeButton.textContent = randomColorMode ? 'Normal Mode' : 'Random Color Mode';
});

gridContainer.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

gridContainer.addEventListener('mousemove', (e) => {
    if (isDrawing && e.target.classList.contains('grid-item')) {
        if (randomColorMode) {
            e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        } else {
            e.target.style.backgroundColor = colorPicker.value;
        }
    }
});
