export function getQuickSortAnimations(array) {
    const animations = [];
    let start = 0;
    let end = array.length-1;
    quickSort(array, start, end, animations);
    return animations;
}

function quickSort(array, start, end, animations) {
    if(start >= end) return;

    let p = partition(array, start, end, animations);
    quickSort(array, start, p-1, animations);
    quickSort(array, p+1, end, animations);
}

function partition(array, start, end, animations) {
    let pivot = array[start];
    let pivotIndex = start;
    let count = 0;
    for(let i = start+1; i <= end; i++)  {
        animations.push([pivotIndex, i]);
        animations.push([pivotIndex, i]);
        animations.push([
            {
                index: pivotIndex,
                newHeight: array[pivotIndex]
            },
            {
                index: i,
                newHeight: array[i]
            }
        ]);
        if(array[i] <= pivot) count++;
    }

    let rightPos = start + count;
    swap(array, start, rightPos);
    pivotIndex = rightPos;
    animations.push([start, pivotIndex]);
    animations.push([start, pivotIndex]);
    animations.push([
        {
            index: start,
            newHeight: array[start]
        },
        {
            index: pivotIndex,
            newHeight: array[pivotIndex]
        }
    ]);

    let i=start, j=end;
    while(i < pivotIndex && j > pivotIndex) { 
        while(array[i] <= pivot) i++;
        while(array[j] > pivot) j--;
        if(i < pivotIndex && j > pivotIndex){
            swap(array, i, j);
            
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([
                {
                    index: i,
                    newHeight: array[i]
                },
                {
                    index: j,
                    newHeight: array[j]
                }
            ]);
            i++;
            j--;
        }
    }
    return pivotIndex;
}
function swap(array, i, j) { 
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}