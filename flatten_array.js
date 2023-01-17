let arr = [
    [1, 2],
    [3, 4],
    [[5, 6],[7, 8, 9]],
    [10, 11, 12, 13, 14, 15]
];

// let flatArray =  arr.reduce((acc, curVal) => {
//     return acc.concat(curVal);
// })

// let flatArray = [].concat.apply([], arr);
// let flatArray = [].concat(...arr);
let flatArray = arr.flat(Infinity);

console.log({ flatArray })