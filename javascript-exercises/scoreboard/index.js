let homeScoreEl = document.getElementById("home-score");
let homeScoreCount = 0;
let guestScoreEl = document.getElementById("guest-score");
let guestScoreCount = 0;


//Home Score Buttons
function hpa1() {
    homeScoreCount += 1
    homeScoreEl.textContent = homeScoreCount
}

function hpa2() {
    homeScoreCount += 2
    homeScoreEl.textContent = homeScoreCount
}

function hpa3() {
    homeScoreCount += 3
    homeScoreEl.textContent = homeScoreCount
}


//Guest Score Buttons
function gpa1() {
    guestScoreCount += 1
    guestScoreEl.textContent = guestScoreCount
}

function gpa2() {
    guestScoreCount += 2
    guestScoreEl.textContent = guestScoreCount
}

function gpa3() {
    guestScoreCount += 3
    guestScoreEl.textContent = guestScoreCount
}


//Reset Game Button
function resetGame() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0
    homeScoreCount = 0;
    guestScoreCount = 0;
}