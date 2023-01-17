function buttonClick(){
    console.log('Button Clicked')
}

function throttle(fn, interval) {
    console.log(arguments)
    let isOpenForCall = true;
    return function(){
        if(isOpenForCall) {
            fn.apply(this, arguments);
            isOpenForCall = false;

            setTimeout(() => { isOpenForCall = true }, interval);
        }
    }
}

let throttledButtonClick = throttle(buttonClick, 500);