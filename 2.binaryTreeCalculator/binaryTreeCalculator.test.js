const { Node } = require('./binaryTreeCalculator');

test('calculate 1 + 2',()=> {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const nodePlus = new Node("+");
    nodePlus.setRightNode(node1);
    nodePlus.setLeftNode(node2);
    const result = nodePlus.searchLastNode();
    expect(result).toBe(3);
})

test('calculate 2 * 2 + 1',()=> {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const nodePlus = new Node("+");
    const node3 = new Node(2);
    const nodeMultiple = new Node("*");
    nodePlus.setRightNode(node1);
    nodePlus.setLeftNode(nodeMultiple);
    nodeMultiple.setLeftNode(node2);
    nodeMultiple.setRightNode(node3);
    const result = nodePlus.searchLastNode();
    expect(result).toEqual(5);
})