// {
//   interface IStack {
//     readonly stack : Array<string>
//     push(item : string) : void,
//     pop() : string | undefined,
//     IsEmpty() : boolean,
//     // IsFull() :boolean,
//     getStack() : Array<string>
//   }

//   class Stack implements IStack{
//     stack: string[];
//     constructor(private readonly maxLength: number){
//       this.stack = []
//     }

//     push(item: string) : void {
//       console.log(this.stack)
//       if(!this.IsFull())
//         this.stack = [...this.stack, item]
      
//     }

//     pop(): string | undefined {
//       if(!this.IsEmpty())
//         return this.stack.pop()
//     }

//     IsEmpty(): boolean {
//       if(this.stack.length < 1){
//         console.log("stack이 비어있습니다.")
//         return true
//       }
//       return false
//     }

//     IsFull(): boolean {
//       if(this.stack.length >= this.maxLength){
//         console.log("더 이상 push() 할수 없습니다.")
//         return true
//       }
//       return false
//     }

//     getStack(): string[] {
//       return this.stack
//     }
    
//   }
//   const myStack = new Stack(5)
//   myStack.push("1")
//   myStack.push("2")
//   myStack.push("3")
//   myStack.push("4")
//   myStack.push("5")
//   myStack.push("6")
//   myStack.push("1")
//   myStack.pop()
//   myStack.pop()
//   myStack.pop()
//   myStack.pop()
//   myStack.pop()
//   myStack.pop()
//   myStack.pop()
//   console.log(myStack.getStack())

// }
{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  
  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };
  
  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
  
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  
  const stack = new StackImpl(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  
  stack.pop();
  
}