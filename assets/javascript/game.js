//VARIABLES//

var words = ["Arctic Monkeys", "Dorothy", "Gin Wigmore", "ZZ Ward", "Balkan Beat Box", "The Decemberists", "Major Lazer", "The Black Keys", "Gogol Bordello", "The Heavy", "X Ambassadors", "Sea Wolf"];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var lose = 0;
var guess = 10;

var allLettersGuessed = [];
var newWord = "";
var underscores = "";
var letterGuess = "";
var str = "";

// ---press space bar to start
document.onkeyup = function(e){
    if(e.keyCode == 32){

		// ---chooses new word
		newWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
		console.log(newWord);
		underscores = newWord.replace(/[a-z]/gi, "_");
		document.getElementById("word").innerHTML = underscores;
	}	

	// ---Determines which key was pressed
	var letterGuess = event.key;

  	if(options.indexOf(letterGuess) !== -1) {

	// ---If event.key doesn't match letter in word, log letter in guessed, and reduce guesses remaining
		if (newWord.indexOf(letterGuess) === -1) {

		// ---if letter already appears in guessed, alert
			if (allLettersGuessed.indexOf(letterGuess) > -1) {
				alert("You already guessed that!");
			}
			else {
			document.getElementById("guess").innerHTML = --guess;
			allLettersGuessed.push(letterGuess);

	  			str = "";
   				for (var i = 0; i < allLettersGuessed.length; i++) {
       				str += allLettersGuessed[i];
       			}
   					document.getElementById('letters').innerHTML = str;
	      	}
		}

		// ---else replace _ with letter guessed
		else if (newWord.indexOf(letterGuess) > -1) {
			for (var i = 0; i < newWord.length; i++) {
      			if (letterGuess === newWord[i]) {
           			underscores = underscores.substring(0, i) + letterGuess + underscores.substring(i + 1);
       				document.getElementById("word").innerHTML = underscores;
       			}
   			}		
		}
	}

	else {
		return;
	}

// ---if guesses remaining = 0, then increase losses, reset other counters, and offer play again
	if (guess === 0) {
		document.getElementById("lose").innerHTML = ++lose;
		alert("You lost! Try again?");
		document.getElementById("guess").innerHTML = 10;
		guess = 10;
		document.getElementById("letters").innerHTML = "";
		allLettersGuessed = [];

	}

// ---else if newword contains no _, increase wins, reset other counters, and offer play again
	else if (underscores.indexOf("_") === -1) {
		document.getElementById("win").innerHTML = ++win;
		alert("You won!  Your neck's safe... for now.  Play again?");
		document.getElementById("guess").innerHTML = 10;
		guess = 10;
		document.getElementById("letters").innerHTML = "";
		allLettersGuessed = [];
	} 
}

	


