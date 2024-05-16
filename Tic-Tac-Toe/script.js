let boxes = document.querySelectorAll(".box");
let winContainer = document.querySelector(".win-container");
let text = document.querySelector("#text");
let btn1 = document.querySelector("#btn1");
let reset = document.querySelector("#reset");

let count = 0;
let objO = true;
let array = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (objO) {
            box.innerText = "O";
            box.style.color = "blue";
            objO = false;
            box.disabled = true;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            objO = true;
            box.disabled = true;
        }
        count++;
        let final = winner();
        if (!final && count == 9) {
            text.innerText = `It's a Draw`;
            winContainer.classList.remove("hidden");
            disable();
        }
    })
})

let enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    winContainer.classList.add("hidden");
    count = 0;
}
let disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (player) => {
    text.innerText = `The Winner is ${player}`;
    winContainer.classList.remove("hidden");
    disable();
}

const winner = () => {
    for (let arr of array) {
        let pos1 = boxes[arr[0]].innerText;
        let pos2 = boxes[arr[1]].innerText;
        let pos3 = boxes[arr[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
}
btn1.addEventListener("click", enable);
reset.addEventListener("click", enable);
