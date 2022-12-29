// Input:

// [
//     [0, 2, 4, 1],
//     [1, 2, 1, 1],
//     [2, 4, 3, 0],
//     [0, 5, 2, 0]
//  ]
 
// Output:
// [2, 5, 4, 1] South side standing north
// [4, 2, 4, 5] West side standing east

const input = [
    [0, 2, 4, 1],
    [1, 2, 1, 1],
    [2, 4, 3, 0],
    [0, 5, 2, 0]
]

function findMaxInArray(arr){
    return Math.max(...arr);
}


function generateSouthSideStandingNorth(cityGrid) {
    const roof = [];
    for(let i = 0; i < cityGrid.length; i++) {
        let column = [];
        for(let j=0; j < cityGrid[i].length; j++) {
            column.push(cityGrid[j][i]);
        }

        roof.push(findMaxInArray(column));
    }

    return roof;
}

function generateWestFacingEastSide(cityGrid) {
    const roof = [];
    for(let i = 0; i < cityGrid.length; i++) {
        roof.push(findMaxInArray(cityGrid[i]));
    }

    return roof;
}

function generateSkylines(cityGrid) {
    const res = [];

    const sfn = generateSouthSideStandingNorth(cityGrid);
    const wfe = generateWestFacingEastSide(cityGrid);

    return [sfn, wfe];
}

const res = generateSkylines(input);