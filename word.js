// This module implements the functions that evaluate the word currently in play.
//

// First add the dependencies
const Letter = require("./letter.js");
const Lexicon = require ("./lexicon.js");
const lexicon = new Lexicon ();

const Word = function ()
{   
    this.Letters = [];

    this.init = function ()
    {   // Initialize the Word object, which includes randomly selecting a new word or phrase to solve and
        // setting (or resetting) those variables used to track the progress of the puzzle.

        var word = lexicon.pickWord().split ("");
        
        var wLength = word.length;
        for (var i=0; i<wLength; i++)
        {   this.Letters.push (new Letter (word[i]));
        
        }

        this.showWord ();
    }

    this.showWord = function (force = false)
    {   // Display the word with the correctly guessed letters.  Letters that have not been guessed are
        // displayed as underlines.

        var word = [];
        var lLength = this.Letters.length;
        for (var i=0; i<lLength; i++)
        {   
            if (force || this.Letters[i].guessed)
            {   word.push (this.Letters[i].letter)
            }
            else 
            {   word.push ("_")
            }
        }

        console.log ("\n", word.join (" "), "\n");
    }

    this.isCorrect = function (char)
    {   // Is the letter in the puzzle?

        var found = false;

        var lLength = this.Letters.length;
        for (var i=0; i<lLength; i++)
        {   // Iterate throught Letters[] to determine if char (the letter just guessed) is in the puzzle.
            // If it is, set a boolean value to true -- and continue interating through Letters[] -- char
            // may be in the puzzle more than once.

            // var check = this.Letters[i].evalLetter(char);
            // if  (check.guess) this.found = true;
            if  (this.Letters[i].evalLetter(char)) found = true;
        }

        return found;
    }

    this.isSolved = function ()
    {   // Call Letter.isGuessed() for each element in Letters[].  If all function calls return true,
        // the puzzle has been solved.  If ANY of the function calls returns false, the puzzle has not
        // been solved.

        var lLength = this.Letters.length;
        for (var i=0; i<lLength; i++)
        {   
            if (!this.Letters[i].isGuessed()) return false;
        }

        return true;
    }

    this.init();
}

module.exports = Word;