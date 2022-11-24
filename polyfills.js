const arr = [1, 2, 3, 4];
const arr2 = ['abc', 'def', 'ghi'];

var mulBy2CallBack = function (elem) {
    return elem * 2;
};

var mulBy3CallBack = function (elem) {
    return elem * 3;
};

var filterCallback = function (elem) {
    if(elem === 10) return true;
    return false;
}

var myMap = function (callback) {
    let arr = [];

    for (var i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }

    return arr;
};

var myForEach = function(callback) {
    if(!callback) return;
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

var myFilter = function(callback){
    if(!callback) return;

    let arr = [];
    
    for (var i = 0; i < this.length; i++) {
        res = callback(this[i], i, this);
        if(res) arr.push(this[i]);
    }

    return arr;
}

var myReduce = function(callback, initializer){
    if(!callback) return 0;
    // throw new TypeError('undefined is not a function');
    let accumulator = initializer;

    console.log({arr});

    for (i = 0; i < arr.length; i++) {
        if(accumulator) {
            accumulator = callback(accumulator, this[i])
            // callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
        
    }

    return accumulator;
}

Array.prototype.myMap = myMap;
Array.prototype.myForEach = myForEach;
Array.prototype.myFilter = myFilter;
Array.prototype.myReduce = myReduce;

const filteredItems = arr.myFilter(filterCallback)
const reduced = arr.reduce((acc, elem) => {
    acc += elem
    return acc;
}, 10);

const myReducedResult = arr.myReduce((acc, elem) => {
    acc += elem
    return acc;
});

// console.log('My Filter Items', filteredItems)
// console.log('Reduced Items', reduced);
console.log('My Reduce', myReducedResult);

// const mulBy2Actual = arr.map(mulBy2CallBack);
// const mulBy3Actual = arr.map(mulBy3CallBack);

// console.log('Mul By 2', mulBy2Actual);
// console.log('Mul By 3', mulBy3Actual);

// const mulBy2MyMap = arr.myMap(mulBy2CallBack);
// const mulBy3MyMap = arr.myMap(mulBy3CallBack);

// console.log(mulBy2MyMap);
// console.log(mulBy3Actual);

// arr.myForEach((element) => {
//     console.log(element * 10);
// })

// arr.myForEach();