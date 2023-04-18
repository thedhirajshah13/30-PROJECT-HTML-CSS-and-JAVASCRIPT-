const images=document.querySelectorAll('.images')


images.forEach(Image=> {
  Image.addEventListener('click',(()=>{
    removeActiveClass()
    Image.classList.toggle('active')
  }))
});

function removeActiveClass(){
  images.forEach((image)=>{
    image.classList.remove('active')
  })
}