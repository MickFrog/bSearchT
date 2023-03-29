import "./style.css";
import { mergeSort, prettyPrint, filterElements } from "./utility";
import Tree from "./binaryTree";

//Acquire elements
const newElementsInput = document.getElementById('arrayNums');
const newElementsBtn = document.getElementById('newElementsBtn');

newElementsBtn.addEventListener('click', () => {
    let rawInput = newElementsInput.value;

    //split elements
    rawInput = rawInput.split(' ');

    //
    const treeArray = filterElements(rawInput)
});