const incrementBtn = document.getElementById('increment');
//console.log(incrementBtn);
let quantityDisplay = document.getElementById('quantity')
//console.log(quantityDisplay)
const decrementBtn = document.getElementById('decrement')
//console.log(decrementBtn)
const addCartBtn = document.getElementById('add-cart')
//console.log(addCartBtn)
const mensaje= document.getElementById('mensaje')
const closeBtn=document.getElementById('close-btn')
//console.log(closeBtn)

let quantity = 0
decrementBtn.addEventListener('click',function(){
   quantity --

   if(quantity === 0){
    decrementBtn.disabled=true;
    addCartBtn.disabled=true;
    mensaje.style.display='none';
    quantityDisplay.innerText= quantity
   }
  
  
});

incrementBtn.addEventListener('click' , function(){
   quantity ++
   decrementBtn.disabled=false;
   addCartBtn.disabled=false;
   
   quantityDisplay.innerText=quantity

})
addCartBtn.addEventListener('click', function(){
   
   setTimeout(function(){
      mensaje.innerText= `${quantity} pairs of shoes has been adding to your cart.
      Thanks for shopping with us!`;
      mensaje.style.display='block';
   }, 1500)
  
})
closeBtn.addEventListener('click',function(){
   mensaje.style.display= 'none';
})
