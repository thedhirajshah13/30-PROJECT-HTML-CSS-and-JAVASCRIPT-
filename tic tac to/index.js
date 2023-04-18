const btnref=document.querySelectorAll(".btn")
const restart=document.querySelector("#restart")
const buttondiv=document.querySelector(".button-sec")
let playagain=document.querySelector("#playagain")
const message=document.querySelector(".mes")
let winning=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],

]





let xturn=true;
let count=0;


let enable=function(){
    btnref.forEach((Element)=>{
        Element.innerHTML="";
        Element.disabled=false
        buttondiv.style.display="flex"
        playagain.style.display="none"

    })
}
// winning function..............

let winfunc=(letter)=>{
    if(letter=="X"){
message.innerHTML=letter+"wins"
buttondiv.style.display="none"
playagain.style.display="block"
    }
    else{
        message.innerHTML=letter+"wins"
        buttondiv.style.display="none"
        playagain.style.display="block"
    }
}
// if game draw
let draw=()=>{
    message.innerHTML="DRAW"
    buttondiv.style.display="none"
    playagain.style.display="block"

}
// winning pattern
let win=()=>{
    for(let i of winning){
        let [element1, element2,element3]=[
            btnref[i[0]].innerHTML,
            btnref[i[1]].innerHTML,
            btnref[i[2]].innerHTML,

        ]
        if(element1!=""&&(element2!="")&&(element3!="")){
            if(element1==element2 &&element2==element3){
                winfunc(element1);
            }
        }
    }
}





// if palyer want to restart game
restart.addEventListener("click",()=>{
    count=0;
    enable()
})
// if player want to playagain
playagain.addEventListener("click",()=>{
    enable();
    count=0;
})


// player start palying game;
btnref.forEach((Element)=>{
Element.addEventListener("click",()=>{
    // X turn........
    if(xturn){
        xturn=false;
        Element.innerHTML="x";
        Element.disabled=true;
        
        
    }
    // O turn..............
    else{
        Element.innerHTML="O"
        Element.disabled=true
        xturn=true;

    }
    count=count+1;
    if(count==9){
        draw()
    }
    win()
    
})

})
window.onload=enable
