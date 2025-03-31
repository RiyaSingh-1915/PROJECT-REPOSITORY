var timer = 60 ;
var hitrn = 0;
var score = 0;

function makeBubble(){
    var clutter ="";

for(var i = 1; i<=168; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
    // in Math.random() , we always get values between 0 and 1 (never 0 or 1) i.e. point value, to solve that we do Math.random()*10
    // and to get floor value  Math.random(Math.random()*10)
}
document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint); // to clear the printed time and save/freeup memory 
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
// EVENT BUBBLING : Jispe click karoge vo element par eventListener raise hoga, aur eventListener naa milne par, event element ke parent par eventListener dhundega, aur agar parent pe bhi eventListener naa huwa toh, wo uss parent ke parent i.e.grandparent pe eventListener check karega. aise eventListener ke heirarchical tree ko "EVENT BUBBLING" kehete hai. PEHELE CHILD CHECK HOTA HAI, FIR USKA PARENT

// here in our case, we want to apply eventListener on bubble, but there are total 168 bubbles, thats not pracically possible, so we use "EVENT BUBBLING". here PARENT-> pbtm , CHILD-> bubble

document.querySelector("#pbtm").addEventListener("click",function(dets){
    //var clickednum = dets.target ---------------- initially
    // if we print above line we'll get the string in console WHICH WILL BE "BLACK" IN COLOR , IF IT'S NUMBER WE IT WILL BE "BLUE"
    // so from "dets.target" we get entire string like if we click 8 randomly, in console we will see
    // <div class="bubble">8</div>  .........but we want only 8, not entire string, so we do
    //var clickednum = dets.target.textcontent .......and to make it number we add NUMBER to this
    var clickednum = Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();
