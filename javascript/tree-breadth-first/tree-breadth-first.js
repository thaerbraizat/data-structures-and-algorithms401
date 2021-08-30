class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


function breadthFirst(root) {
  if(!root)return null;
  let queue =[root];
  let result=[];
  while(queue.length>0){

    let vis =queue.shift();
    result.push(vis.value);
    console.log(vis.value);
    if(vis.left !== null){
      queue.push(vis.left);
    }
    if(vis.right !== null){
      queue.push(vis.right);
    }
  }
  return result;
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

// create a tree and pass root to it

console.log(breadthFirst(one));
// console.log(tree);
module.exports= {
  Node,
  breadthFirst
};
