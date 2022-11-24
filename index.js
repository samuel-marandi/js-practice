// Currying Closure

// let multiply = function(x) {
//     return function(y) {
//         console.log(x * y);
//     }
// }

// multiply(2)(3);

// let multiplyByTen = multiply(10);

// multiplyByTen(3);

// Currying Bind

// let multiply = function(x, y) {
//     console.log(x * y);
// }

// multiplyByTen = multiply.bind(this, 10);

// multiply(2,3);

// multiplyByTen(3)
// Closures

// function x(){
//     var a = 10;

//     function y(){
//         var b = 20;

//         function z(){
//             console.log(a+b);
//         }

//         z();

//     }

//     y();
// }

// x();

// Call, Apply, Bind
// let person = {
//     firstname: 'Sam',
//     lastname: 'Marandi',
    // printname: function(hometown, country){
    //     console.log(`${this.firstname} ${this.lastname} from ${hometown} in ${country}`)
    // }
// }

// function printname(hometown, country){
//     console.log(`${this.firstname} ${this.lastname} from ${hometown} in ${country}`)
// }

// let person2 = {
//     firstname: 'John',
//     lastname: 'Smith'
// }

// let person3 = {
//     firstname: 'Chris',
//     lastname: 'Evans'
// }

// printname.call(person, 'Guwahati', 'India');

// printname.apply(person2, ['Sydney', 'Australia']);

// printMyFunc2 = printname.bind(person3);

// printMyFunc2('Berlin', 'Germany')

// person.printname('Guwahati', 'India');

// person.printname.call(person2, 'Delhi', 'India');

// person.printname.apply(person3, ['Sydney', 'Australia'])


// printMyFunc = person.printname.bind(person3);

// console.log(printMyFunc);

// printMyFunc('Berlin', 'Germany');