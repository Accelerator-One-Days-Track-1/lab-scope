# JavaScript Scope Drills

In this lab, you’ll practice working with variable scope. You'll learn the differences between **global scope**, **function scope**, and **block scope**, as well as the behavior of variables declared using `var`, `let`, and `const`.

### Instructions:
In **scope.js**, complete each drill by writing the JavaScript code that satisfies the following requirements. Make sure to test your code by checking the console to understand how scope affects the variables.

---

## **Global Scope vs Local Scope**

1. **Global Variable**  
   Declare a variable `x` in the global scope, and print it to the console. Then, declare a variable `y` inside a function and try to print it outside the function. What happens?

2. **Function Scope with `var`**  
   Inside a function, declare a variable using `var` and print it both inside and outside the function. What happens when you try to access it outside the function?

3. **Function Scope with `let`**  
   Inside a function, declare a variable using `let` and print it both inside and outside the function. What happens when you try to access it outside the function?

---

## **Block Scope**

4. **Block Scope with `let` and `const`**  
   Inside a `for` loop, declare a variable using `let` and `const`, and print the value of the variable inside the loop. What happens if you try to access the variable outside the loop?

5. **Nested Block Scope**  
   Declare a variable inside an `if` block using `let` and try to access it outside of the block. Do the same for a `var` variable. How do their behaviors differ?

---

## **Scope Chains**

6. **Scope Chain**  
   Inside a function, declare a variable `a`. Then, inside an inner function, declare a variable `b`. Try to access both variables from the inner function. What happens if you try to access `a` from the outer function?

7. **Nested Function Scope**  
   Declare a variable inside an outer function. Then, inside a nested inner function, declare a variable and try to access both variables from the inner function. What do you observe?

---

## **Scope with Parameters**

8. **Function Parameter Shadowing**  
   Create a function with a parameter that has the same name as a variable outside the function. Try to access the parameter and the variable inside the function. What happens to the variable inside the function?

9. **Global Variable Overwritten by Function**  
   Declare a global variable, then create a function that reassigns it. Print the value of the global variable both before and after calling the function. What happens to the global variable after the function is executed?

---

## **BONUS: Advanced Scope**
_These are advanced topics. You will need more experience to tackle these_

10. **Closure Example**  
    Create a function that returns another function (a closure). The inner function should access a variable declared in the outer function. Try calling the inner function from outside and observe how the variable is accessible.

11. **Immediate Invoked Function Expression (IIFE)**  
    Create an IIFE that declares a variable and prints it to the console. Try accessing the variable outside the IIFE. What happens?

---

### **Submission Instructions**:
- Complete all drills in the file **scope.js**.
- Test each drill by running your code and checking the output in the console.
- Push your completed work to your repository and submit the link on Google Classroom.
- Be prepared to explain how your code works during a follow-up discussion.

Good luck and happy coding! 🚀
