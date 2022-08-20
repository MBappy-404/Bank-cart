document.getElementById('btn-widthdraw').addEventListener('click', function(){

     const widthdrawField = document.getElementById('widthdraw-field');
     const newWithdrawString = widthdrawField.value;
     const newWithdraw = parseFloat(newWithdrawString);

     widthdrawField.value = '';

    const widthdrawTotalElement = document.getElementById('widthdraw-total');
    const previousWithdrawTotalStrting = widthdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalStrting);

    const newWithdrawTotal = previousWithdrawTotal + newWithdraw;
    widthdrawTotalElement.innerText =  newWithdrawTotal;

    const balanceElement = document.getElementById('balance-total');
    const balanceTotalString = balanceElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const newBalanceTotal = balanceTotal -  newWithdraw;
    balanceElement.innerText = newBalanceTotal;
})