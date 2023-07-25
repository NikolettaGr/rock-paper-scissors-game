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