class Node {
    constructor(value){
        this.value = value;
    }
    searchLastNode(){
        if(this.leftNode){
            this.leftNode.searchLastNode();
        } 
        if(this.rightNode){
            this.rightNode.searchLastNode();
        }
        if(this.leftNode && this.rightNode){
            this.value = this.calculate(this.value,this.leftNode.returnValue(),this.rightNode.returnValue());
            return this.value
        }
        return this.value;
    }
    calculate(parentValue,leftValue,rightValue){
        if(parentValue === "+"){
            return leftValue + rightValue;
        } else if(parentValue === "-"){
            return leftValue - rightValue;
        } else if(parentValue === "*"){
            return leftValue * rightValue;
        } else {
            return leftValue / rightValue;
        }
    }
    returnValue(){
        return this.value;
    }
    getParentNode(){
        return this.parentNode;
    }
    setLeftNode(leftNode){
        this.leftNode = leftNode;
    }
    setRightNode(rightNode){
        this.rightNode = rightNode;
    }
    setParentNode(parentNode){
        this.parentNode = parentNode;
    }
}

module.exports = {
    Node,
}