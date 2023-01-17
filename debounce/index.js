console.log('Hello World');

let counter = 0;

function getData(){
    console.log('Firing get Data', counter++)
}

function debounce(fn, delay){
    console.log(this);
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        // timeout = setTimeout(fn, delay);
        // timeout = setTimeout(() => {
        //     fn.apply(this, arguments);
        // }, delay)
    }
}

const debouncedGetData = debounce(getData, 300);