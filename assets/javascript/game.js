

// This array contains all the possible correct letters to choose from:
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// These variables contain the total number of wins or losses:
var wins = 0;
var losses = 0;
var tries = 0;


// These variables contain the references to the HTML documents where we want to display the data:
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var livesText = document.getElementById("livesText")
var yourChoice = document.getElementById("choiceText");


// This function creates a random letter:
function getLetter(){
    var ranNum = (Math.floor((Math.random() * 25) +1));
    var ranLetter = letters[ranNum];
    var lives = 9;
    console.log(ranLetter)


    // This function runs whenever the user presses a key:
    document.onkeydown = function(event){

        // Determines which letter the user pressed:
        var userChoice= event.key;
        console.log(userChoice);

        // This logic determines the outcome of the game: win or loss
        if (userChoice === ranLetter){
        wins++;
        getLetter();
        } else {
        lives--;
            if(lives === 0){
                losses++;
                yourChoice.textContent = " ";
                getLetter()
            }
                for (var i =0; i < 10; i++){
                    console.log(lives);
                }
                yourChoice.append(userChoice);
        }
        
        // This displays the user's wins or losses:
        winsText.textContent = wins;
        lossesText.textContent = losses;
        livesText.textContent = lives;
    }
}

getLetter()