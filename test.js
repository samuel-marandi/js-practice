const Person = {
    name: 'Sam',
    address: 'India',
    getDetails: function() {
        console.log(`${this.name} lives in ${this.address}`);
    }
};

const Person2 = {
    name: 'John',
    address: 'Europe'
};


// Person.getDatails.call(Person2);

// Person.getDatails();

Function.prototype.myCall = function(refObj, ...args){
    console.log(this)
    console.log('In My Call')
    console.log(refObj)

    const fn = this;
    const fnArgs = args;
    if(typeof fn !== 'function') return undefined;
    if(!refObj) return undefined;

    refObj.fnRef = fn;
    refObj.fnRef(...fnArgs);

}

Person.getDetails.myCall(Person2);


// const input = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//         },
//     },
//     f: {
//         g: 4,
//         h: 5,
//     },
// }

// function traverse(tree, path, outputFragment) {
//     console.log(tree);

//     const keys = Object.keys(tree);    

//     keys.forEach((element) => {
//         if (typeof tree[element] === 'object') {
//             path.push(element)
//             traverse(tree[element], path, outputFragment)
//         } else {
//             path.push(element)

//             const consolidatedPath = path.join('.');

//             outputFragment[consolidatedPath] = tree[element]
//         }

//         path.pop()
//     });

//     return outputFragment;
// }

// function flattenObject(input) {
//     const path = []
//     const op = {}
//     const output = traverse(input, path, op)

//     console.log({ output })
// }

// flattenObject(input);

// a(1)(2)(3)(4)(10)...(n)()
// e.g. add(4)(2)(3)(5)() = 14

// let sum =  function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a+b); // it takes an argument and return a function which again can take an argument.
//     }
//     return a; // it will keep on adding 1+2+3+4..
//   }
// };

// console.log(sum(1)(2)(4)()); //3

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
