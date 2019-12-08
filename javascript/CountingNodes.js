function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

function sizeOfBT(head){
    let queue = [head];
    let seen = new Set();
    let count = 0;
    while (queue.length !== 0) {
        let current = queue.pop();

        if (!seen.has(current.val)) {
            seen.add(current.val);
            count++;
        }

        if (current.left !== null) {
            queue.push(current.left)
        }

        if (current.right !== null) {
            queue.push(current.right)
        }
    }

    return count;
}

const Head = new Node(1)

Head.right = new Node(3)
Head.left = new Node(2)

Head.left.left = new Node(4)
Head.left.right = new Node(5)

Head.left.right.right = new Node(7)

console.log(sizeOfBT(Head))