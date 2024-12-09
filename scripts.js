// const container = document.querySelector('#container');
const input = document.querySelector("input");
const container = document.querySelector("#container");

function createGrid(){
    let rows = input.value;
    let columns = input.value;
    if (input.value <= 100){
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
    } else 
    alert("Enter a number less than 100!")
}

function reset(container){
    document.querySelector("#container").innerHTML= "";
}

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "blue";
    }
});

// let btn = document.querySelector('#create');
// btn.addEventListener('click', (event) => { 
//     createGrid()
// }, {once:true})
