// Promise.any Polyfill

// Promise.all([]).then(([]) => { /**List of values */}).catch(err => { /** Log Error */})

// const func1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Resovling 1')
//             reject(20)
//         }, 2000)
//     })
// }

// const func2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Resovling 2')
//             reject(10)
//         }, 3000)
//     })
// }

// Promise.any([func1(), func2()])
//     .then((values) => {
//         /**List of values */
//         console.log('List of values', values)
//     })
//     .catch((err) => {
//         /** Log Error */
//     })

// const myAnyPromise = (listOfTasks) => {
//     let count = 0
//     let result = null
//     return new Promise((resolve, reject) => {
//         listOfTasks.forEach((task, index) => {
//             task.then((value) => resolve(value)).catch(() => {
//                 count++
//                 if(count === listOfTasks.length) reject('All promises rejected')
//             })
//         })

        
//     })
// }

// myAnyPromise([func1(), func2()])
//     .then((values) => console.log(values))
//     .catch((err) => console.log(err))

// // Promise.all Polyfill

// // Promise.all([]).then(([]) => { /**List of values */}).catch(err => { /** Log Error */})

// const func1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Resovling 1')
//             // resolve(20)
//             reject('There is an error');
//         }, 2000)
//     })
// }

// const func2 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Resovling 2')
//             resolve(10)
//         }, 1000)
//     })
// }

// // Promise.all([func1(), func2()])
// //     .then((values) => {
// //         /**List of values */
// //         console.log('List of values', values)
// //     })
// //     .catch((err) => {
// //         /** Log Error */
// //     })

// const myPromisePolyfill = (listOfTasks) => {
//     let count = 0;
//     return new Promise((resolve, reject) => {
//         const values = [];

//         listOfTasks.forEach((task, index) => {
//             task.then(value=> {
//                 values[index] = value;
//                 count++;

//                 if(count === listOfTasks.length) resolve(values);
//             }).catch(err => {
//                 reject(err);
//             });
//         });
//     });
// }

// myPromisePolyfill([func1(), func2()])
//     .then((values) => {
//         /**List of values */
//         console.log('List of values', values)
//     })
//     .catch((err) => {
//         console.log('Error executing promise\n', err)
//         /** Log Error */
//     })
