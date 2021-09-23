/**
 * Let's make a calculator 🧮
 */
type calculateOperator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
type calculateOperand = {
  pre : number
  next : number
}
const operatorFuncs = {
  'add' : (op :calculateOperand): number => op.pre + op.next,
  'substract' : (op :calculateOperand): number => op.pre - op.next,
  'multiply' : (op :calculateOperand): number => op.pre * op.next,
  'divide' : (op :calculateOperand): number => op.pre / op.next,
  'remainder': (op :calculateOperand): number => op.pre % op.next,
}
const calculate = (operator : calculateOperator, pre : number, next: number) : number => {
  return operatorFuncs[operator]({pre, next})
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


