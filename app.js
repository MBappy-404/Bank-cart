
function genaratePin(){
     const random = Math.round(Math.random()*10000);
     return random;
}

function getPin(){
     const pin = genaratePin();
     const pinString = pin + '';

     if(pinString.length === 4 ){

          return pin;
     }
     else{
         return getPin();
     }    
}

document.getElementById('genarte-pin').addEventListener('click', function(){
     const pin = getPin();
     const displayPinField = document.getElementById('display');
     displayPinField.value = pin;
})

document.getElementById('calc').addEventListener('click', function(event){

     const number = event.target.innerText;
     const displayPinField = document.getElementById('display-pin');
     const previousDisplayNumber = displayPinField.value;

     if(isNaN(number)){
          
          if(number === "C"){
               displayPinField.value = '';
          }
          else if(number === "<"){
               const digits = previousDisplayNumber.split('');
               digits.pop();
               const remainingDigites = digits.join('');
               displayPinField.value = remainingDigites;
          }
     }
     else{
          const newDisplayNumber = previousDisplayNumber + number;
          displayPinField.value = newDisplayNumber;
     }
})



document.getElementById('submit-btn').addEventListener('click', function(){

     const displayPinField = document.getElementById('display');
     const currentPin = displayPinField.value

     const newDisplayNumber = document.getElementById('display-pin');
     const displayNumber = newDisplayNumber.value;

     const pinSuccessMasage = document.getElementById('pin-success');
     const pinFailMasage = document.getElementById('pin-fail')

     const newOpenDoor = document.getElementById('open');


     if(currentPin === '' && displayNumber === ''){
          alert('Invalid Request!!!')
     }

     else if(currentPin === displayNumber){

          pinSuccessMasage.style.display = 'block';
          pinFailMasage.style.display = 'none';
          newOpenDoor.style.display = 'block';
        
     }
     else{
          pinFailMasage.style.display = 'block';
          pinSuccessMasage.style.display = 'none';
          newOpenDoor.style.display = 'none';
     }


})

document.getElementById('open').addEventListener('click', function(){

     window.location.href = 'login.html'

})