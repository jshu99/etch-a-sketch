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
            box.setAttribute("id", "box")
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createGrid();

const box = document.querySelectorAll(".box");
function mouseEnter(event){
    event.target.style.backgroundColor = "blue";
}
box.forEach(box=>{
    box.addEventListener('mouseover', mouseEnter)
});

