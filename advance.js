document.getElementById('btn-deposit').addEventListener('click', function(){

     // step 1 deposit ammount field and convert float////

     const depositField = document.getElementById('deposit-field');
     const newdepositAmountString = depositField.value;
     const newdepositAmount = parseFloat(newdepositAmountString);

     // step 2 disposit total and field clear ////

     depositField.value = '';

     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalStrting = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalStrting);

     const newdepositTotal = newdepositAmount + previousDepositTotal;
     depositTotalElement.innerText = newdepositTotal;
     
     // get current balance ////

     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     const newBalanceTotal = previousBalanceTotal + newdepositAmount;
     balanceTotal.innerText = newBalanceTotal;


})