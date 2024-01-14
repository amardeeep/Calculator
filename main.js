//creating basic operation functions
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function power(base,expo){
    return base**expo;
}
//creating variables for numbers and operators
let number1=0;
let number2=0;
let operator="";
//creating operator function which takes an operator and numbers to return answer
function operate(number1,number2,operator){
    if (operator=="+"){return add(number1,number2)}
    else if(operator=="-"){return subtract(number1,number2)}
    else if(operator=="*"){return multiply(number1,number2)}
    else if(operator=="/"){return divide(number1,number2)}
    else if(operator=="pow"){return power(number1,number2)}
}
//creating basic html layout for the calculator
const butto=document.querySelector(".buttonOuter");

let arrayButtons=["1","2","3","4","5","6","7","8","9","+","-","*","/","POW","=","CLEAR"];
for(let i=1;i<=4;i++){
    let divRow=document.createElement('div');
    divRow.setAttribute('id',i);
    divRow.classList.add('divRow');
    butto.appendChild(divRow);
}
const divRow1=document.getElementById(1);
const divRow2=document.getElementById(2);
const divRow3=document.getElementById(3);
const divRow4=document.getElementById(4);

for(let i=0;i<arrayButtons.length;i++){   
    const button=document.createElement('button');
    const divButton=document.createElement('div');
    button.setAttribute("id",arrayButtons[i]);
    button.classList.add("buttons")
    button.textContent=arrayButtons[i];
    divButton.classList.add("buttons");
    divButton.appendChild(button);
    if(i<4){
        divRow1.appendChild(divButton);   
    }
    else if(i>=4&&i<8){
        divRow2.appendChild(divButton);
    }
    else if(i>=8&&i<12){
        divRow3.appendChild(divButton);
    }
    else{
        divRow4.appendChild(divButton);
    }
}


