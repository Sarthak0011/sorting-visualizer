export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min = Infinity;
        let minIndex = -1;

        for (let j = i + 1; j < n; j++) {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, array[i], j, array[j]]);
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }

        if (min < array[i]) {
            
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
        
            animations.push([i, minIndex]);
            animations.push([i, minIndex]);
            animations.push([i, array[i], minIndex, min]);
        

    }
    return animations;
}