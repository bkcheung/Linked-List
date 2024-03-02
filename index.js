let list = linkedList();
list.append("Head!");
list.append("Appended");
list.prepend("New head");
console.log(list.head);

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