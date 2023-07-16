function palin() {// function name 

  
    var inputVal = document.getElementById("palindrome").value;// get the input 
    var input = inputVal.toLowerCase();// changes the input to lower case letters


  var split = input.split(""); // splits the word into individual letters
  var reverse = split.reverse();// reverses the split word
  var revWord = reverse.join("");// joins the revers word
  var result = document.getElementById("result");// updates the result
  

    if (revWord == input) {// does the revword equal the initial input
      correct.innerHTML = "Correct";//correct message
      result.innerHTML = "It is a Palindrome, try another one";// in the reverse word is the same as the input display this 
    
      function sound(src){// add play function
        this.sound = document.createElement("audio") ;//create audio
        this.sound.src = src;//define src
        this.play = function() {//music function
            this.sound.play();//play sound
        }
    }
    mySound = new sound("service-bell_daniel_simion.mp3");//locates the sound needed to be played
    mySound.play();//plays the sound when correct


    } else {
      result.innerHTML = "It is  not a Palindrome, try again some examples (level, mom, noon, deed )"// if the reverse word is not the same as input then display this message
      correct.innerHTML = "";//correct message
    }
  

}