// const container = document.querySelector('#container');

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

let btn = document.querySelector('#create');

btn.addEventListener('click', (event) => { 
    createGrid()
}, {once:true})

const container = document.querySelector("#container");

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "blue";
    }
});
