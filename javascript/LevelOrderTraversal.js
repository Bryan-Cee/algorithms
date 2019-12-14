function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

function levelOrderTraversal(head) {
    let queue = [head];
    let result = [];
    while (queue.length !== 0) {
        let current = queue.pop();
        result.push(current.val);

        if (current.left !== null) {
            queue.unshift(current.left);
        }

        if (current.right !== null) {
            queue.unshift(current.right);
        }
    }

    return result;
}

const Head = new Node(1)
Head.left = new Node(2)
Head.right = new Node(3)
Head.left.left = new Node(4)
Head.left.right = new Node(5)

console.log(levelOrderTraversal(Head));
