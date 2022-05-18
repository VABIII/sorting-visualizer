const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
    return swap;
}


const bubbleSort = (arr, position, arraySteps, colorSteps) => {
    let colorKey = [...colorSteps[colorSteps.length - 1]]

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) arr = swap(arr, j, j + 1)

            arraySteps.push([...arr]);
            colorKey[j] = 1;
            colorKey[j + 1] = 1;
            colorSteps.push([...colorKey]);
            colorKey[j] = 0;
            colorKey[j + 1] = 0;
        }
        colorKey[arraySteps.length - 1 - i] = 2;
        arraySteps.push([...arr]);
        colorSteps.push([...colorKey])
    }
    colorKey[arraySteps.length - 1] = new Array(arr.length).fill(2);
    return;
}

export default bubbleSort;












































