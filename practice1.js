// Polyfills of reduce

// const arr = [1, 2, 3, 4]

// const res = arr.reduce((acc, num) => {
//     acc += num;
//     return acc;
// }, 0)

// Array.prototype.myReduce = function(callback, initializer){
//     if(!callback) return 0;

//     let accumulator = initializer;

//     for(var i = 0; i < this.length; i++) {
//         if(accumulator) {
//             accumulator = callback(accumulator, this[i])
//         } else {
//             accumulator = this[i];
//         }
//     }

//     return accumulator;
// }

// Array.prototype.myForEach = function(cb, thisArgs) {
//     if(!cb) return;

//     for(var i = 0; i < this.length; i++) {
//         callback.call(thisArgs, this[i], i, this);
//     }
// }

// const res2 = arr.myReduce((acc, num) => {
//     acc += num;
//     return acc;
// }, 0);


// console.log({ res2 })

// var obj = {
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

// var flatten = function(input, path, op) {
//     if(typeof input === 'object') {
//         //  call recursively

//     } else {
//     }
// }

// var flattenObject = function (input) {
//     let path = [];
//     let op = {};
//     let output = flatten(input, path, op);
// }

// var flat = flattenObject(obj)

// console.log(flat) // {a: 1, "b.c": 2, "b.d.e": 3, "f.g": 4, "f.h": 5}

// let obj = {
//     message: 'Hello',
//     get message() {
//         return this._message
//     },
//     set message(value) {
//         this._message = value
//     },
// }
// console.log('Obj', obj.message)
