// A simple command line version of hang-man.  index.js is the main module and implements user interaction

// First, set the dependencies

const chalk = require("chalk");
const inquirer = require("inquirer");
const Word = require("./word.js");

console.log (chalk.blue("========================================"));
console.log (chalk.blue("WORD GUESS: WORLD CAPITALS"));
console.log (chalk.blue("========================================"));


function playWord (word, count = 10)
{   // var done = false;

    inquirer
    .prompt (
    {   name:   "char",
        type:   "input",
        message: "Pick a letter",
        // validate: alpha.indexOf (answer.char) > 0
    })
    .then (function (answer)
    {   if (word.isCorrect (answer.char.toUpperCase ()))
        {   console.log (chalk.green ("Correct!"));

            if (word.isSolved ())
            {   word.showWord ();
                console.log ("You got it!");
                playGame ();
                return;
            }
        }
        else
        {   console.log (chalk.red ("Incorrect!"));
            count--;

            if (count)
                console.log (count, " guesses remaining\n");
            else
            {   console.log ("Sorry, you're out of guesses.\nThe word was:")
                word.showWord (true);
                console.log ("\nMaybe you'll have better luck with this one.\n");
                playGame ();
                return;
            }
        }

        word.showWord ();
        playWord (word, count);
    })
}

function playGame ()
{   // Set all counters to initial values and select a word to solve

    var word = new Word ();

    playWord (word, 10);
}

// And finally -- play the game
playGame ();