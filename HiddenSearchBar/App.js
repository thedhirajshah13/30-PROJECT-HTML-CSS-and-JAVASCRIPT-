const container=document.querySelector('.container')
const btn=document.querySelector('.btn')
const input=document.querySelector('.input1')

btn.addEventListener('click',function(){
container.classList.toggle('active')
input.focus()

})
