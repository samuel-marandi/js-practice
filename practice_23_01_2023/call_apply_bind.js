// console.log('Hello');


const person = {
    name: 'John',
    address: 'India'
}

const person2 = {
    name: 'Sam',
    address: 'US'
}


function printDetails(city){
    console.log(`${this.name} lives in ${city}, ${this.address}`)
}


Function.prototype.myCall = function(thisObj, ...args) {
    const fn = this;
    if(!thisObj) {
        throw new Error('Custom Error: this is not defined');
    }
    if(typeof fn !== 'function') {
        throw new Error('this is not a function')
    }

    thisObj.fnRef = fn;
    thisObj.fnRef(...args);
}

// printDetails.myCall(person, 'New Delhi')

Function.prototype.myApply = function(thisObj, args) {
    const fn = this;
    if(!thisObj) {
        throw new Error('Custom Error: this is not defined');
    }
    if(typeof fn !== 'function') {
        throw new Error('this is not a function')
    }

    thisObj.fnRef = fn;
    thisObj.fnRef(...args);
}

// printDetails.myApply(person2, ['New York']);


Function.prototype.myBind = function(thisObj, ...args) {
    const fn = this;
    const refObj = thisObj;

    if(!thisObj) {
        throw new Error('Custom Error: this is not defined');
    }
    
    if(typeof fn !== 'function') {
        throw new Error('this is not a function')
    }

    // return function(...execArgs){
    //     fn.apply(thisObj, ...args, ...execArgs);
    // }
    return function(...newArgs) {
        console.log('Without Call, apply')
        refObj.fnRef = fn;
        refObj.fnRef(...args, newArgs);
    }
}


const print = printDetails.bind(person);

print('New Delhi');
