const imageRef=document.querySelector('.container')
const span=document.querySelector('span')


let count=0;

function changeOpacity(){
    span.innerHTML=count+'%'
    count++
    if(count==100){
        count=0
        console.log(count)
    }
    else{

        if(count==0){
            imageRef.style.opacity=0
        }
        else if(count==20){
            imageRef.style.opacity=0.2
        }
        else if(count==40){
            imageRef.style.opacity=0.4
        }
        else if(count==60){
            imageRef.style.opacity=0.6
        }
        else if(count==80){
            imageRef.style.opacity=0.8
        }
        else if(count==100){
            imageRef.style.opacity=1
        }
    }
}

setInterval(changeOpacity,100)