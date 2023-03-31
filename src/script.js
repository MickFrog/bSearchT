import "./style.css";
import { prepareArray, printTree } from "./utility";
import Tree from "./binaryTree";

//Globals
let currentTree = null;

//Acquire elements
const newElementsInput = document.getElementById('arrayNums');
const newElementsBtn = document.getElementById('newElementsBtn');

const insertElemInput = document.getElementById('newNum');
const insertElemBtn = document.getElementById('addElementBtn');

const deleteElemInput = document.getElementById('deleteNum');
const deleteBtn = document.getElementById('deleteBtn');

const findElemInput = document.getElementById('findNum');
const findBtn = document.getElementById('findBtn');
const depthDisplay = document.getElementById('depthDisplay')

const balanceBtn = document.getElementById('balanceBtn');

const treeOutputDiv = document.getElementById('treeOut');

const treeStats = document.getElementById('stats');

//Event listeners
newElementsBtn.addEventListener('click', () => {
    //prepareArray
    const readyArray = prepareArray(newElementsInput.value);
    
    //create tree
    currentTree = new Tree();
    currentTree.root = currentTree.buildTree(readyArray);

    //output tree
    printTree(currentTree.root, treeOutputDiv);
    updateStats();
});

insertElemBtn.addEventListener('click', () => {
    if (insertElemInput.value > 99) return; 

    currentTree.insertKey(insertElemInput.value);
    printTree(currentTree.root, treeOutputDiv);
    updateStats();
});

deleteBtn.addEventListener('click', () => {
    currentTree.deleteKey(deleteElemInput.value);
    printTree(currentTree.root, treeOutputDiv);
    updateStats();
});

findBtn.addEventListener('click', () => {
    const foundKey = currentTree.findKey(findElemInput.value);

    if (foundKey != null) {
        depthDisplay.textContent = 'Depth of ' + findElemInput.value + ': ' + currentTree.findDepth(findElemInput.value);
        return;
    }
    depthDisplay.textContent = 'Number not in tree';
});

balanceBtn.addEventListener('click', () => {
    if (!currentTree.isBalanced()) { //prevent balancing already balanced tree
        currentTree.rebalance();
        printTree(currentTree.root, treeOutputDiv);
        updateStats();
    }
});

//functions
function updateStats() {
    //Clear Stats div
    while (treeStats.firstChild) {
        treeStats.removeChild(treeStats.firstChild);
    }

    //update height
    treeStats.appendChild(createPara("Height", currentTree.findHeight()));

    // update balance
    treeStats.appendChild(createPara("Balanced", currentTree.isBalanced()));

    //Level Order
    const levelOrderArray = currentTree.levelOrder();
    treeStats.appendChild(createPara("Level Order", levelOrderArray.toString()));

    //Pre-order
    const preOrderArray = currentTree.preOrder();
    treeStats.appendChild(createPara("Pre-order", preOrderArray.toString()));

    //In-order
    const inOrderArray = currentTree.inOrder();
    treeStats.appendChild(createPara("In-order", inOrderArray.toString()));

    //Post-order
    const postArray = currentTree.postOrder();
    treeStats.appendChild(createPara("Post-order", postArray.toString()));
}

function createPara(myField, myValue) {
    let newPara = document.createElement('p');

    newPara.innerHTML = myField + ': &nbsp;&nbsp;' + myValue;
    return newPara;
}