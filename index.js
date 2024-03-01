let list = linkedList();
list.append("Head!");
list.append("Two");
// console.log(list.head());

function linkedList(){
    return{
        head: node(),
        append(value){
            if(this.head.value === null){
                this.head.setValue(value);
                console.log(this.head);
            }
            else{
                let currNode = this.head;
                while(currNode.next!==null){
                    currNode = currNode.next;
                    console.log(currNode);
                }
                let newNode = node();
                newNode.setValue(value);
                currNode.next = newNode;
                console.log(currNode);
            }
        },
        prepend(value){
            let newNode = node();
            newNode.setValue(value);
            //lost to add node to front of list
        },
        // head(){
        //     console.log(this.head);
        // }
    }
}
function node(){
    return{
        value: null,
        next: null,
        setValue(value){
            return this.value = value;
        }
    }
}