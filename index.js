let color = document.getElementById('colors')
let  body = document.body
let footer = document.getElementById('footer')
let names = document.getElementById('name')
let copy = document.getElementById('copy')
let message = document.getElementById('message')

color.addEventListener( 'change', function() {
   footer.value = color.value 
   names.innerText = color.value
   let cor = String(color.value)
   console.log(cor)
   body.style.backgroundColor = cor
    
})

footer.addEventListener('click', ()=>{
  footer.select()
 let text = document.execCommand('copy')  

if(text === true){
   message.style.visibility = 'visible'
   setTimeout(()=>{
      message.style.visibility = 'hidden'
   }, 1000)
}else{
   console.log('nada')
}
})


