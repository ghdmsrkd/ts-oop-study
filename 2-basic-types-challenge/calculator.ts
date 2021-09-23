/**
 * Let's make a calculator 🧮
 */
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
type Operand = {
  pre : number
  next : number
}
const operators = {
  'add' : (operand :Operand): number => operand.pre + operand.next,
  'substract' : (operand :Operand): number => operand.pre - operand.next,
  'multiply' : (operand :Operand): number => operand.pre * operand.next,
  'divide' : (operand :Operand): number => operand.pre / operand.next,
  'remainder': (operand :Operand): number => operand.pre % operand.next,
}
const calculate = (command : Command, pre : number, next: number) : number => {
  return operators[command]({pre, next})
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


