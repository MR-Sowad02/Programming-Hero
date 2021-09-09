const person = { name: 'Gutipoka', age: 17, study: 'student', bfName: 'Mohammad Irfan', address: 'cock bazer', phone: '0187249099' };

const { phone, bfName, address } = person; 
// const bfName = person.bfName;
// const phone = person.phone;
 
// console.log(bfName, phone, address); 
// console.log(bfName, phone, address); 

const friends = ["Abdulah", "Aonkon", "Sunny", "Ali", "Aftaf"];
const [ctfrnd, nextFriend, ...restfrnd] = friends;
console.log(ctfrnd, nextFriend, restfrnd); 