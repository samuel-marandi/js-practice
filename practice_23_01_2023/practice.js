
function debounce(fn, delay){
    console.log(this);

    let timeout = null;

    return function(){
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

function throttle(fn, delay) {
    let isReadyForCall = true;

    return function(){
        if(isReadyForCall) {
            fn.apply(this, arguments);
            isReadyForCall = false;

            setTimeout(() => isReadyForCall = true ), delay);
        }
    }
}

let throttledButtonClick = throttle(btnClick, 500);