const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('colorPicker');
const newGrid = document.getElementById('grid-size');

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
    let userInput = prompt('How many squares per side do you want? Max: 100');
    userInput = parseInt(userInput);

    if (isNaN(userInput) || userInput > 100 || userInput < 1) {
        alert('It cannot be greater than 100 and must be a valid number!');
        return;
    }
    createGrid(userInput);
});


gridContainer.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

gridContainer.addEventListener('mousemove', (e) => {
    if (isDrawing && e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = colorPicker.value;
    }
});