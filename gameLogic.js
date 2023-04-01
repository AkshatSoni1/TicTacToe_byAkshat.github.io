let cell = document.querySelectorAll('.cell');
let player = document.getElementById("player");
let reset = document.getElementById("reset");
let turn = "X";
let play = "O"
player.innerText = `Turn of : O`

let winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let countOfChances = 0;
let flag = [true, true, true, true, true, true, true, true, true];

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if (flag[i] == true) {
            turn = turn == "X" ? "O" : "X";
            play = turn == "X" ? "O" : "X";
            player.innerHTML = `Turn of : ${play}`
            cell[i].innerText = turn;
            cell[i].classList = turn;
            if (cell[i].innerText != "") {
                countOfChances++;
            }
            check();
            flag[i] = false;
        }
    })
}
let gameOver = false;
function check() {
    winComb.forEach(elem => {
        if ((cell[elem[0]].innerText === cell[elem[1]].innerText) && (cell[elem[0]].innerText === cell[elem[2]].innerText) && (cell[elem[0]].innerText !== "")) {
            player.innerText = `Congratulations!  ${cell[elem[0]].innerText} has won the game`
            flag.fill(false);
            gameOver = true;
            highLightCell(elem);
        }
    })
    if (countOfChances == 9 && gameOver == false) {
        player.innerText = "Draw! Nobody won."
    }
}
function highLightCell(elem) {
    elem.forEach(function (idx) {
        if (cell[idx].innerText == "X") {
            cell[idx].classList.add("winnerX");
        }
        else {
            cell[idx].classList.add("winnerO");
        }
    })
}
reset.addEventListener("click", () => {
    window.location.reload();
})