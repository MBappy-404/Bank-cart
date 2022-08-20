document.getElementById('btn-widthdraw').addEventListener('click', function(){


     const widthdrawField = document.getElementById('widthdraw-field');
     const newWithdrawAmmountString = widthdrawField.value;
     const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

     if(isNaN(newWithdrawAmmount)){
          alert('Please Enter a Valid Number')
          return;
     }

     const WithdrawTotalElement = document.getElementById('widthdraw-total');
     const previousWithdrawTotalString = WithdrawTotalElement.innerText;
     const previousWithdraeTotal = parseFloat(previousWithdrawTotalString);
     
    
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBlanceTotalString = balanceTotalElement.innerText;
     const previousBlanceTotal = parseFloat(previousBlanceTotalString);

     widthdrawField.value = '';

     if(newWithdrawAmmount > previousBlanceTotal){
          alert('Bap Er Bank E Ato Tk Nai')

          return;
     }

     const currentWIthdrawTotal = previousWithdraeTotal + newWithdrawAmmount;
     WithdrawTotalElement.innerText = currentWIthdrawTotal;


     const newBalanceTotal = previousBlanceTotal - newWithdrawAmmountString;
     balanceTotalElement.innerText = newBalanceTotal;

     const btnShopping = document.getElementById('last-btn');
     const hideText = document.getElementById('hide-text');
     if(newBalanceTotal === 0){

          btnShopping.style.display = 'block';
          hideText.style.display = 'none';  
     }
})

document.getElementById('last-btn').addEventListener('click', function(){

     window.location.href = 'shcart.html';
})