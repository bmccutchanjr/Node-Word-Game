# Node-Word-Game

A simple version of the word game "Hang Man", demonstrating the use of modularization and JS constructors in NodeJS.

Because this is a command line driven game, there is no web page to link to, but you can view a [video of the game here](i have not reorded the video yet).

The functionality of the game is spread across four JavaScript files; `index.js`, `letter.js`, `lexicon.js` and `word.js`.

## index.js

The main module of the game is `index.js`.  index imports the well known npm modules `chalk` and `inquirer` as well as the custom module `word.js`.  inquirer is used to interact with the player.

word, in turn, imports `letter.js` and `lexicon.js`.

### word.js

`word.js` implements a JS constructor used in `index.js` to instantiate a word object.  It defines the methods used to evaluate the player's guesses and to evaluate the progress of the puzzle.

### letter.js

`letter.js` implements another constructor to implement an object for each letter in the puzzle word.

### lexicon.js

The simplest of the mudules.  Lexicon contains an array of the words that may be used in the puzzle and a function to randomly select a word.
