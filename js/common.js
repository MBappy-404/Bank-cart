

// function getTextElementValueById(elementId) {

//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal = parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }


// function setTextElementValueById(elementId, value){
//     const subTotalElement = document.getElementById(elementId);
//     subTotalElement.innerText = value;


// }

// function calculateSubTotal(){


//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');

//     const currentSubTotal = currentCaseTotal + currentPhoneTotal;
//     setTextElementValueById('sub-total', currentSubTotal);



//     // tax////

//     const  taxAmountString = (currentSubTotal * 0.01).toFixed(2);
//     const taxAmount = parseFloat(taxAmountString);


//     setTextElementValueById('tax-amount', taxAmount);

//     const finalAmount = currentSubTotal + taxAmount;
//     setTextElementValueById('final-total', finalAmount);



//    }

function getTextElementValueById(elementId) {

        const phoneTotalElement = document.getElementById(elementId);
        const currentPhoneTotalString = phoneTotalElement.innerText;
        const currentPhoneTotal = parseInt(currentPhoneTotalString);
        return currentPhoneTotal;
    }

function setTextElementValueById(elementId, value){

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubTotal(){
    
const currentPhoneTotal =getTextElementValueById ("phone-total");
const currentCaseTotal = getTextElementValueById("case-total");


const currentSubTotal = currentCaseTotal + currentPhoneTotal;
setTextElementValueById('sub-total', currentSubTotal);

const taxAmountString = (currentSubTotal * 0.01).toFixed(1);
const taxAmount = parseFloat(taxAmountString)

setTextElementValueById('tax-amount', taxAmount)

const finalAmount = currentSubTotal  + taxAmount;
setTextElementValueById('final-total', finalAmount);


}

document.getElementById('confirm').addEventListener('click', function(){

    window.location.href = 'delever.html';
})

