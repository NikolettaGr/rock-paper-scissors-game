/* jshint esversion:8 */

let btnQuitOpen = document.querySelector('#quit-button');
let btnRulesOpen = document.querySelector('#button_instruction');
let btnQuitClose = document.querySelector('#close-modal');
let btnRulesClose = document.querySelector('#close-modal-rules');
let modalQuit = document.querySelector('#modal-quit');
let modalRules = document.querySelector('#modal-rules');
let overlay = document.querySelector('#cover');

document.addEventListener('DOMContentLoaded', function () {
    // Open modal windows
    btnQuitOpen.addEventListener('click', openModalQuit);
    btnRulesOpen.addEventListener('click', openModalRules);

    // Close modal windows
    btnQuitClose.addEventListener('click', closeModalQuit);
    btnRulesClose.addEventListener('click', closeModalRules);
});

/**
 * Function to open modal windows
 */
let openModalQuit = function () {
    console.log('openModalQuit');
    console.log('btnQuitOpen', btnQuitOpen);
    modalQuit.classList.remove('modal-hidden');
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
    console.log('closeModalQuit');
    console.log('btnQuitOpen', btnQuitOpen);
    modalQuit.classList.add('modal-hidden');
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
const choiceButtons = document.querySelectorAll('.btn-hand');
const divGame = document.querySelector('.hands');
const divResults = document.querySelector('.results');
const scoreUserContainer = document.getElementById("score-user");
const scoreAIContainer = document.getElementById("score-computer");
const userChoiceElement = document.getElementById("user-choice-image");
const computerChoiceElement = document.getElementById("computer-choice-image");
const gameResult = document.querySelector('.decision h1');
const playAgainButton = document.querySelector('.play-again');
const choices = [
    {
        name: "rock",
        imageSrc: "assets/images/rock.png",
        beats: "scissors"
    },
    {
        name: "paper",
        imageSrc: "assets/images/paper.png",
        beats: "rock"
    },
    {
        name: "scissors",
        imageSrc: "assets/images/scissors.png",
        beats: "paper"
    }
];

let userScore = 0;
let AIscore = 0;
const maxRounds = 5;
let currentRound = 1;


// Event listeners for choice buttons
choiceButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const nameChoice = button.dataset.choice;
        const choice = choices.find(function (choice) {
            return choice.name === nameChoice;
        });
        userChoose(choice);

        console.log("Clicked!", choice);
    });
});


// Function to get User's choice and get the result
function userChoose(choice) {
    console.log(choice);
    console.log('userScore', userScore);
    console.log('AIscore', AIscore);
    console.log('scoreAIContainer', scoreAIContainer);
    console.log('scoreUserContainer', scoreUserContainer);
    const computerChoice = aiChoose();
    divGame.style.display = "none";
    divResults.style.display = "flex";
    userChoiceElement.src = choice.imageSrc;
    computerChoiceElement.src = computerChoice.imageSrc;
    console.log(computerChoice);


    if (choice.name === computerChoice.beats) {
        console.log('userScore', userScore);
        console.log('AIscore', AIscore);
        gameResult.innerHTML = "YOU LOSE! 😔";
        AIscore++;
        console.log('userScore', userScore);
        console.log('AIscore', AIscore);
        scoreAIContainer.innerHTML = AIscore;

    } else if (choice.beats === computerChoice.name) {
        gameResult.innerHTML = "YOU WIN! 🎉";
        console.log('userScore', userScore);
        console.log('AIscore', AIscore);
        userScore++;
        console.log('userScore', userScore);
        console.log('AIscore', AIscore);
        scoreUserContainer.innerHTML = userScore;
    } else {
        gameResult.innerHTML = "IT'S A TIE! 🤪";
    }
    currentRound++;

    if (currentRound > maxRounds) {
        checkWinner();
    }
}


// Function to check the winner after 5 rounds
function checkWinner() {
    if (currentRound > maxRounds) {
        if (userScore > AIscore) {
            gameResult.innerHTML = "YOU ARE THE WINNER! 🏆";
            console.log('Final Winner: YOU');
        } else if (userScore < AIscore) {
            gameResult.innerHTML = "COMPUTER WINS!";
            console.log('Final Winner: COMPUTER');
        } else {
            gameResult.innerHTML = "IT'S A TIE! 🤪";
            console.log('Final Winner: TIE');
        }

        playAgainButton.style.display = "block";
    }
    userScore = 0;
    AIscore = 0;
    currentRound = 1;
    scoreUserContainer.innerHTML = userScore;
    scoreAIContainer.innerHTML = AIscore;
}


// Function to get AI's choice
function aiChoose() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}



// Event listener for play again button
playAgainButton.addEventListener('click', function () {
    divGame.style.display = "flex";
    divResults.style.display = "none";
});
