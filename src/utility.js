//Merge sort
function mergeSort(arr) {
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
const prettyPrint = (node, prefix = '', isLeft = true, myArr=[]) => {
    if (node === null) {
        return myArr;
    }

    if (node.nextRight !== null) {
        prettyPrint(node.nextRight, `${prefix}${isLeft ? '│&nbsp;&nbsp;&nbsp;' : '&nbsp;&nbsp;&nbsp;&nbsp;'}`, false, myArr);
    }
    myArr.push(`${prefix}${isLeft ? '└──&nbsp;' : '┌──&nbsp;'}${node.value}`);
    if (node.nextLeft !== null) {
        prettyPrint(node.nextLeft, `${prefix}${isLeft ? '&nbsp;&nbsp;&nbsp;&nbsp;' : '│&nbsp;&nbsp;&nbsp;'}`, true, myArr);
    }

    return myArr;
}

function filterElements(myArr) {
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

export function printTree(rootNode, myDiv) {
    //get output Array
    const outputArray = prettyPrint(rootNode);

    //clear output
    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }

    for (let i = 0; i < outputArray.length; i++) {
        // create a div element
        let textDiv = document.createElement('div');
    
        // add the text to created div
        textDiv.innerHTML = outputArray[i];
    
        //append to parent div
        myDiv.appendChild(textDiv);
    }
} 

export function prepareArray(rawInput) {
    //split elements
    rawInput = rawInput.split(' ');

    //filter array for binary tree
    const treeArray = filterElements(rawInput);

    //sort array
    return mergeSort(treeArray);
}