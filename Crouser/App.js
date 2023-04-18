let timer=1
setInterval(changeImage,3000)

function changeImage(){
    timer++
   
    
     if(timer>7){
        timer=1;
        document.querySelector('img').src='./image/image'+timer+'.jpg'

    }
    else{
        document.querySelector('img').src='./image/image'+timer+'.jpg'
    }
}