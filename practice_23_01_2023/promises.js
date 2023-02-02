function myFunc(timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Printing after ${timer} secs`)
            resolve(`Resolved ${timer}`)
        }, timer)
    })
}

// Promise.all([myFunc(100), myFunc(300), myFunc(200)]).then((values) =>
//     console.log(values)
// )


function myAllPromise(taskList){
    const values = [];
    let count = 0;
    
    return new Promise((resolve, reject) => {
        
        taskList.forEach((task, idx) => {
            task.then((value) => {
                console.log({ value })
                values[idx] = value;
                count++;

                if(count === taskList.length) {
                    console.log('Val', values);
                    resolve(values);
                } 
            }).catch(err => { reject(err) });

            
            
        });
    })
}



myAllPromise([myFunc(100), myFunc(300), myFunc(200)]).then((values) =>
    console.log('Printing VAL', values)
).catch(err => console.log('Err', err))

console.log(Promise.myAll)