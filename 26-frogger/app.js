document.addEventListener("DOMContentLoaded", () => {
    function populate() {
        const grid = document.querySelector(".grid");
        for (let i=0; i < 81; i++) {
            const newDiv = document.createElement("div");
            grid.appendChild(newDiv);
        }
        grid.querySelector("div:nth-last-child(5)").classList.add("starting-block");
        grid.querySelector("div:nth-child(5)").classList.add("ending-block");

        for (let i = 1; i < 19; i++) {
            let selector = 18 + i;
            let square = grid.querySelector("div:nth-child(" + selector + ")");
            if (i <= 5) {
                square.classList.add("log-left");
                square.classList.add("l" + i)
            } else if ((i > 5) && (i <= 9)) {
                square.classList.add("log-left");
                square.classList.add("l" + (i - 5))
            } else if (i === 10) {
                square.classList.add("log-right");
                square.classList.add("l5")
            } else if ((i > 10) && (i <= 15)) {
                square.classList.add("log-right");
                square.classList.add("l" + (i - 10))
            } else if ((i > 15) && (i <= 19)) {
                square.classList.add("log-right");
                square.classList.add("l" + (i - 15))
            }

        }

        for (let i = 1; i < 19; i++) {
            let selector = 45 + i;
            let square = grid.querySelector("div:nth-child(" + selector + ")");
            if (i <= 9) {
                square.classList.add("car-right");
                if (i === 1 || i===4 || i===7) {
                    square.classList.add("c1");
                }
                if (i === 2 || i===5 || i===8) {
                    square.classList.add("c2");
                }
                if (i === 3 || i===6 || i===9) {
                    square.classList.add("c3");
                }
            } else if ((i > 9) && (i < 19)) {
                square.classList.add("car-left");
                if (i === 10 || i===13 || i===16) {
                    square.classList.add("c1");
                }
                if (i === 11 || i===14 || i===17) {
                    square.classList.add("c2");
                }
                if (i === 12 || i===15 || i===18) {
                    square.classList.add("c3");
                }
            }
            }
    }
    populate()

    const squares = document.querySelectorAll(".grid div");
    const timeLeft = document.querySelector("#time-left");
    const result = document.querySelector("#result");
    const startBtn = document.querySelector("#button");
    const carsLeft = document.querySelectorAll(".car-left");
    const carsRight = document.querySelectorAll(".car-right");
    const logsLeft = document.querySelectorAll(".log-left");
    const logsRight = document.querySelectorAll(".log-right");
    const width = 9;
    let currentIndex = 76;
    let currentTime = 20;
    let timerId;

    squares[currentIndex].classList.add("frog");

    function moveFrog(e) {
        squares[currentIndex].classList.remove("frog");
        switch(e.keyCode) {
            case 37:
                if (currentIndex % width !== 0) {
                    currentIndex -=1
                }
                break;
            case 38:
                if (currentIndex - width >= 0) {
                    currentIndex -= width
                }
                break;
            case 39:
                if (currentIndex % width < width -1) {
                    currentIndex += 1
                }
                break;
            case 40:
                if (currentIndex + width < width * width) {
                    currentIndex += width
                }
                break;
        }
        squares[currentIndex].classList.add("frog");
        lose();
        win();
    }

    function autoMoveCars() {
        carsLeft.forEach(carLeft => moveCarLeft(carLeft))
        carsRight.forEach(carRight => moveCarRight(carRight))
    }

    function moveCarLeft(carLeft) {
        switch (true) {
            case carLeft.classList.contains("c1"):
                carLeft.classList.remove("c1");
                carLeft.classList.add("c2")
                break;
            case carLeft.classList.contains("c2"):
                carLeft.classList.remove("c2");
                carLeft.classList.add("c3")
                break;
            case carLeft.classList.contains("c3"):
                carLeft.classList.remove("c3");
                carLeft.classList.add("c1")
                break;
        }
    }

    function moveCarRight(carRight) {
        switch (true) {
            case carRight.classList.contains("c1"):
                carRight.classList.remove("c1");
                carRight.classList.add("c3")
                break;
            case carRight.classList.contains("c2"):
                carRight.classList.remove("c2");
                carRight.classList.add("c1")
                break;
            case carRight.classList.contains("c3"):
                carRight.classList.remove("c3");
                carRight.classList.add("c2")
                break;
        }
    }

    function autoMoveLogs() {
        logsLeft.forEach(logLeft => moveLogLeft(logLeft));
        logsRight.forEach(logRight => moveLogRight(logRight))
    }

    function moveLogLeft(logLeft) {
        switch (true) {
            case logLeft.classList.contains("l1"):
                logLeft.classList.remove("l1");
                logLeft.classList.add("l2")
                break;
            case logLeft.classList.contains("l2"):
                logLeft.classList.remove("l2");
                logLeft.classList.add("l3")
                break;
            case logLeft.classList.contains("l3"):
                logLeft.classList.remove("l3");
                logLeft.classList.add("l4")
                break;
            case logLeft.classList.contains("l4"):
                logLeft.classList.remove("l4");
                logLeft.classList.add("l5")
                break;
            case logLeft.classList.contains("l5"):
                logLeft.classList.remove("l5");
                logLeft.classList.add("l1")
                break;
        }
    }

    function moveLogRight(logRight) {
        switch (true) {
            case logRight.classList.contains("l1"):
                logRight.classList.remove("l1");
                logRight.classList.add("l5")
                break;
            case logRight.classList.contains("l2"):
                logRight.classList.remove("l2");
                logRight.classList.add("l1")
                break;
            case logRight.classList.contains("l3"):
                logRight.classList.remove("l3");
                logRight.classList.add("l2")
                break;
            case logRight.classList.contains("l4"):
                logRight.classList.remove("l4");
                logRight.classList.add("l3")
                break;
            case logRight.classList.contains("l5"):
                logRight.classList.remove("l5");
                logRight.classList.add("l4")
                break;
        }
    }

    function win() {
        if (squares[4].classList.contains("frog")) {
            result.innerHTML = "You Won!"
            squares[currentIndex].classList.remove("frog");
            clearInterval(timerId);
            document.removeEventListener("keyup", moveFrog)
        }
    }

    function lose() {
        if (
            (currentTime === 0) || (squares[currentIndex].classList.contains("c1")) ||
            (squares[currentIndex].classList.contains("l5")) ||
            (squares[currentIndex].classList.contains("l4"))
            ) {
                result.innerHTML = "You Lose!";
                squares[currentIndex].classList.remove("frog");
                clearInterval(timerId);
                document.removeEventListener("keyup", moveFrog)
        }

    }

    function moveWithLogLeft() {
        if (currentIndex >= 27 && currentIndex < 35) {
            squares[currentIndex].classList.remove("frog");
            currentIndex +=1;
            squares[currentIndex].classList.add("frog");
        }
    }

    function moveWithLogRight() {
        if (currentIndex > 18 && currentIndex <= 26) {
            squares[currentIndex].classList.remove("frog");
            currentIndex -=1;
            squares[currentIndex].classList.add("frog");
        }        
    }

    function movePieces() {
        currentTime--
        timeLeft.textContent = currentTime;
        autoMoveCars();
        autoMoveLogs();
        moveWithLogLeft();
        moveWithLogRight();
        lose();
    }

    startBtn.addEventListener("click", () => {
        if (timerId) {
            clearInterval(timerId)
        } else {
            timerId = setInterval(movePieces, 1000);
            document.addEventListener("keyup", moveFrog)
        }
    })



})