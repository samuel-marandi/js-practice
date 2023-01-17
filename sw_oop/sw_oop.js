// function Stopwatch(){
//     const states = {
//         START: 'START',
//         STOP: 'STOP',
//         RESET: 'RESET'
//     }
//     let duration  = 0;
//     let intervalId = null;
//     let swState = states.STOP;
    

//     this.start = function() {
//         if(swState === states.STOP) {
//             intervalId = setInterval(function(){
//                 duration = duration + 1;
//             }, 1000);
//             swState = states.START;
//         } else {
//             throw new Error('Stopwatch already started');
//         }
        
//     }

//     this.stop = function() {
//         if(swState === states.START) {
//             clearInterval(intervalId);
//             swState = states.STOP;
//         } else {
//             throw new Error('Stopwatch already stopped');
//         }
//     }

//     this.reset = function() {
//         if(intervalId) {
//             clearInterval(intervalId);
//         }

//         duration = 0;
//         swState = states.STOP;
//     }

//     // this.duration = function(){
//     //     console.log(duration);
//     // }

//     Object.defineProperty(this, 'duration',  {
//         get: function() { 
//             return duration;
//         }
//     })
// }

class Stopwatch(){
    constructor(){

    }

    function start(){

    }

    function stop(){
        
    }
}

const sw = new Stopwatch();

console.log(sw);