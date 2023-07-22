/* jshint esversion:8 */
//  Variables
// Target all buttons,query selector all
// Modal
// Get a click, event listener on buttons ,target with for each loop
// Implement a function to the computer
// Implement a round function
// Event listener for play again
// Quit function shoud activate the modal
// Finish the game function

// Variables
let btnInfoOpen = document.querySelector('#info_modal');
let btnInfoClose = document.querySelector('#close-modal');
let modal = document.querySelector('#modal');
let overlay = document.querySelector('#overlay');

document.addEventListener('DOMContentLoaded', function () {
    // Open Information modal
    btnInfoOpen.addEventListener('click', openModal);

    // Close Information modal
    btnInfoClose.addEventListener('click', closeModal);

});

/**
 * Function to open information modal
 */
let openModal = function () {
    modal.classList.remove('modal-hidden');
    overlay.classList.remove('overlay--hidden');
};

/**
 * Function to close information modal
 */
let closeModal = function () {
    modal.classList.add('modal-hidden');
    overlay.classList.add('overlay--hidden');
};