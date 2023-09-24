export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
    if(startIndex === endIndex) return;

    const midIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, midIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray,midIndex+1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, midIndex, endIndex, auxiliaryArray, animations);
}

function doMerge(mainArray, startIndex, midIndex, endIndex, auxiliaryArray, animations) {
    let k = startIndex;
    let i = startIndex;
    let j = midIndex+1;

    while(i <= midIndex && j <= endIndex) {
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while(i <= midIndex){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j <= endIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}