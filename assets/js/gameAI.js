/* jshint esversion:8 */

let btnQuitOpen = document.querySelector('#quit-button');
let btnRulesOpen = document.querySelector('#button_instruction')
let btnQuitClose = document.querySelector('#close-modal');
let btnRulesClose = document.querySelector('#close-modal');
let modal = document.querySelector('#modal');
let overlay = document.querySelector('#overlay');

document.addEventListener('DOMContentLoaded', function () {
    // Open modal windows
    btnQuitOpen.addEventListener('click', openModal);
    btnRulesOpen.addEventListener('click', openModal)

    // Close modal windows
    btnQuitClose.addEventListener('click', closeModal);
    btnRulesClose.addEventListener('click', closeModal);
});

/**
 * Function to open modal windows
 */
let openModal = function () {
    modal.classList.remove('modal-hidden');
    overlay.classList.remove('overlay--hidden');
};

/**
 * Function to close modal windows
 */
let closeModal = function () {
    modal.classList.add('modal-hidden');
    overlay.classList.add('overlay--hidden');
};


/**
 * Game Logic
 */
const choiceButtons = document.querySelectorAll('.btn-hand');
const divGame = document.querySelector('.hands');

const choices = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
];

choiceButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const nameChoice = button.dataset.choice;
        const choice = choices.find(function (choice) {
            return choice.name === nameChoice;
        });
        choose(choice);

        console.log("Clicked!", choice);
    });
});



