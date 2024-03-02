let list = linkedList();
list.append(1);
list.append(2);
list.prepend(3);
console.log(list.contains(5));

function linkedList(){
    return{
        head: node(),
        append(value){
            if(this.head.value === null){
                this.head.setValue(value);
            }
            else{
                let currNode = this.head;
                while(currNode.next!==null){
                    currNode = currNode.next;
                }
                let newNode = node();
                newNode.setValue(value);
                currNode.next = newNode;
            }
        },
        prepend(value){
            if(this.head.value === null){
                this.head.setValue(value);
                console.log(this.head);
            }
            else{
                let newNode = node();
                newNode.setValue(value);
                newNode.setNext(this.head);
                this.head = newNode;
            }
        },
        size(){
            //assumption: list will always have head, even if value is null
            let numNodes = 1; 
            let currNode = this.head;
            while(currNode.next!==null){
                numNodes++;
                currNode = currNode.next;
            }
            return numNodes;
        },
        headNode(){
            return this.head;
        },
        tail(){
            let currNode = this.head;
            while(currNode.next!==null){
                currNode = currNode.next;
            }
            return currNode;
        },
        at(index){
            let currNode = this.head;
            for(let i=1; i<index; i++){
                currNode = currNode.next;
            }
            return currNode;
        },
        pop(){
            let currNode = this.head;
            let prevNode;
            while(currNode.next!==null){
                prevNode = currNode;
                currNode = currNode.next;
            }
            currNode.value = null;
            prevNode.next = null;
        },
        contains(value){
            let currNode = this.head;
            while(currNode.value!==value && currNode.next!==null){
                currNode = currNode.next;
            }
            return currNode.value === value;
        }
    }
}
function node(){
    return{
        value: null,
        next: null,
        setValue(value){
            return this.value = value;
        },
        setNext(node){
            return this.next = node;
        }
    }
}