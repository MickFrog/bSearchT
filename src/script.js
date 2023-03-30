import "./style.css";
import { prettyPrint, prepareArray } from "./utility";
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

//Event listeners
newElementsBtn.addEventListener('click', () => {
    //prepareArray
    const readyArray = prepareArray(newElementsInput.value);
    
    //create tree
    currentTree = new Tree();
    currentTree.root = currentTree.buildTree(readyArray);
    prettyPrint(currentTree.root);
});

insertElemBtn.addEventListener('click', () => {
    if (insertElemInput.value > 99) return; 

    currentTree.insertKey(insertElemInput.value);
    prettyPrint(currentTree.root);
});

deleteBtn.addEventListener('click', () => {
    currentTree.deleteKey(deleteElemInput.value);
    prettyPrint(currentTree.root);
});
