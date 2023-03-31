import "./style.css";
import { prepareArray, printToOutput } from "./utility";
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

const balanceBtn = document.getElementById('balanceBtn');

const treeOutputDiv = document.getElementById('treeOut');

//Event listeners
newElementsBtn.addEventListener('click', () => {
    //prepareArray
    const readyArray = prepareArray(newElementsInput.value);
    
    //create tree
    currentTree = new Tree();
    currentTree.root = currentTree.buildTree(readyArray);

    //output tree
    printToOutput(currentTree.root, treeOutputDiv);

});

insertElemBtn.addEventListener('click', () => {
    if (insertElemInput.value > 99) return; 

    currentTree.insertKey(insertElemInput.value);
    printToOutput(currentTree.root, treeOutputDiv);
});

deleteBtn.addEventListener('click', () => {
    currentTree.deleteKey(deleteElemInput.value);
    printToOutput(currentTree.root, treeOutputDiv);
});

findBtn.addEventListener('click', () => {
    const foundKey = currentTree.findKey(findElemInput.value);

    if (foundKey != null)
        console.log(currentTree.findDepth(findElemInput.value));
});

balanceBtn.addEventListener('click', () => {
    if (!currentTree.isBalanced()) { //prevent balancing already balanced tree
        currentTree.rebalance();
        printToOutput(currentTree.root, treeOutputDiv);
    }
});