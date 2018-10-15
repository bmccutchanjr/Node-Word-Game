// A very simmple module.  Lexicon defines the words know to this application and provides a function to
// randomly select one of those words.

const Lexicon = function ()
{   const words =
    [   "ATHENS",
        "BEIJING",
        "BERN",
        "BOGOTA",
        "BONN",
        "BRASILIA",
        "BUENOS AIRES",
        "CAIRO",
        "CANBERRA",
        "CARACAS",
        "HELSINKI",
        "JAKARTA",
        "JERUSALEM",
        "LA PAZ",
        "LIMA",
        "LISBON",
        "LONDON",
        "MADRID",
        "MEXICO CITY",
        "MINSK",
        "MOSCOW",
        "NEW DELHI",
        "ONTARIO",
        "OSLO",
        "RABAT",
        "PARIS",
        "RIYADH",
        "ROME",
        "SANTIAGO",
        "SEOUL",
        "STOCKHOLM",
        "TAIPEI",
        "TEGUCIGALPA",
        "TEHRAN",
        "TOKYO",
        "RIGA",
        "VIENNA",
        "VILNIUS",
        "WARSAW",
        "WELLINGTON"
    ]

    this.pickWord = function ()
    {   return words[Math.floor(Math.random() * words.length)];
    }
}

module.exports = Lexicon;