const words=[
    "html","body","hello","sleep","hang","dune"
]

//keep track of clicked
let clickedWords=[];
const mainWord=words[Math.floor(Math.random()*words.length)];

const answerSection = document.getElementById('answer-section')

for(let i= 0;i<mainWord.length;i++){
    answerSection.innerHTML+=`<div class="answer-letters">
                                    <p class="answer-letter">${mainWord.charAt(i)}</p>
                                    <span>_</span>
                                </div>`
}

const letters=document.querySelectorAll('.letter');
let answerLetters=document.querySelectorAll('.answer-letter');
let answerLetter=document.querySelectorAll('.answer-letter')

//styling for the word's letters
for(let i=0;i<answerLetters.length;i++){
    answerLetters[i].style.cssText='display: flex; flex-direction: column;justify-content: center;align-items: center;'
    answerLetter[i].style.cssText='visibility:hidden'
}




let falseCounter = 0;
let trueCounter=0;

//function to compare the main word letters with our input
function compareLetter(input){
    let isEqual=false;
        
    for(let j =0; j<answerLetters.length;j++){
        
        if(input.toLowerCase()===answerLetters[j].innerHTML.toLowerCase()){
            isEqual=true;
            answerLetters[j].style.visibility='visible'; 
            trueCounter++;
        }
    }
   
    if(!isEqual){
        falseCounter++;
    }

    if(falseCounter==1){
        head()
    }else if(falseCounter==2){
        body()
    }else if(falseCounter==3){
        leftHand()
    }else if(falseCounter==4){
        rightHand()
    }else if(falseCounter==5){
        leftLeg()
    }else if(falseCounter==6){
        rightLeg()
    }
    if(falseCounter>=6){
        if( alert(`no more tries! the word was ${mainWord}`)){
            
        }else{
            window.location.reload()
        }

       
    }
    
    if(trueCounter===mainWord.length){
        if(alert(`well done! the word was ${mainWord}`)){
            
        }else{
            window.location.reload()
        }
    }
}


//for letters on screen
for(let i= 0;i<letters.length;i++){
    letters[i].addEventListener('click',function(button){
        
        compareClickedWords(button.target.innerHTML)
    })
   
}

//for keypress

document.onkeydown= function (e) {
    e = e || window.event;
    
    compareClickedWords(String.fromCharCode(e.keyCode))

};


//check if the world is clicked before

function compareClickedWords(word){
    let isClicked=true;

    if(clickedWords.length>0){
    for(let i =0 ; i<clickedWords.length ; i++){
        if(word===clickedWords[i]){
            isClicked=true;
            break;
        }else{
            isClicked=false;
        }

    }
    }else{
        isClicked=false;
    }
    if(!isClicked){
        clickedWords.push(word)
        compareLetter(word)
    }
}




