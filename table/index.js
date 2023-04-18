const icon=document.getElementById("icon")

icon.addEventListener("click",function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        icon.src="light.png"
    }
    else{
        icon.src="dark.png"
    }
})
const range=document.getElementById("range")
const number=document.getElementById("number")
const hello =document.getElementById("hello")
const radio=document.querySelectorAll(".radio")
range.addEventListener("change",function(){
    number.value=range.value
})

radio.forEach((radiobtn)=>{
    radiobtn.addEventListener("change",function(){
        number.value=radiobtn.value
    })
})