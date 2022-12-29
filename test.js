// a(1)(2)(3)(4)(10)...(n)()
// e.g. add(4)(2)(3)(5)() = 14

let sum =  function (a) {
  return function (b) {
    if (b) {
      return sum(a+b); // it takes an argument and return a function which again can take an argument.
    }
    return a; // it will keep on adding 1+2+3+4..
  }
};

console.log(sum(1)(2)(4)()); //3

// function sum(a, b){
//   return a + b;
// }

// function a(input) {
//   // console.log('Here')
//   return function(secondInput){
//     // console.log('Here Inside', input)
//     // console.log('Here Inside', secondInput)
//     if(secondInput) {
//       sum(input + secondInput);
//     }
    
//     return a;
//   }
// }



// const res = a(2)(3)(4)()

// console.log(res);