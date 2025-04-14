let player = [], flag = 0;
player[0] = false;
player[1] = false;

let lock = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let element_00 = document.querySelector("#sqr_00");
let element_01 = document.querySelector("#sqr_01");
let element_02 = document.querySelector("#sqr_02");
let element_10 = document.querySelector("#sqr_10");
let element_11 = document.querySelector("#sqr_11");
let element_12 = document.querySelector("#sqr_12");
let element_20 = document.querySelector("#sqr_20");
let element_21 = document.querySelector("#sqr_21");
let element_22 = document.querySelector("#sqr_22");
function sqrUpd_00() {
    if (lock[0][0] === 0) {
        if (flag === 0) {
            flag = 1;
            element_00.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[0][0] = 1;
        }
        else {
            if (player[0] === true) {
                element_00.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[0][0] = 1;
                win_cond(player[0], player[1]);
            } else if (player[1] === true) {
                element_00.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[0][0] = 1;
                win_cond(player[0], player[1]);
            }
        }
    }
}
function sqrUpd_01() {
    if (lock[0][1] === 0) {
        if (flag === 0) {
            flag = 1;
            element_01.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[0][1] = 1;
        }
        else {
            if (player[0] === true) {
                element_01.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[0][1] = 1;
                win_cond(player[0], player[1]);
            } else if (player[1] === true) {
                element_01.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[0][1] = 1;
                win_cond(player[0], player[1]);
            }
        }
    }

}
function sqrUpd_02() {
    if (lock[0][2] === 0) {
        if (flag === 0) {
            flag = 1;
            element_02.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[0][2] = 1;
        }
        else {
            if (player[0] === true) {
                element_02.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[0][2] = 1;
                win_cond(player[0], player[1]);
            } else if (player[1] === true) {
                element_02.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[0][2] = 1;
                win_cond(player[0], player[1]);
            }
        }
    }

}
function sqrUpd_10() {
    if (lock[1][0] === 0) {
        if (flag === 0) {
            flag = 1;
            element_10.innerHTML = `<i class="fa-solid fa-xmark fa-7x"></i>`
            player[0] = true;
            lock[1][0] = 1;
        }
        else {
            if (player[0] === true) {
                element_10.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[1][0] = 1;
                win_cond(player[0], player[1]);

            } else if (player[1] === true) {
                element_10.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[1][0] = 1;
                win_cond(player[0], player[1]);

            }
        }
    }

}
function sqrUpd_11() {
    if (lock[1][1] === 0) {
        if (flag === 0) {
            flag = 1;
            element_11.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[1][1] = 1;
        }
        else {
            if (player[0] === true) {
                element_11.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[1][1] = 1;
                win_cond(player[0], player[1]);

            } else if (player[1] === true) {
                element_11.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[1][1] = 1;
                win_cond(player[0], player[1]);

            }
        }
    }

}
function sqrUpd_12() {
    if (lock[1][2] === 0) {
        if (flag === 0) {
            flag = 1;
            element_12.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[1][2] = 1;
        }
        else {
            if (player[0] === true) {
                element_12.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[1][2] = 1;
                win_cond(player[0], player[1]);

            } else if (player[1] === true) {
                element_12.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[1][2] = 1;
                win_cond(player[0], player[1]);

            }
        }
    }

}
function sqrUpd_20() {
    if (lock[2][0] === 0) {
        if (flag === 0) {
            flag = 1;
            element_20.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[2][0] = 1;
        }
        else {
            if (player[0] === true) {
                element_20.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[2][0] = 1;
                win_cond(player[0], player[1]);

            } else if (player[1] === true) {
                element_20.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[2][0] = 1;
                win_cond(player[0], player[1]);

            }
        }
    }

}
function sqrUpd_21() {
    if (lock[2][1] === 0) {
        if (flag === 0) {
            flag = 1;
            element_21.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[2][1] = 1;

        }
        else {
            if (player[0] === true) {
                element_21.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[2][1] = 1;
                win_cond(player[0], player[1]);

            } else if (player[1] === true) {
                element_21.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[2][1] = 1;
                win_cond(player[0], player[1]);

            }
        }
    }

}

function sqrUpd_22() {
    if (lock[2][2] === 0) {
        if (flag === 0) {
            flag = 1;
            element_22.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
            player[0] = true;
            lock[2][2] = 1;

        }
        else {
            if (player[0] === true) {
                element_22.innerHTML = `<i class="fa-solid fa-o fa-7x"></i>`
                player[0] = false;
                player[1] = true;
                lock[2][2] = 1;

                win_cond(player[0], player[1]);

            } else if (player[1] === true) {
                element_22.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x"></i>`
                player[0] = true;
                player[1] = false;
                lock[2][2] = 1;

                win_cond(player[0], player[1]);

            }
        }
    }
}

function isZero(element) {
    const icon = element.querySelector("i");
    return icon && icon.classList.contains("fa-o");
}

function isCross(element) {
    const icon = element.querySelector("i");
    return icon && icon.classList.contains("fa-xmark");
}

function win_cond(player_0, player_1) {
    // Won by cross in 1st row
    let c1r = wCross(element_00, element_01, element_02, player_0, player_1);

    // Won by zero in 1st row
    let z1r = wZero(element_00, element_01, element_02, player_0, player_1);

    // Won by cross in 2nd row
    let c2r = wCross(element_10, element_11, element_12, player_0, player_1);

    // Won by zero in 2nd row
    let z2r = wZero(element_10, element_11, element_12, player_0, player_1);

    // Won by cross in 3nd row
    let c3r = wCross(element_20, element_21, element_22, player_0, player_1);

    // Won by zero in 3nd row
    let z3r = wZero(element_20, element_21, element_22, player_0, player_1)

    // Won by cross in 1st Column
    let c1c = wCross(element_00, element_10, element_20, player_0, player_1);

    // Won by zero in 1st row
    let z1c = wZero(element_00, element_10, element_20, player_0, player_1);

    // Won by cross in 2nd Column
    let c2c = wCross(element_01, element_11, element_21, player_0, player_1);

    // Won by zero in 2nd Column
    let z2c = wZero(element_01, element_11, element_21, player_0, player_1);

    // Won by cross in 3rd Column
    let c3c = wCross(element_02, element_12, element_22, player_0, player_1);

    // Won by zero in 3rd Column
    let z3c = wZero(element_02, element_12, element_22, player_0, player_1);

    // Won by Cross Main Diagonal `\`
    let cmd = wCross(element_00, element_11, element_22, player_0, player_1);

    // Won by Zero Main Diagonal `\`
    let zmd = wZero(element_00, element_11, element_22, player_0, player_1);

    // Won by Cross in Anti-Diagonal `/`
    let cad = wCross(element_02, element_11, element_20, player_0, player_1);

    // Won by Zero in Anti-Diagonal `/`
    let zad = wZero(element_02, element_11, element_20, player_0, player_1);

    // console.log("No Player Won? :",(c1r === 0 && z1r === 0 && c2r === 0 && z2r === 0 && c3r === 0 && z3r === 0 &&
    //     c1c === 0 && z1c === 0 && c2c === 0 && z2c === 0 && c3c === 0 && z3c === 0 &&
    //     cmd === 0 && zmd === 0 && cad === 0 && zad === 0))
    // console.log("All Cells Locked? :", isAllLocked(lock) )
    if ((c1r === 0 && z1r === 0 && c2r === 0 && z2r === 0 && c3r === 0 && z3r === 0 &&
        c1c === 0 && z1c === 0 && c2c === 0 && z2c === 0 && c3c === 0 && z3c === 0 &&
        cmd === 0 && zmd === 0 && cad === 0 && zad === 0) && (isAllLocked(lock))) {
        // No Player won And all the cells are filled
        alert("Its a Draw :|")
    }
}

function isAllLocked(lock) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (lock[i][j] !== 1) return false;
        }
    }
    return true;
}

function wZero(element_a, element_b, element_c, player_0, player_1) {
    if (isZero(element_a) && isZero(element_b) && isZero(element_c)) {
        console.log("in wZero()")
        if ((player_0 === false) && (player_1 === true)) {
            //player 1 won 
            for (let i = 0; i < 3; i++) {// since a player won, game over
                for (let j = 0; j < 3; j++) {
                    lock[i][j] = 1
                }
            }
            element_a.innerHTML = `<i class="fa-solid fa-o fa-7x" style="color: #63E6BE;"></i>`;
            element_b.innerHTML = `<i class="fa-solid fa-o fa-7x" style="color: #63E6BE;"></i>`;
            element_c.innerHTML = `<i class="fa-solid fa-o fa-7x" style="color: #63E6BE;"></i>`;
            setTimeout(() => { alert("Player 1 won, congratulations !!!") }, 50)
            return 1
        }
    }
    else return 0;
}

function wCross(element_a, element_b, element_c, player_0, player_1) {
    if (isCross(element_a) && isCross(element_b) && isCross(element_c)) {
        if ((player_1 === false) && (player_0 === true)) {
            //player 0 won 
            for (let i = 0; i < 3; i++) {// since a player won, game over
                for (let j = 0; j < 3; j++) {
                    lock[i][j] = 1
                }
            }
            element_a.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x" style="color: #63E6BE;"></i>`
            element_b.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x" style="color: #63E6BE;"></i>`
            element_c.innerHTML = `<i class="fa-solid fa-xmark fa-7.5x" style="color: #63E6BE;"></i>`
            setTimeout(() => { alert("Player 1 won, congratulations !!!") }, 50)
            return 1
        }
    }
    else return 0
}

function newGame() {
    element_00.innerHTML = ``
    element_01.innerHTML = ``
    element_02.innerHTML = ``
    element_10.innerHTML = ``
    element_11.innerHTML = ``
    element_12.innerHTML = ``
    element_20.innerHTML = ``
    element_21.innerHTML = ``
    element_22.innerHTML = ``

    lock = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}