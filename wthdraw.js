


// document.getElementById('btn-widthdraw').addEventListener('click', function(){

//      const newWithdrawAmount = getInputFieldValueById('widthdraw-field');
//      const previousWithdrawTotal =  getTexElementVlaueById('widthdraw-total');
//      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;


//      setTextElementValueById('widthdraw-total', newWithdrawTotal);

//      const previousBalanceTotal =  getTexElementVlaueById('balance-total');
//      const newBalanceTotal =  previousBalanceTotal - newWithdrawAmount;

//      setTextElementValueById('balance-total', newBalanceTotal);
     
// })






document.getElementById('btn-widthdraw').addEventListener('click', function(){

     const newWithdrawAmount = getInputFieldValueById('widthdraw-field');
     const previousWithdrawTotal = getTexElementVlaueById('widthdraw-total');
     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

     setTextElementValueById('widthdraw-total', newWithdrawTotal);


     const previousBalanceTotal = getTexElementVlaueById('balance-total');
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

     setTextElementValueById('balance-total', newBalanceTotal);
})