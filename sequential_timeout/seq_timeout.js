/**
 * 
 * function printAfterMilliseconds(timeInMilliseconds) {
    setTimeout(() => {
      console.log(`Hello, ${timeInMilliseconds}`);
    }, timeInMilliseconds);
   }
    
    printAfterMilliseconds(200);
    printAfterMilliseconds(100);
    printAfterMilliseconds(300);

    Make changes to the above code such that it prints
    Hello 200
    Hello 100
    Hello 300

 */



function printAfterMilliseconds(timeInMilliseconds) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(`Hello, ${timeInMilliseconds}`);
        resolve(true);
        }, timeInMilliseconds);
    })
    
}
        
printAfterMilliseconds(200).then(res => {
    if(res) return printAfterMilliseconds(100)
}).then((res) => {
    if (res) printAfterMilliseconds(300)
});