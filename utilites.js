// function getInputFieldValueById(inputFieldId){
//      const inputField = document.getElementById(inputFieldId);
//      const getInputFieldValueString = inputField.value;
//      const getInputFieldValue = parseFloat(getInputFieldValueString);
//      inputField.value = '';

//      return getInputFieldValue;
// }

// function getTexElementVlaueById(elementId){
//      const textElement = document.getElementById(elementId);
//      const getTextElementValueString = textElement.innerText;
//      const getTextElementValue = parseFloat(getTextElementValueString);

//      return getTextElementValue;
// }

// function  setTextElementValueById(elementId, newValue){
//      const textElement = document.getElementById(elementId);
//      textElement.innerText = newValue;
// }


function getInputFieldValueById(inputFieldId){

     const inputField = document.getElementById(inputFieldId);
     const getInputFieldValueString = inputField.value;
     const getInputFieldValue = parseFloat(getInputFieldValueString);
     
     inputField.value = '';
     return getInputFieldValue;
}

function getTexElementVlaueById(elementId){

     const textElement = document.getElementById(elementId);
     const getTextElementValueString = textElement.innerText;
     const getTextElementValue = parseFloat(getTextElementValueString);
     
     return getTextElementValue;
}


function setTextElementValueById(elementId, newValue){

     const textElement = document.getElementById(elementId);
     textElement.innerText = newValue;
}