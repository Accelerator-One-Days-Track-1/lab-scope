// JavaScript Scope Drills

// 1. Global Variable
// Declare a variable `x` in the global scope, and print it to the console. Then, declare a variable `y` inside a function and try to print it outside the function. What happens?

// 2. Function Scope with `var`
// Inside a function, declare a variable using `var` and print it both inside and outside the function. What happens when you try to access it outside the function?

// 3. Function Scope with `let`
// Inside a function, declare a variable using `let` and print it both inside and outside the function. What happens when you try to access it outside the function?

// 4. Block Scope with `let` and `const`
// Inside a `for` loop, declare a variable using `let` and `const`, and print the value of the variable inside the loop. What happens if you try to access the variable outside the loop?

// 5. Nested Block Scope
// Declare a variable inside an `if` block using `let` and try to access it outside of the block. Do the same for a `var` variable. How do their behaviors differ?

// 6. Scope Chain
// Inside a function, declare a variable `a`. Then, inside an inner function, declare a variable `b`. Try to access both variables from the inner function. What happens if you try to access `a` from the outer function?

// 7. Nested Function Scope
// Declare a variable inside an outer function. Then, inside a nested inner function, declare a variable and try to access both variables from the inner function. What do you observe?

// 8. Function Parameter Shadowing
// Create a function with a parameter that has the same name as a variable outside the function. Try to access the parameter and the variable inside the function. What happens to the variable inside the function?

// 9. Global Variable Overwritten by Function
// Declare a global variable, then create a function that reassigns it. Print the value of the global variable both before and after calling the function. What happens to the global variable after the function is executed?

// **BONUS: Advanced Scope**
// 🚨 These are advanced topics. You will need more experience to tackle these

// 10. Closure Example
// Create a function that returns another function (a closure). The inner function should access a variable declared in the outer function. Try calling the inner function from outside and observe how the variable is accessible.

// 11. Immediate Invoked Function Expression (IIFE)
// Create an IIFE that declares a variable and prints it to the console. Try accessing the variable outside the IIFE. What happens?
