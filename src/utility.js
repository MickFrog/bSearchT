//Merge sort
export function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    //sort left half of array
    const mid = Math.floor(arr.length/2);
    const tempLeft = arr.slice(0, mid);
    const sortedLeft = mergeSort(tempLeft);
    
    //sort right half of array
    const tempRight = arr.slice(mid);
    const sortedRight = mergeSort(tempRight);
    
    //merge the two halves
    const finalArr = []
    while (sortedLeft.length && sortedRight.length) {
        if (sortedLeft[0] === sortedRight[0]) { //remove duplicates
            sortedLeft.shift();
            finalArr.push(sortedRight.shift())
            
        } else if (sortedLeft[0] < sortedRight[0]) {
            finalArr.push(sortedLeft.shift());

        } else {
            finalArr.push(sortedRight.shift());
        }
    }
    return [...finalArr, ...sortedLeft, ...sortedRight];
}

//prettyPrint
export const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.nextRight !== null) {
        prettyPrint(node.nextRight, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.nextLeft !== null) {
        prettyPrint(node.nextLeft, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

export function filterElements(myArr) {
    let filteredArray = [];
    let currNum = '';

    for (let i = 0; i < myArr.length; i++) {
        currNum = parseInt(myArr[i]);

        //non-numbers
        if (isNaN(currNum)) continue;

        //numbers greater than 100
        if (currNum > 99) continue;

        //add valid number
        filteredArray.push(currNum);
    }

    return filteredArray;
}