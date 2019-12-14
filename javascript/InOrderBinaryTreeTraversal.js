function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

function inOrderTraversal(head) { // L -> N -> R
    if(head !== null){
        inOrderTraversal(head.left);
        console.log(head.val);
        inOrderTraversal(head.right);
    }
}

const Head = new Node(1);
Head.left = new Node(2);
Head.right = new Node(3);
Head.left.left = new Node(4);
Head.left.right = new Node(5);

inOrderTraversal(Head);
