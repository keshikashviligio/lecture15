// // homework 1
// const numbersArray = [10, 15, 20, 40, 50];
// const sum = numbersArray[0] + numbersArray[1] + numbersArray[2] + numbersArray[3] + numbersArray[4];
// console.log(sum);
//
// // homework 2
// const users = [
//   {name: 'Gio', age: 18, address: 'mars'},
//   {name: 'Mari', age: 26, address: 'mars'},
//   {name: 'Soso', age: 55, address: 'mars'},
// ];
//
// // homework 3
// console.log(`My name is ${users[0].name} My age is ${users[0].age} My address is ${users[0].address}`);
//
// // homework 4
// if(users[0].age === 19){
//   console.log('I am a teenager');
// } else {
//   console.log('I am an adult');
// }

// Switch statement
// const age = 10;
//
// switch (age){
//   case 10:
//     console.log('10');
//     break;
//   case 20:
//     console.log('20');
//     break;
//   default:
//     console.log('Default');
// }

// if(users[0].age < 19){
//   console.log('I am a teenager');
// } else {
//   console.log('I am an adult');
// }
// short if/else
// const userAgeStatus = users[0].age < 19 ? 'I am a teenager' : 'I am an adult';
// console.log(userAgeStatus);

// For loop
// const numbersArray = [10, 15, 20, 40, 50, 100, 250, 100, 21, 21, 10];
// let sumValue = 0;
// for (let i = 0; i < numbersArray.length; i++) {
//   sumValue = sumValue + numbersArray[i];
//   console.log(`value of numbersArray ${numbersArray[i]}`);
// }
// console.log(sumValue);

// let whileIndex = 0;
// while (whileIndex < numbersArray.length){
//   console.log(`while index ${whileIndex}`);
//   sumValue = sumValue + numbersArray[whileIndex];
//   whileIndex++;
// }

// let doIndex = 0;
// do {
//   sumValue = sumValue + numbersArray[doIndex];
//   doIndex++;
// } while (doIndex < numbersArray.length)
//
// console.log(sumValue);
// while (true) {
//
// }

// const numberArrayRandom = [];
// for (let i = 0; i < 100; i++){
//   const randNumber = Math.round(Math.random() * 100);
//   numberArrayRandom.push(randNumber);
// }
// // console.log(numberArrayRandom);
//
// const evenNumbers = [];
// for (let i = 0; i < numberArrayRandom.length; i++){
//   if(numberArrayRandom[i] % 2 === 0) {
//     evenNumbers.push(numberArrayRandom[i])
//   }
// }
// console.log(evenNumbers);

// const person = {
//   name: 'Gela',
//   age: 20,
//   hobby: 'football',
//   address: 'venera'
// };
// console.log(person);

// const entries = Object.entries(person);
// console.log(entries);
// entries.
// numberArrayRandom.forEach(num => {
//   console.log(num);
// });

// for (let i = 0; i < entries.length; i++){
//   console.log(entries[i][1]);
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));

// const personKeys = Object.keys(person); // ['name', 'age' ...]
// const personValues = Object.values(person);

// for (let i = 0; i < personKeys.length; i++){
//   console.log(`Key: ${personKeys[i]} - Value: ${person[personKeys[i]]}`);
// }

// for (let personKey in person){
//   console.log(`Key: ${personKey} - Value: ${person[personKey]}`);
// }
