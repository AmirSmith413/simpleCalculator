
let addBtn = document.getElementById('addBtn')
let subtractBtn = document.getElementById('subtractBtn')
let multiplyBtn = document.getElementById('multiplyBtn')
let divideBtn = document.getElementById('divideBtn')
let oneBtn = document.getElementById('oneBtn')
let twoBtn = document.getElementById('twoBtn')
let threeBtn = document.getElementById('threeBtn')
let fourBtn = document.getElementById('fourBtn')
let fiveBtn = document.getElementById('fiveBtn')
let sixBtn = document.getElementById('sixBtn')
let sevenBtn = document.getElementById('sevenBtn')
let eightBtn = document.getElementById('eightBtn')
let nineBtn = document.getElementById('nineBtn')
let zeroBtn = document.getElementById('zeroBtn')
let equalBtn = document.getElementById('equalBtn')
let clearBtn = document.getElementById('clearBtn')
let display = document.getElementById('display')
let num1 = 0;
let num2 = 0;
let operator = '';
let result;
let equals = false
//build num1
//save operator as string, an use logic to switch over to num2
//build num2
//equal btn will have mathematics of num1 and num2

addBtn.addEventListener('click', function(e){
  if (operator === '') {
    num1 = parseFloat(display.value);
    operator = '+';
    display.value = num1 + operator;
  }
else if(operator === '+'){
    num2 = parseFloat(display.value);
    display.value = num1 + operator + num2
}
});
  
subtractBtn.addEventListener('click', function(e){
  if (operator === '') {
    num1 = parseFloat(display.value);
    operator = '-';
    display.value = num1 + operator;
  }
else if(operator === '-'){
    num2 = parseFloat(display.value);
    display.value = num1 + operator + num2
}
  
})
multiplyBtn.addEventListener('click', function(e){
  if (operator === '') {
    num1 = parseFloat(display.value);
    operator = '*';
    display.value = num1 + operator;
  }
else if(operator === '*'){
    num2 = parseFloat(display.value);
    display.value = num1 + operator + num2
}
  
})
divideBtn.addEventListener('click', function(e){
  if (operator === '') {
    num1 = parseFloat(display.value);
    operator = '/';
    display.value = num1 + operator;
  }
else if(operator === '/'){
    num2 = parseFloat(display.value);
    display.value = num1 + operator + num2
}
})
oneBtn.addEventListener('click',function(e){
  display.value += '1'
  
})
twoBtn.addEventListener('click',function(e){
  
  display.value += '2'
})
threeBtn.addEventListener('click',function(e){
  
  display.value += '3'
})
fourBtn.addEventListener('click',function(e){
  
  display.value += '4'
})
fiveBtn.addEventListener('click',function(e){
  
  display.value += '5'
})
sixBtn.addEventListener('click',function(e){
  
  display.value += '6'
})
sevenBtn.addEventListener('click',function(e){
  
  display.value += '7'
})
eightBtn.addEventListener('click',function(e){
  
  display.value += '8'
})
nineBtn.addEventListener('click',function(e){
  
  display.value += '9'
})
zeroBtn.addEventListener('click',function(e){
  
  display.value += '0'
})
clearBtn.addEventListener('click',function(e){
  display.value = ''
})
equalBtn.addEventListener('click',function(e){
  
  result = eval(display.value)
  display.value = result
})
