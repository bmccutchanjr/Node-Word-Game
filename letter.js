// letter.js defines functions that represent a letter in the word the player is trying to guess.
//

const Letter = function (char)
{   // Letter represents each letter in the target word.

    this.letter = char.toUpperCase();                     // a letter that is in the word
    this.guessed = false;               // has this letter been guessed correctly

    this.init = function ()
    {   // To properly initialize the Letter object, we have to determine if the letter represents one of
        // the two non-letter characters (an apostrophe or space) that may be in the word.  I'm not making
        // the player guess those.

        if ([" ", "'"].indexOf (this.letter) !== -1)
            this.guessed = true;
        else
            this.guessed = false;
    }

    this.evalLetter = function (char)
    {   // Evaluate the letter passed into this function.  If that letter is in the puzzle word return that
        // letter.  If not, return an underscore.

        // One more thing...if the letter was correctly guessed previously, return the letter...actually
        // return an object with properties letter and guess.  letter is the parameter passed to this
        // function.  guess is a boolean value indicating if the letter passed into this function is in
        // the puzzle.

        // if (this.guessed) return { letter: char, guess: false };
        if (["'", " "].indexOf(char) !== -1)
            return false;

        if (char === this.letter)
        {   this.guessed = true;
            return true;
        }
        else
            return false;
    }

    this.isGuessed = function ()
    {   return this.guessed;
    }

    this.init();
}

module.exports = Letter;