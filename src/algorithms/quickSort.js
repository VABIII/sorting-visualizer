import insertStep from "./insertStep";

const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
    return arr;
}

const pickPivot = array => {
    let a = array[0],
     b = array[Math.floor(array.length / 2)],
     c = array[array.length - 1];

    let middleValue = [a, b, c].sort()[1];
    let middleIndex = array.indexOf(middleValue);

    return middleIndex;
}



const quickSort = (array, position, arraySteps, colorSteps) => {
    if (array.length < 2) {
        insertStep(array, position, arraySteps);

        let colorKey = colorSteps[colorSteps.length - 1].slice();
        colorKey[position] = 2;
        colorSteps.push(colorKey);
        return;
    }


    swap(array, pickPivot(array), array.length - 1);
    insertStep(array, position, arraySteps);
    colorSteps.push(colorSteps[colorSteps.length - 1].slice());

    let pivot = array[array.length - 1];
    let A = 0;
    let B = array.length - 1;

    /** Here we need to swap the small value from right with big value from left **/
    while (A < B) {
        while (array[A] < pivot) {
            insertStep(array, position, arraySteps);
            let colorKey = colorSteps[colorSteps.length - 1].slice();
            colorKey = colorKey.map(key => key === 2 ? 2 : 0);
            colorKey[position + A] = 1;
            colorKey[position + B] = 1;
            colorSteps.push(colorKey);
            A++;
        }
        while (array[B] >= pivot) {
            insertStep(array, position, arraySteps);
            let colorKey = colorSteps[colorSteps.length - 1].slice();
            colorKey = colorKey.map(key => key === 2 ? 2 : 0);
            colorKey[position + A] = 1;
            colorKey[position + B] = 1;
            colorSteps.push(colorKey);
            B--;
        }
        if (A < B) {
            swap(array, A, B);
            insertStep(array, position, arraySteps);
            let colorKey = colorSteps[colorSteps.length - 1].slice();
            colorKey = colorKey.map(key => key === 2 ? 2 : 0);
            colorKey[position + A] = 1;
            colorKey[position + B] = 1;
            colorSteps.push(colorKey);
        }
    }

    /** swap big value with pivot **/
    let bigIndex = Math.max(A, B);

    swap(array, bigIndex, array.length - 1);
    insertStep(array, position, arraySteps);
    let colorKey = colorSteps[colorSteps.length - 1].slice();
    colorKey[position + bigIndex] = 2;
    colorSteps.push(colorKey);

    // recurse on two halves
    quickSort(array.slice(0, A), position, arraySteps, colorSteps);
    quickSort(array.slice(A + 1), position + A + 1, arraySteps, colorSteps);

    return;
}


export default quickSort;











































