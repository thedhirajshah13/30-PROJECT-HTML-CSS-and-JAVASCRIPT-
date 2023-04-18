// Inisilisation 

const circle=document.querySelectorAll('.circle')
const next=document.querySelector('.next')
const prev=document.querySelector('.prev')
const path=document.querySelector('.path')


let activeCounter=1


// Listners and events

next.addEventListener('click',function(){
activeCounter++
if(activeCounter>circle.length){
    activeCounter=1
}
update()
})





prev.addEventListener('click',function(){
    activeCounter--
    if(activeCounter==0){
        activeCounter=1
    }
    update()
})


    
     
    


function update(){

    // Addijng Active Classes..
  circle.forEach((circles,idx)=>{

if(activeCounter>idx){
   
    circles.classList.add('active')
    
}
else{
    circles.classList.remove('active')
}
})

// Dealing with pathBar..
const active=document.querySelectorAll('.active')


console.log(((active.length-1)/(circle.length-1))*100)
path.style.width=((active.length-1)/(circle.length-1))*100+'%'

// handling Button...
if(activeCounter==1){
    prev.disabled=true;
}
else if(activeCounter===circle.length){
next.disabled=true
}
else{
    prev.disabled=false
    next.disabled=false
}

   
  


}


