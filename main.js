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
    document.getElementById('datumYear').value = this.value;
});

document.getElementById('cvc').addEventListener('input', function(){
    document.getElementById('cvc-number').value = this.value;
});

function checkInputLength(input){
    const maxLength = 3;
    
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

    for (let i = 0; i < value.length && digits.length < maxLength && value[i] <= '9'; i++){
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

    for (let i = 0; i < value.length && digits.length < maxLength && value[i] <= '9'; i++){
        if (value[i] >= '0' && i % 3 === 0){
           
        }
        digits += value[i];
    }
    
    input.value = digits;
    
}

function checkInputDataFormatTwo(input){
    const maxLength = 2;
    
    let value = input.value;
    let digits = '';
   
    for (let i = 0; i < value.length && digits.length < maxLength && value[i] <= '9'; i++){
        if (value[i] >= '0' && i % 3 === 0){
            // digits += '/';
        }
        digits += value[i];
    }
    
    input.value = digits;
   
}




function checkLengthName(input){
    const maxLength = 15;
    const value = input.value;
if (value.length > maxLength || /[^a-zA-Z]/.test(value)){
    input.value = value.substring(0, maxLength).replace(/[^a-zA-Z]/g, ' ')
    document.style.display = flex; 
}
}

document.addEventListener("DOMContentLoaded", function () {
    const fullInput = document.getElementById("card");
  
    const errorMessage = document.getElementById("wrong-card");
  
    fullInput.addEventListener("input", function () {
      if (fullInput.value.trim() === "") {
        errorMessage.classList.add("wrong-number");
      } else {
        errorMessage.style.visibility = "hidden";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fullInput = document.getElementById("cvc");
  
    const errorMessage = document.getElementById("error-cvc");
  
    fullInput.addEventListener("input", function () {
      if (fullInput.value.trim() === "") {
        errorMessage.classList.add("wrong-cvc");
      } else {
        errorMessage.style.visibility = "hidden";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fullInput = document.getElementById("exp");
  
    const errorMessage = document.getElementById("no-data");
  
    fullInput.addEventListener("input", function () {
      if (fullInput.value.trim() === "") {
        errorMessage.classList.add("wrong-data");
      } else {
        errorMessage.style.visibility = "hidden";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fullInput = document.getElementById("exp2");
  
    const errorMessage = document.getElementById("no-data");
  
    fullInput.addEventListener("input", function () {
      if (fullInput.value.trim() === "") {
        errorMessage.classList.add("wrong-data");
      } else {
        errorMessage.style.visibility = "hidden";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const containerBase = document.getElementById('basic');
  
    const complete = document.getElementById("done-message");
  
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();
        containerBase.style.visibility = "hidden";
        complete.style.display = "flex";
    });
  });



  document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    const input1 = document.getElementById('cardholderName').value.trim();
    const input2 = document.getElementById('card').value;
    const input3 = document.getElementById('exp').value;
    const input4 = document.getElementById('exp2').value;
    const input5 = document.getElementById('cvc').value;


    if (input1 && input2 && input3 && input4 && input5) {
        // document.getElementById('basic').style.visibility = "hidden";
        document.getElementById('done-message').classList.remove('hidden');
    } else {
        alert('Please, fill in all fields.');
    }
});

  document.addEventListener("DOMContentLoaded", function () {
   
    const submitButton = document.getElementById("continue");

    const containerBase = document.getElementById('basic');
  
    const complete = document.getElementById("done-message");
  
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();
        containerBase.style.visibility = "visible";
        complete.style.visibility = "hidden";
    });
  });


