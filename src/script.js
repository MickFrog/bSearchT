import "./style.css";
import { prettyPrint, prepareArray } from "./utility";
import Tree from "./binaryTree";

//Globals
let currentTree = null;

//Acquire elements
const newElementsInput = document.getElementById('arrayNums');
const newElementsBtn = document.getElementById('newElementsBtn');

//Event listeners
newElementsBtn.addEventListener('click', () => {
    //prepareArray
    const readyArray = prepareArray(newElementsInput.value);
    
    //create tree
    currentTree = new Tree();
    currentTree.root = currentTree.buildTree(readyArray);
    prettyPrint(currentTree.root);
});