const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('colorPicker');

for (let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }

    gridContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('grid-item')) {
            e.target.style.backgroundColor = colorPicker.value;
        }
    });  
