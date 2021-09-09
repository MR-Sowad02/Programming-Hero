// function add(num1, num2) {
//      return num1 + num2
// }

// const total = add(23, 25);
// console.log(total);

function add(num1, num2 = 20){
     return num1 + num2;
}

const total = add(15, 25);

console.log(total);