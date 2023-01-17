function myFunction() {
    if (true) {
      var x = 5;   // function scope
      let y = 10;  // block scope
      const z = 15; // block scope, constant
    }
    console.log(x); // Output: 5
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
  }
  myFunction();
  