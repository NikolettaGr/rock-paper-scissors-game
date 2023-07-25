/* jshint esversion:8 */

// Get DOM elements and assign them to variables
let btnQuitOpen = document.querySelector('#quit-button');
let btnRulesOpen = document.querySelector('#button_instruction')
let btnQuitClose = document.querySelector('#close-modal');
let btnRulesClose = document.querySelector('#close-modal-rules');
let modalQuit = document.querySelector('#modal-quit');
let modalRules = document.querySelector('#modal-rules');
let overlay = document.querySelector('#overlay');

document.addEventListener('DOMContentLoaded', function () {
    // Open modal windows
    btnQuitOpen.addEventListener('click', openModalQuit);
    btnRulesOpen.addEventListener('click', openModalRules)

    // Close modal windows
    btnQuitClose.addEventListener('click', closeModalQuit);
    btnRulesClose.addEventListener('click', closeModalRules);
});

/**
 * Function to open modal windows
 */
let openModalQuit = function () {
    btnQuitOpen.classList.remove('modal-hidden');
    overlay.classList.remove('overlay--hidden');
};

let openModalRules = function () {
    modalRules.classList.remove('modal-hidden');
    overlay.classList.remove('overlay--hidden');
};

/**
 * Function to close modal windows
 */
let closeModalQuit = function () {
    btnQuitOpen.classList.add('modal-hidden');
    overlay.classList.add('overlay--hidden');
};

let closeModalRules = function () {
    modalRules.classList.add('modal-hidden');
    overlay.classList.add('overlay--hidden');
};

/**
 * Game Logic
 */
// Get DOM elements and assign them to variables
const player1Buttons = document.querySelectorAll(".player-0 .hand");
const player2Buttons = document.querySelectorAll(".player-1 .hand");
const player1ChoiceImage = document.getElementById("player1-choice-image");
const player2ChoiceImage = document.getElementById("player2-choice-image");
const refereeText = document.querySelector(".referee h1");
const playAgainButton = document.querySelector(".play-again");
const scorePlayer1 = document.getElementById("score-player1");
const scorePlayer2 = document.getElementById("score-player2");
const resultsDiv = document.querySelector(".results");
const contentDiv = document.querySelector(".content");
const refereeDiv = document.querySelector(".referee");
const player0Div = document.querySelector(".player-0");
const player1Div = document.querySelector(".player-1");

const choices = [
    {
        name: "rock",
        imageSrc: "rock.png",
        beats: "scissors"
    },
    {
        name: "paper",
        imageSrc: "paper.jpg",
        beats: "rock"
    },
    {
        name: "scissors",
        imageSrc: "scissors.png",
        beats: "paper"
    }
];

let userScore = 0;
let player2Score = 0;
let player1Choice = null;
let player2Choice = null;
let gameResult = null;