document.getElementById('btn-apply').addEventListener('click', function(){
    const textField = document.getElementById('text-field');
    const givenAmountString = textField.innerText;
    const givenAmount = parseFloat(givenAmountString);
    
    const paymentField = document.getElementById('pay-field');
    
    const getDiscount = givenAmount * 0.30;
    const makePayment = givenAmount - getDiscount;
    
    paymentField.innerText = makePayment;


})