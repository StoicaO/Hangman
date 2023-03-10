let word;

function getTheWord() {
    word = document.getElementById("wordInput").value; 
    for(let i = 0; i < word.length; ++i){
        let x = document.createElement("div");
        x.id = i;
        x.innerHTML = " _ ";
        x.style.display = "inline";
        const space = document.getElementById("lineSpace");
        space.appendChild(x);

    }
}
let tries = 6;
let numbersOfLetters = 0;
function checkTheLetter(){
    let letterSearched = document.getElementById("letterInput").value; 
    let getLetter = word.indexOf(letterSearched);
    const textMessage = document.getElementById("findOrNo");
    if (word[getLetter] === letterSearched){
        for(let i = 0; i < word.length; ++i){
            if(word[i] === letterSearched) {
                ++numbersOfLetters;
                const letter2 = document.getElementById(i);
                letter2.innerHTML = word[i];
            }
        }
        if(numbersOfLetters === word.length){
            textMessage.innerHTML = "You win!";
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").innerHTML = "Reset";
            document.getElementById("button2").onclick = function() {
                resetGame();
            }
            document.getElementById("reset").disabled = false;
            
        }
    } else {
        --tries;
        textMessage.innerHTML = " Wrong letter! You have left " + tries + " tries!";
        document.getElementById("wrongLetters").innerHTML = document.getElementById("wrongLetters").innerHTML + letterSearched + " ";
        if (tries == 0) {
            textMessage.innerHTML = "Game Over! The word is " + word;
            document.getElementById("button2").innerHTML = "Reset";
            document.getElementById("button2").onclick = function() {
                resetGame();
            }
            document.getElementById("button1").disabled = true;
            document.getElementById("reset").disabled = false;
        }       
    } 
}

function resetGame(){
    window.location.reload();
}