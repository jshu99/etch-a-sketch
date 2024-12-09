const container = document.querySelector('#container');

function createGrid(){
    let rows = 16;
    let columns = 16;
    for (let i = 0; i < rows; i++){
        const row = document.createElement("div")
        row.classList.add("row");
        
        for (let j = 0; j < columns; j++){
            const box = document.createElement("div");
            box.classList.add("box")
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createGrid();



//create a div column element 
//iterate the div column element for the max number of time based on parameter
