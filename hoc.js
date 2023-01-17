// A higher order function is a function which takes a function as an argument. This example is also an example of polymorphishm

// Here calculate is higher order function because it is taking operation as a function and then 
function calculate(operation, initialValue, numbers){
    let total = initialValue;
    for (const number of numbers){
        total = operation(total, number);
    };

    return total;
}

function sum(n1, n2){
    return n1 + n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

console.log(calculate(sum, 0, [1,2, 10, 12]));

console.log(calculate(multiply, 1, [3,4, 6, 7]));


// Another examples of polymorphism
// class Shape {
//     draw() {
//       console.log("Drawing a shape");
//     }
//   }
  
//   class Circle extends Shape {
//     draw() {
//       console.log("Drawing a Circle");
//     }
//   }
  
//   const shape = new Shape();
//   shape.draw(); // Output: "Drawing a shape"
//   const circle = new Circle();
//   circle.draw(); // Output: "Drawing a Circle"

// function getArea(shape) {
//     if (shape === "rectangle") {
//       return function(width, height) {
//         return width * height;
//       }
//     }
//     if (shape === "circle") {
//       return function(radius) {
//         return Math.PI * Math.pow(radius, 2);
//       }
//     }
//   }
  
//   console.log(getArea("rectangle")(5, 10)); // Output: 50
//   console.log(getArea("circle")(3)); // Output: 28.274333882308138
  