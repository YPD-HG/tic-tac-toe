let player = [];
player[0] = '<i class="fa-solid fa-xmark fa-7.5x"></i>';
player[1] = '<i class="fa-solid fa-o fa-7x"></i>';

let squares = document.getElementsByClassName('sqr');
let currentPlayer = player[0];

const endMessage = document.getElementsByTagName('h3')[0]
endMessage.style.color = `red`
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign = 'center'

let lock = 0;

let someoneWon = false;
let win_cond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
        if (lock === 0) {
            if (squares[i].innerHTML === ``) {
                if (currentPlayer === player[0]) {
                    squares[i].innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                    someoneWon = won()
                    if (someoneWon === true) {
                        if (currentPlayer === player[0]) {
                            endMessage.style.color = `red`
                            endMessage.textContent = `X Won!`
                        } else {
                            endMessage.style.color = `#63E6BE`
                            endMessage.textContent = `0 Won!`
                        }
                        lock = 1;
                        return
                    }
                    endMessage.style.color = `#63E6BE`
                    endMessage.textContent = `0's turn!`
                    currentPlayer = player[1]
                }
                else {
                    squares[i].innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                    someoneWon = won()
                    if (someoneWon === true) {
                        if (currentPlayer === player[0]) {
                            endMessage.style.color = `red`
                            endMessage.textContent = `X Won!`
                        } else {
                            endMessage.style.color = `#63E6BE`
                            endMessage.textContent = `0 Won!`
                        } lock = 1;
                        return
                    }
                    endMessage.style.color = `red`
                    endMessage.textContent = `X's turn!`
                    currentPlayer = player[0];
                }

            }
        }
        Draw()
    })

}

function won() {
    for (let i = 0; i < 8; i++) {
        const [a, b, c] = win_cond[i]
        // console.log(win_cond[i])
        // console.log(a, b, c)
        if (currentPlayer === player[0]) {
            if (squares[a].innerHTML === `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                && squares[b].innerHTML === `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                && squares[c].innerHTML === `<i class="fa-solid fa-xmark fa-7.5x"></i>`) {
                squares[a].getElementsByTagName("i")[0].style.color = `red`
                squares[b].getElementsByTagName("i")[0].style.color = `red`
                squares[c].getElementsByTagName("i")[0].style.color = `red`
                return true;

            }
        }
        else {
            if (squares[a].innerHTML === `<i class="fa-solid fa-o fa-7x"></i>`
                && squares[b].innerHTML === `<i class="fa-solid fa-o fa-7x"></i>`
                && squares[c].innerHTML === `<i class="fa-solid fa-o fa-7x"></i>`) {
                squares[a].getElementsByTagName("i")[0].style.color = `#63E6BE`
                squares[b].getElementsByTagName("i")[0].style.color = `#63E6BE`
                squares[c].getElementsByTagName("i")[0].style.color = `#63E6BE`
                return true;
            }
        }
    }
    return false;
}

function squaresFull() {
    for (let i = 0; i < 9; i++) {
        if (squares[i].innerHTML === `` ||
            squares[i].innerHTML === ``) {
            return false
        }
    }
    return true;
}

function Draw() {
    if (squaresFull() && !someoneWon) {
        endMessage.style.color = `orange`
        endMessage.textContent = `Its Draw :|`
    }
}

function restartButton() {
    someoneWon = false;
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ``
    }
    endMessage.textContent = `X's turn!`
    endMessage.style.color = `red`
    currentPlayer = player[0]
    lock = 0;
}