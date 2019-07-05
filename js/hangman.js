//variables
var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuesses = 6;
var words = ["snake", "monkey", "beetle"];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
]

// listeners
window.onload = startGame();

// functions
function startGame() {
  pickWord();
  initBoard();
  updateBoard();
}

function initBoard() {
  for (var letter in selectedWord) {
    board.push("_");
  }
}

function pickWord() {
  var randomInt = Math.floor(Math.random() * words.length);
  selectedWord = words[randomInt].toUpperCase();
}

function updateBoard() {
  for (var letter of board) {
    document.getElementById("word").innerHTML += letter + " ";
  }
}

function createLetters() {
  for (var letter of alphabet) {
    $("#letters").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
  }
}
//checks to see if selected letter exists in the array
function checkLetter(letter) {
  var positions = [];

  //put all positions the letter exists in an array
  for (var i = 0; i < selectedWord.length; i++) {
    console.log(selectedWord)
    if (letter == selectedWord[i]) {
      positions.push(i);
    }
  }
  if (positions.length > 0) {
    updateWord(positions, letter);
  } else {
    remainingGuesses -= 1;
  }

}
// update current word then call for board update
function updateWord(positions, letter) {
  for (var pos of positions) {
    board[pos] = letter;
  }
  updateBoard();
}

$("#letterBtn").click(function() {
  var boxVal = $("#letterBox").val();
  console.log("You pressed the button and it had the value: " + boxVal);
})

$(".letter").on("click", function() {
  checkLetter($(this).attr("id"));
});