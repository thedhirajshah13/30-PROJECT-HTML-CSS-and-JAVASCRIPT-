const imageRef=document.querySelector('.container')
const span=document.querySelector('span')


let count=50;

function changeOpacity(){
    count--;
    if(count<00){
        clearInterval()
    }
    else{
        console.log(count)
        span.innerHTML=count
        imageRef.style.filter=`blur(${count}px)`
    }
   
    
}

setInterval(changeOpacity,30)