const words=[
    "html","body","hello","sleep","hang","dune"
]
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
let falseCounter = 0;
let trueCounter=0;

//function to compare the letters with our input
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
        
       compareLetter(button.target.innerHTML)
    })
   
}

//for keypress

document.onkeydown= function (e) {
    e = e || window.event;
   compareLetter(String.fromCharCode(e.keyCode))
};







