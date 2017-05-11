//VARIABLES//

var words = ["Arctic Monkeys", "Dorothy", "Gin Wigmore", "ZZ Ward", "Balkan Beat Box", "The Decemberists", "Major Lazer", "The Black Keys", "Gogol Bordello", "The Heavy", "X Ambassadors", "Sea Wolf"];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var lose = 0;
var guess = 10;

var letterGuessed
var allLettersGuessed = [];

// ---press any key to start
document.onkeydown = function(event) {

	// ---chooses new word
	var newWord = words[Math.floor(Math.random() * words.length)];
	newWord = newWord.replace(/abcdefghijklmnopqrstuvwxyz/gi, "_");
	document.getElementById("word").innerHTML = newWord;

	function displayToGuess() {
 		pattern=""
 		for(i=0;i<newWord.length;++i) {
 			if(letterGuess.indexOf(newWord.charAt(i)) != -1)
   			pattern += (newWord.charAt(i)+" ")
  			else pattern += "_ "
 			}
 	}

	// ---freeze word for the round
	// this.newword = newword;

	// ---displays blanks for new word... write new word length plus one in __
	// newWord = "_".repeat(word.length);

	// (function () {
	// 	var str = document.getElementById("word").innerHTML;
	// 	var res = str.replace(/abcdefghijklmnopqrstuvwxyz/gi, "_");
	// 	document.getElementById("word").innerHTML = res;
	// })();

// }

// // ---user presses a key
// document.onkeydown = function(event) {

	// ---Determines which key was pressed
	var letterGuess = event.key;

	// ---If event.key doesn't match letter in word, log letter in guessed, and reduce guesses remaining
	if (newWord.indexOf(letterGuess) === -1) {
		document.getElementById("guess").innerHTML = --guess;
		document.getElementById("letters").innerHTML = letterGuess;
		allLettersGuessed.push(letterGuess);
	}

	// ---if letter already appears in guessed, alert
	else if (allLettersGuessed.indexOf(letterGuess) > -1) {
		alert("You already guessed that!");
	}

	// ---else replace _ with letter guessed
	else if (newWord.indexOf(letterGuess) > -1) {
		
	}
}

// ---if guesses remaining = 0, then increase losses and generate new word
	if (guess === 0) {
		document.getElementById("lose").innerHTML = ++lose;
		alert("You lost! Try again?");
	}

// ---else if newword contains no _, increase wins, play song, reset guesses remaining and letters guessed, and highlight press any key
	else if (newWord.indexOf("_") === -1) {
		document.getElementById("win").innerHTML = ++win;
	} 


