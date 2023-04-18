const Boxes=document.querySelectorAll('.box')

window.addEventListener('scroll',changeAnimation)

function changeAnimation(){
    // Gettin inner heigth of the window
    const windowsHeight=window.innerHeight/5 *4
      Boxes.forEach((box)=>{

        // getting top of the box array
   const boxPositio= box.getBoundingClientRect().top
//    all tghe box whose top is less than the height of window have show class add to them.
   if(boxPositio<windowsHeight){
    box.classList.add('show')
   }
    else{
        box.classList.remove('show')
    }
   })
}