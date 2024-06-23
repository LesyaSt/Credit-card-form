// alert()

document.getElementById('cardholderName').addEventListener('input', function(){
    document.getElementById('jmeno').value = this.value;
});

document.getElementById('card').addEventListener('input', function(){
    document.getElementById('front-card').value = this.value;
});

document.getElementById('exp').addEventListener('input', function(){
    document.getElementById('datum').value = this.value;
});
document.getElementById('exp2').addEventListener('input', function(){
    document.getElementById('datum').value = this.value;
});

document.getElementById('cvc').addEventListener('input', function(){
    document.getElementById('cvc-number').value = this.value;
});

function checkInputLength(input){
    const maxLength = 3;
    // let 
    let value = input.value;
    let digits = '';
    for (let i = 0; i < value.length && digits.length < maxLength; i++){
        if (value[i] >= '0' && value[i] <= '9'){
            digits += value[i];
        }
    }
    input.value = digits;
}

// вывод номера карты по 4 числа
function checkInputLengthCard(input){
    const maxLength = 20;
    
    let value = input.value;
    let digits = '';

    for (let i = 0; i < value.length && digits.length < maxLength; i++){
        if (value[i] >= '0' && i % 5 === 0){
            digits += ' ';
        }
        digits += value[i];
    }
    
    input.value = digits;
    
}

function checkInputDataFormat(input){
    const maxLength = 2;
    
    let value = input.value;
    let digits = '';

    for (let i = 0; i < value.length && digits.length < maxLength; i++){
        if (value[i] >= '0' && i % 3 === 0){
           
        }
        digits += value[i];
    }
    
    input.value = digits;
    
}
function checkInputDataFormatTwo(input){
    const maxLength = 3;
    
    let value = input.value;
    let digits = '';

    for (let i = 0; i < value.length && digits.length < maxLength; i++){
        if (value[i] >= '0' && i % 3 === 0){
            digits += '/';
        }
        digits += value[i];
    }
    
    input.value = digits;
    
}