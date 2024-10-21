const display = document.getElementById("display");

// To make the number appear on the display box
function mainKeys(input){
    display.value += input
}

// To clear the display
function clearDisplay(){
    display.value = ""
}

// Calculate the display value
function calculate(){
    try{let expression = display.value;
    // Replace percentages with a valid mathematical expression
    expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    display.value = eval(expression);
    }
    // If there's any error, this 'catch' will catch the error(it knows the error from the console) replace it with a string 'Error' on display
    catch(error){
        display.value = "Error";
    }
    
}

// Delete last digit of the value
function del(){
    let currVal = display.value
    if (currVal.length > 0){
        display.value = currVal.slice(0, -1)
    }
}

// Idk if using chat gpt to help me make the del and percentages part is allowed or not