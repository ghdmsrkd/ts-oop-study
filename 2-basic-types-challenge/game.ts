const position = {
  x : 0,
  y : 0
}
type Command = 'up' | 'down' | 'left' | 'right'
const operators = {
  'up' : () => position.y += 1,
  'down' : () => position.y -= 1,
  'left' : () => position.x -= 1,
  'right' : () => position.x += 1,
}
const move = (command : Command) => {
  operators[command]()
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
