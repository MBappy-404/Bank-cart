// document.getElementById('btn-deposit').addEventListener('click', function(){
//      const newDepositAmount =  getInputFieldValueById('deposit-field');
//      const previousDepositTotal = getTexElementVlaueById('deposit-total');
//      const newDepositTotal = previousDepositTotal + newDepositAmount;

//      setTextElementValueById('deposit-total', newDepositTotal);

//      const previousBalanceTotal = getTexElementVlaueById('balance-total');
//      const newBalanceTotal = previousBalanceTotal + newDepositAmount;

//      setTextElementValueById('balance-total', newBalanceTotal);
// })






document.getElementById('btn-deposit').addEventListener('click', function(){

     const newDepositAmount = getInputFieldValueById('deposit-field');
     const previousDepositTotal = getTexElementVlaueById('deposit-total');
     const newDepositTotal = previousDepositTotal + newDepositAmount;
     
     setTextElementValueById('deposit-total', newDepositTotal);

     const previousBalanceTotal = getTexElementVlaueById('balance-total');
     const  newBalanceTotal = previousBalanceTotal + newDepositAmount;

     setTextElementValueById('balance-total', newBalanceTotal);

})