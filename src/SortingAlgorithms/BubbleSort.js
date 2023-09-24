export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    bubbleSortHelper(array, array.length, animations);
    return animations;
}

function bubbleSortHelper(array, n, animations) {

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {

            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                swapped = true;
                animations.push([
                    {
                        index: j,
                        newHeight: array[j + 1]
                    },
                    {
                        index: j + 1,
                        newHeight: array[j]
                    }
                ]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            else {
                animations.push([
                    {
                        index: j,
                        newHeight: array[j]
                    },
                    {
                        index: j + 1,
                        newHeight: array[j + 1]
                    }
                ]);
            }

        }
        if(swapped === false) break;
    }

}


// export function getBubbleSortAnimations(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if(array[j] > array[j+1]){
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return array;
// }