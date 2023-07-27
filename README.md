![Logo](assets/documentation/logo-pp2.png)

# *ROCK, PAPER, SCISSORS GAME*

Welcome to the Rock, Paper, Scissors game! This simple and fun game allows you to play against the computer or challenge your friend to see who can make the best moves and emerge as the ultimate champion. The game is based on the classic hand game where each player simultaneously forms one of three shapes with an outstretched hand.

The site can be accessed by this [link](https://nikolettagr.github.io/rock-paper-scissors-game/)

---
## User Stories

### First Time Visitor Goals:

 * As a First Time Visitor, I want to easily understand the main purpose of the app, so I can learn more about this app.
 * As a First Time Visitor, I want to be able to easily navigate through the app, so I can find the content.
 * As a First Time Visitor,  I want to enjoy playing either with the computer or with a friend.


## Features

+ ### Menu Page

- Represent: 

 * Emphasize the the easiness of the using the application.
 * Provides options for playing.

    ![Menu Page](assets/documentation/menu-page-pp2.png)


- Menu page has 2 main buttons:

  - PLAY WITH AI button leads to with-computer page where you can start play with AI;

  - PLAY WITH FRIEND button leads to with-friend page where you can start play with your friend;

  - It also has a button which opens modal window with contact information;

  ![Info modal button](assets/documentation/info-modal-pp2.png)
​
---

+ ### Play with AI Page

![Play with AI Page](assets/documentation/AI-page.png)


  - It has a button which opens modal window with question if the user want to quit the game or no.If the answer is YES,leads to the main page,if NO,the user continue to play;

  ![Quit modal](assets/documentation/quit-modal-pp2.png)

  - It has one more button which opens modal window with rules image for the game;

  ![Rules modal](assets/documentation/rules-modal-pp2.png)

  - It has a scoreboard where appears the user's and AI's scores.

  ![Scoreboard](assets/documentation/scoreboard-AI-pp2.png)

  - It has 3 button options for the user to choose.

  ![AI hands](assets/documentation/user-choose-hands-pp2.png)

  - When the user choose one button,appears who beats who.

  ![Result](assets/documentation/result-AI.png)

---

+ ### Play with Friend Page

  - It has a button which opens modal window with question if the user want to quit the game or no.If the answer is YES,leads to the main page,if NO,the user continue to play.The same like in Play with AI Page;

  - It has one more button which opens modal window with rules image for the game.The same like in Play with AI Page;


  - It has a scoreboard where appears the player 1's and player 2's scores.

  ![Player1/2 Scoreboard](assets/documentation/player1-player2-scoreboard-pp2.png)

  - It has 3 button options for the player 1, and the same for the player 2 to choose.

  ![AI hands](assets/documentation/user-choose-hands-pp2.png)

  - When Player 1 selects a button, the buttons disappear and are replaced with the text "Waiting for Player 2 to choose...".

  ![Text](assets/documentation/choose-text-pp2.png)

  - After that when both player 1 and player 2 selected a button ,appears the result and showing who beats who with the button "Next round".

  ![Result](assets/documentation/result2-pp2.png)

  ---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - was used to arrange items simmetrically on the pages.
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.

---
## Design

![Design](assets/documentation/design-pp2.png)

- Light blue is a calming and serene shade of light blue with a touch of softness. This color exudes a sense of tranquility and peacefulness, reminiscent of clear blue skies and gentle ocean waves. It carries a refreshing and rejuvenating aura, making it an ideal choice for creating a soothing atmosphere in any space.

- Light gray is a soft and delicate shade of light gray with a touch of warmth.

- Yellow is a vibrant and energetic shade of golden yellow. This color exudes warmth and optimism, reminiscent of a radiant sun shining brightly in a clear sky. It carries a lively and cheerful aura, making it an excellent choice for creating a joyful and uplifting atmosphere in any context.

- Dark blue is a deep and sophisticated shade of dark blue with subtle hints of purple undertones. This color exudes a sense of mystery and elegance, reminiscent of a midnight sky adorned with twinkling stars. It carries a calm and composed aura, making it an excellent choice for creating a serene and luxurious atmosphere in any setting.

---

### Bugs
+ **Solved bugs**

1.I was able to resolve some bugs in the userChoice function, such as correctly assigning the DOM elements, which previously caused issues with capturing user input and resulted in unexpected behavior.

2.After thorough debugging, I successfully fixed the issues with the disappearing buttons upon Player 1's selection and ensured the smooth transition to display the text 'Waiting for Player 2 to choose...' while waiting for the second player's input.
 -The solution involved carefully reviewing the code responsible for handling the button visibility and implementing the necessary adjustments to ensure that the buttons properly disappear after Player 1's choice and the text "Waiting for Player 2 to choose..." appears seamlessly, providing a more polished and user-friendly experience during the gameplay.


+ **Unsolved bugs**

 - None.

---

+ **Mistakes**

 - During the process of committing changes, a few mistakes were made, such as accidentally including unrelated files, using improper commit messages, and forgetting to stage certain modifications, which led to some confusion and difficulties in tracking the progress of the project.

 - Moving forward, I have taken these mistakes as valuable learning experiences, and I am committed to improving my version control practices during future commits. I will be more diligent in reviewing changes, writing clear and descriptive commit messages, and double-checking the files I include in each commit to ensure a smoother and more organized development process.


## Testing


**COMPATIBILITY:**

+ The app was tested on the following browsers: Chrome, Firefox, Edge:

 - Chrome:

 ![Menu Page](assets/documentation/chrome-main.png)
 ![AI Page](assets/documentation/chrome-AI.png)
 ![Friend Page](assets/documentation/chrome-friend.png)

 - Firefox

 ![Main Page](assets/documentation/firefox-main.png)
 ![AI Page](assets/documentation/firefox-AI.png)
 ![Friend Page](assets/documentation/firefox-friend.png)

 - Edge:

 ![Main Page](assets/documentation/edge-main.png)
 ![AI Page](assets/documentation/edge-AI.png)
 ![Friend Page](assets/documentation/edge-friend.png)

 
+ The app was checked by devtools implemented on Firefox and Chrome browsers.

![Menu Page](assets/documentation/responsive-Main.png)
![AI Page](assets/documentation/responsive-AI.png)
![Friend Page](assets/documentation/responsive-friend.png)

---
## Validator testing
+ ##### HTML
 - No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.
  - Menu Page:
          ![Menu Page HTML Validator](assets/documentation/html-validator-main.png)
  - AI Page:
          ![AI Page HTML Validator](assets/documentation/html-validator-computer.png)
  - Friend Page:
          ![Friend Page HTML Validator](assets/documentation/html-validator-friend.png)

+ ##### CSS
  - No errors or warnings were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri). I input direct my scc code.

  ![CSS Validator](assets/documentation/css-validator-pp2.png)


+ ##### JS
 - No errors or warnings were found when passing through the official [JSHint](https://jshint.com/) validator except the warnings that   

  
  - AI Page:

    ![AI JS](assets/documentation/JS-hint-AI.png)


  - Friend Page:
    
    ![Friend JS](assets/documentation/js-hint-friend.png)


+ ##### Accessibility and performance 
 - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

  - Menu Page:

    ![Menu Page Performance Score](assets/documentation/lighthouse-index-pp2.png)

  - AI Page:

    ![AI Page Performance Score](assets/documentation/lighthouse-AI-pp2.png)

  - Grammar Quiz:

    ![Friend Page Performance Score](assets/documentation/lighthouse-friend-pp2.png)


---
## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/NikolettaGr/rock-paper-scissors-game), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://nikolettagr.github.io/rock-paper-scissors-game/)

---

## Local Deployment

In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/NikolettaGr/rock-paper-scissors-game.git`


---

## Credits

+ #### Content

 - I took idea from Code Institute suggestions.

+ #### Media

  - All the images for the website were taken from [Pngaa](https://www.pngaaa.com/).

---

## Acknowledgements

- I am enormously thankful to my mentor Iuliia Konovalova for her guidance and valuable advice!

[Iuliia Konovalova](https://github.com/IuliiaKonovalova)


- Inspiration for the project also come from [FrontEnd Mentor](https://www.frontendmentor.io/)


- Watching tutorials from Clever Programmer helped me making this project as well. [Clever Programmer](https://www.youtube.com/watch?v=C6jSg4VPNZE)

---

## Wireframes

 ![Wireframes](assets/documentation/Wireframes-PP2.pdf)










