// document.getElementById('btn-deposit').addEventListener('click', function(){
//      const depositField = document.getElementById('deposit-field');
//      const newdepositAmmountString = depositField.value;
//      const newdepositAmmount = parseFloat(newdepositAmmountString);

//      const deposittotal = document.getElementById('deposit-total');
//      const previousdeposittotalString = deposittotal.innerText;
//      const previousdeposittotalAmmount = parseFloat(previousdeposittotalString);

//      const currentDepositTotal = previousdeposittotalAmmount + newdepositAmmount;
//      deposittotal.innerText = currentDepositTotal;


//      const balanceTotalElement = document.getElementById('balance-total');
//      const previousBlanceTotalString = balanceTotalElement.innerText;
//      const previousBlanceTotal = parseFloat(previousBlanceTotalString);

//      const currenttTotalBalance = previousBlanceTotal + newdepositAmmount;

//      balanceTotalElement.innerText = currenttTotalBalance;

//      depositField.value = '';

// })


document.getElementById('btn-deposit').addEventListener('click', function () {

     // step 1
     const depositField = document.getElementById('deposit-field');
     const newdepositAmmountString = depositField.value;
     const newdepositAmmount = parseFloat(newdepositAmmountString);

     if(isNaN(newdepositAmmount)){
          alert('Please Enter a Valid Number')
          return;
     }

     const deposittotal = document.getElementById('deposit-total');
     const previousdeposittotalString = deposittotal.innerText;
     const previousdeposittotalAmmount = parseFloat(previousdeposittotalString);

     const currentDepositTotal = newdepositAmmount + previousdeposittotalAmmount;

     deposittotal.innerText = currentDepositTotal;

     // step 2 
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBlanceTotalString = balanceTotalElement.innerText;
     const previousBlanceTotal = parseFloat(previousBlanceTotalString);

     const currenttTotalBalance = previousBlanceTotal + newdepositAmmount;

     balanceTotalElement.innerText = currenttTotalBalance;



     depositField.value = '';


})
