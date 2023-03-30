class Node{
    value = 0;
    nextLeft = null;
    nextRight = null;

    constructor(val = 0) {
        this.value = val;
    }
}

export default class Tree{
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

    #minValue(myRoot) {
        let minv = myRoot.value;
        while (myRoot.nextLeft != null)
        {
            minv = myRoot.nextLeft.value;
            myRoot = myRoot.nextLeft;
        }
        return minv;
    }

    deleteKey(delKey, rootNode=this.root) {
        //base case - tree empty
        if (rootNode == null) return rootNode;

        //otherwise traverse down the tree
        if (delKey < rootNode.value) {
            rootNode.nextLeft = this.deleteKey(delKey, rootNode.nextLeft);
            return rootNode;
        }

        if (delKey > rootNode.value) {
            rootNode.nextRight = this.deleteKey(delKey, rootNode.nextRight);
            return rootNode;
        }

        // node to be deleted operation
        if (rootNode.nextLeft == null) { //only right child
            rootNode = rootNode.nextRight;
            return rootNode;
        }

        if (rootNode.nextRight == null) { // only left child
            rootNode = rootNode.nextLeft;
            return rootNode;
        } 
        // find in-order successor
        // make it the node-to-be-deleted's value, then continue operation with right sub-tree 
        // to remove the duplicate in-order successor where it was gotten from.
        rootNode.value = this.#minValue(rootNode.nextRight)

        rootNode.nextRight = this.deleteKey(rootNode.value, rootNode.nextRight);
        return rootNode; 
    }

    // Breadth-First-Search
    levelOrder(rootNode=this.root) {
        if (rootNode == null) return;

        let myQueue = [];            //working queue
        myQueue.push(rootNode);

        while(myQueue.length) {
            let currNode = myQueue[0];
            console.log(currNode.value)

            //enqueue currNode children
            if (currNode.nextLeft != null) myQueue.push(currNode.nextLeft);
            if (currNode.nextRight != null) myQueue.push(currNode.nextRight);

            //dequeue curr Node
            myQueue.shift();
        }
    }

    // Depth-First-Search operations
    inOrder(rootNode=this.root) {
        if (rootNode == null) return [];

        let finalArr = [];
        const tempLeft = this.inOrder(rootNode.nextLeft);
        finalArr.push(rootNode.value);
        const tempRight = this.inOrder(rootNode.nextRight);

        return [...tempLeft, ...finalArr, ...tempRight];
    }

    preOrder(rootNode=this.root) {
        if (rootNode == null) return [];

        let finalArr = [];
        finalArr.push(rootNode.value);
        const tempLeft = this.preOrder(rootNode.nextLeft);
        const tempRight = this.preOrder(rootNode.nextRight);

        return [...finalArr, ...tempLeft, ...tempRight];
    }

    postOrder(rootNode=this.root) {
        if (rootNode == null) return [];

        let finalArr = [];
        const tempRight = this.postOrder(rootNode.nextRight);
        const tempLeft = this.postOrder(rootNode.nextLeft);
        finalArr.push(rootNode.value);

        return [...tempRight, ...tempLeft, ...finalArr];
    }

    //Height and Depth
    findHeight(rootNode=this.root) {
        // not 0 because it is a valid height
        if (rootNode == null) return -1;

        let leftfHeight = this.findHeight(rootNode.nextLeft);
        let rightHeight = this.findHeight(rootNode.nextRight);

        // 1 for the edge from root to its children
        return Math.max(leftfHeight, rightHeight) + 1;
    }

    findDepth(valKey, rootNode=this.root) {
        if (rootNode == null) return;
        if (rootNode.value == valKey) return 0;

        if (valKey < rootNode.value) {
            return this.findDepth(valKey, rootNode.nextLeft) + 1;
        }
        if (valKey > rootNode.value) {
            return this.findDepth(valKey, rootNode.nextRight) + 1;
        }
    }

    isBalanced() { //compare heights of two sub trees of root Node
        const myRoot = this.root;

        let leftfHeight = this.findHeight(myRoot.nextLeft);
        let rightHeight = this.findHeight(myRoot.nextRight);

        return Math.abs(leftfHeight - rightHeight) <= 1;
    }

    rebalance() {
        //treverse the tree and get its in-order array
        let newArr = this.inOrder();

        //build new Tree
        const newRoot = this.buildTree(newArr);

        //set old tree to new tree
        this.root = newRoot;
    }
}