const arr = [1,2,3,4,5];


Array.prototype.myMap = function(callback) {
    let res = [];

    for(let i = 0; i < this.length; i++) {
        const result = callback(this[i], i);
        res[i] = result;
    }

    return res;
}

Array.prototype.myFilter = function(callback) {
    let res = [];

    for(let i = 0; i < this.length; i++) {
        const result = callback(this[i], i);
        if(result) res.push(result);
    }

    return res;

}

Array.prototype.myReduce = function(callback, initializer) {
    if(!callback) return;

    let accumulator = initializer;

    for(let i=0; i < this.length; i++){
        if(accumulator) {
            accumulator = callback(accumulator, this[i]);
        } else {
            accumulator = this[i];
        }
    }

    return accumulator;
}

const res = arr.myReduce((acc, elem) => {
    acc = elem + acc;
    return acc;
});

// const res = arr.myFilter((elem) => {
//     if(elem % 2 === 0) return elem;
// });


// const res = arr.myMap((elem, i) => {
//     // console.log('Console: ', elem * i);
//     return elem * i;
// })

console.log(res);