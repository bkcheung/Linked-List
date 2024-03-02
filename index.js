let list = linkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.append(3)
list.insertAt("hello", 3);
console.log(list.toString());

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
        },
        find(value){
            let currNode = this.head;
            let index = 0;
            while(currNode.value!==value && currNode.next!==null){
                currNode = currNode.next;
                index++;
            }
            if(currNode.value === value){
                return index;
            } else{
                return "Error, value not found";
            }
        },
        toString(){
            let listString = "";
            let currNode = this.head;
            while(currNode.next!==null){
                listString += `(${currNode.value}) -> `;
                currNode = currNode.next;
            }
            listString += `(${currNode.value}) -> ${currNode.next}`;
            return listString;
        },
        insertAt(value, index){
            if(index >= this.size()){
                this.append(value);
            } else if (index===0){
                this.prepend(value);
            } else {
                let currNode = this.head;
                let prevNode;
                for(let i=0;i<index;i++){
                    prevNode = currNode;
                    currNode = currNode.next;
                }
                let newNode = node();
                newNode.setValue(value);
                newNode.next = currNode;
                prevNode.next = newNode;
            }
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