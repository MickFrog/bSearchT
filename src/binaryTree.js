import { mergeSort, prettyPrint } from "./utility";

class Node{
    value = 0;
    nextLeft = null;
    nextRight = null;

    constructor(val = 0) {
        this.value = val;
    }
}

class Tree{
    root = null;

    buildTree(arr) {
        if (arr.length < 1) return null;
            
        if (arr.length == 1) return new Node(arr[0]);

        //get middle elem
        const mid = Math.floor(arr.length/2);

        //create left treeNode with middle elem
        let rootNode = new Node(arr[mid]);
        
        //recursively build left sub tree with left half of array 
        rootNode.nextLeft = this.buildTree(arr.slice(0, mid));

        //recursively build right sub tree with right half of array
        rootNode.nextRight = this.buildTree(arr.slice(mid+1));

        //return root of balanced BST
        return rootNode;
    }

    insertKey(newKey, rootNode=this.root) { // insertion is done at the leaf nodes
        //if leaf node is reached, add newLey
        if (rootNode == null) {
            rootNode = new Node(newKey);
            return rootNode;
        }

        //otherwise, keep traversing down the tree appropriately
        if (newKey < rootNode.value) 
            rootNode.nextLeft = this.insertKey(newKey, rootNode.nextLeft);

        if (newKey > rootNode.value) 
            rootNode.nextRight = this.insertKey(newKey, rootNode.nextRight);

        return rootNode;
    }

    findKey(valKey, rootNode=this.root) {
        //traverse tree comparing keys
        if (rootNode == null || rootNode.value == valKey) return rootNode;

        if (valKey < rootNode.value)
            return this.findKey(valKey, rootNode.nextLeft);

        return this.findKey(valKey, rootNode.nextRight);
    }
}