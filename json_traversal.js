const input = {
    A: {
        B: {
            C: 2,
        },
        D: {
            E: {
                F: 3,
            },
        },
    },
    G: {
        H: {
            I: 4,
        },
    },
};

// Output
// A.B.C:2
// A.D.E.F:3
// G.H.I:4

const input2 = {
    F: 3,
    D: {
        X: 1,
    },
    E: {
        F: {
            M: 12,
        },
    },
};

var path = [];
var pObj = {};

// var pushTo

var traverseJSON = function (input, p = []) {
    console.log('Input', input);
    console.log('TPath', p);

    const topLevelKeys = Object.keys(input);

    topLevelKeys.forEach((key) => {
        if (typeof input === 'object') {
            const nextKey = Object.keys(input);
            p = [...p, ...nextKey];
            // console.log(':::::::::::::::::', input);
            // console.log('---------------', p);
            // console.log('$$$$$$$$$$$$$', nextKey);
            return traverseJSON(input[nextKey], p);
        } 
    });

    return p;
};

var getPaths = function (input, path = []) {
    if (typeof input === 'object') {
        Object.keys(input).forEach(key => {
            // console.log({ key, path });
            path.push(key);
            const finalPath = getPaths(input[key], path);
            console.log('FINAL PATH', finalPath)
        });
    } else {
        console.log('ELSE', input, path)
    }

    return path;
    // const topLevelKeys = Object.keys(input);

    // topLevelKeys.map((key) => {
        // const pathArray = traverseJSON(input[key], [key]);
        // return `${pathArray.join('.')}`;
    // });

    // console.log('Paths', paths);
};

getPaths(input);

// console.log('PATH', path);
// console.log('PATH', JSON.stringify(pObj, undefined, 4));

// debugger;
// const keys = Object.keys(input);

// keys.forEach((key) => {
//     // console.log({ key })
//     if(typeof input[key] === "object" ) {
//         path.push(key)
//         traverseJSON(input[key]);
//     } else {
//         // path.push(input);
//         const finalKey = Object.keys(input);
//         path.push(...finalKey);

//     //     console.log('\n\n\n')
//     //     console.log('ELSE::::::::::::::', input, finalKey);
//         console.log('Input with key::::',  input[key]);
//         // console.log('Input only :::::::',  input);
//         // console.log('Input final key:::',  finalKey);

//     //     pObj[input[key]] = finalKey;
//     }
// })

// return p;
// };

// var traverseTree = function (input) {
//     let path = [];
//     if (typeof input === 'object') {
//         for (elem in input) {
//             path.push(elem);

//             const traversedPath = traverseTree(input[elem]);

//             path.push(traversedPath);
//         }
//     } else {
//         path.push(input)
//     }
//     return path.filter(Boolean).join('.');
// };
