//Hangman Game

// write function to randomly choose a word.
// generate spaces for each letter of a word.
// has to reveal the letters as they are guessed
// recognize the win condition
// win/lose counter
// recognize loss condition
// list for letters that are already guessed
// list how many guesses are remaining
// automatically start new game
// list of words
// 


// Use key events to listen for the letters that your players will type.

var guesses = ["List of guesses"];

var item = items[Math.floor(Math.random()*items.length)];

function startGame() {
    ("#start").click(function(){
        var word = wordBank[Math.floor(Math.random()*wordBank.length)];
        var wordLength = word.length;
        // convert wordLength into an underscore for each character
    });
}

startGame();


// when they guess check they array, if guess is not in there then add it
// generate random number for the index of the array
// If they guess a letter that is in the array, have it only do that


document.addEventListener('keydown', function(event) {
    if (event.keyCode ) {
        ;
    }
 
});

var word = "abcd123456";
var userscores = word.replace(/.{1}/g, "_ ");

var word = "abcd123456";
var wordLength = word.length;
var underscores = "";
for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
}

var result = [];

for(var i = 0; i < wordLength; i++){
  result.push('_');
}

result.toString(); //returns _,_,_,_,_,_
result[0] //returns the first underscore
result[5] //returns the last underscore
result[2] = 'A'; // Replaces the third underscore with the letter 'A' (zero based)
result.toString(); //returns "_,_,A,_,_,_"

for(var i = 0; i < wordLength; i++) { 
    document.write(result[i] + '  ');  
  }

  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var wins = 0;
  var loses = 0;
  var guessesLeft, guessedLetters, letterToGuess;
  
  resetGame();
  display();
  
  document.onkeyup = function(event) {
    var guess = event.key;
    if (guess === letterToGuess) {
      win();
    } else if (guessesLeft - 1 === 0) {
      lost();
    } else {
      fail(guess);
    }
  
    display();
  }
  
  function display() {
    var winsP = document.getElementById("wins");
    var losesP = document.getElementById("loses");
    var guessLeft = document.getElementById("guessLeft");
    var letterGuessed = document.getElementById("guessed");
    winsP.innerHTML = wins;
    losesP.innerHTML = loses;
    guessLeft.innerHTML = guessesLeft;
    letterGuessed.innerHTML = guessedLetters.join(',');
  }
  
  function win() {
    wins++;
    resetGame();
  }
  
  function lost() {
    loses++;
    resetGame();
  }
  
  function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
  }
  
  function resetGame() {
    guessesLeft = 12;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess: " + letterToGuess);
  }

  // More code

  window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Films";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The Chosen Category Is Cities";
      }
    }
  
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
        // Animate man
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
     // Hangman
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
      categories = [
          ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
          ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
          ["manchester", "milan", "madrid", "amsterdam", "prague"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
    // Hint
  
      hint.onclick = function() {
  
        hints = [
          ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
          ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
          ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
    };
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }
  
  