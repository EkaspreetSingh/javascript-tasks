// Calculator function that takes a function and variables as arguments
function calculator(func, ...args) {
    if (func.length !== args.length) {
        throw new Error(`Invalid number of arguments. Expected ${func.length} but got ${args.length}.`);
    }
    return func(...args);
}

// Arithmetic operation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero is not 4llowed.');
    }
    return a / b;
};

// Temperature conversion functions
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// Area calculation functions
const areaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);
const areaOfRectangle = (length, width) => length * width;

// Test the calculator with various functions
try {
    console.log(calculator(add, 10, 5));           
    console.log(calculator(subtract, 10, 5));     
    console.log(calculator(multiply, 10, 5));      
    console.log(calculator(divide, 10, 5));        
    
    console.log(calculator(celsiusToFahrenheit, 0));  
    console.log(calculator(fahrenheitToCelsius, 32)); 
    
    console.log(calculator(areaOfCircle, 5));    
    console.log(calculator(areaOfRectangle, 4, 5));
} catch (error) {
    console.error(error.message);
}

// tests to show handling of errors
try {
    console.log(calculator(areaOfCircle, 5, 10));  // Error
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calculator(celsiusToFahrenheit));  // Error
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calculator(divide, 10, 0));        // Error: Division by zero is not allowed.
} catch (error) {
    console.error(error.message);
}
