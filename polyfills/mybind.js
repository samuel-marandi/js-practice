const Person = {
    name: 'Sam',
    address: 'India',
    getDetails: function (param1, param2) {
        console.log(this)
        console.log(`${this.name} lives in ${this.address}. Param1: ${param1}, Param2: ${param2}`);
    }
}

const Person2 = {
    name: 'John',
    address: 'US'
}

// const bound = Person.getDetails.bind(Person2);

// Function.prototype.myBind = function(refObj, ...args) {
//     const fn = this;
//     if(!refObj) return undefined;
//     if(typeof fn !== 'Function')  return undefined;

//     // this -> function to copy

//     return function(...newArgs) {
//         return fn.apply(refObj, [...args, ...newArgs]);
//     }
// }

// const bound2 = Person.getDetails.bind(Person2, "test");

// console.log(bound2("Boom"));


// console.log(Person.getDetails.call(Person2))