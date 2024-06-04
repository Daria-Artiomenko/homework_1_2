'use strict'
const convertWindow = document.getElementById('convert'),
      input = document.getElementById('data'), 
      convertBtn = document.querySelector('.convert_btn'), 
      result = document.querySelector(".result_number");

      
function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
}

convertWindow.addEventListener('click', (e) => {
    if (e.target === convertBtn) {
        result.textContent = decimalToBinary(+input.value)
    }
})


