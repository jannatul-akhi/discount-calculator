function getTextFieldById(fieldId) {
    const textField = document.getElementById(fieldId);
    const previousTotalAmountString = textField.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    return previousTotalAmount;
}

function setTextElementValueById(fieldId, newValue) {
    const textField = document.getElementById(fieldId);
    textField.innerText = newValue;
}


document.getElementById('btn-apply').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const takeInputValue = inputField.value;
    inputField.value = '';

    // get text field 
    const previousAmount = getTextFieldById('text-field');
    
    if (takeInputValue === 'DISC30') {

        // Calculation
        const discountAmount = previousAmount * 0.30;
        const totalPaymentAmount = previousAmount - discountAmount;

        // get the output field and set the output 
        const finalPaymentField = getTextFieldById('pay-field');
        setTextElementValueById('pay-field', totalPaymentAmount)
        return;
    }
    else {
        alert('Wrong discount code!!!');

        setTextElementValueById('pay-field', previousAmount)
    }

})