// let numbers = [12, 18, 11, 5, 8, 2];

// function displayMiddleNumber(numbersArray) {
//     let middle = numbersArray.length / 2;
//     if (numbersArray.length % 2 === 0) {
//         return [numbersArray[middle - 1], numbersArray[middle]];
//     } else {
//         return numbersArray[Math.floor(middle)];
//     }
// }

// console.log(displayMiddleNumber(numbers));

// Array.from()


// INCREMENT AND PRECREMENT
// let a = 3
// console.log(++a)
// console.log(a++);
// console.log(a)



// CONTINUE
// for(let i = 0; i<=10; i++) {
//     if(i == 5) {
//         continue
//     }
//     console.log(i);
// }


    // If we don't have the below code it will produce an infinite loop

// let cnt = 0
// while(cnt <= 10) {
//     console.log(cnt);
//     cnt++;
// }

// let cnt = 0
// do{
//     console.log(cnt);
//     cnt++
// }while(cnt <= 10)

// let numbers = [12, 18, 11, 5, 2, 8];
// for(let i = 0; i<numbers.length; i++){
//     console.log(`${i} => ${numbers[i]}`);
// }


// let numbers = [12, 18, 11, 5, 2, 8];
// numbers.forEach(display)
// function display(number) {
//     console.log(number);
// }


// let numbers = [12, 18, 11, 5, 2, 8];
// numbers.forEach((numbers, i) => {
//     console.log(numbers, i);
// })


// FOR IN
// let numbers = [12, 18, 11, 5, 2, 8];
// for(let i in numbers) {
//     console.log(i)
// }



// let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
// let unique = []
// numbers.forEach((number) => {
//     if(!unique.includes(number)) {
//         unique.push(true)
//     }
// })
// console.log(unique)


// let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
// console.log(Array.from(new Set (numbers) ));


// function constName(firstName) {
//     console.log(`First name is ${firstName}`);
// }
// constName()
// constName("Damon")


// function constName(firstName="Asi") {
//     console.log(`First name is ${firstName}`);
// }
// constName()
// constName("Damon")


// function constName(firstName) {
//     console.log(`First name is ${firstName || 'Zaar'}`);
// }
// constName()
// constName("Damon")





// let test = function(numb1, numb2) {
//     return numb1 + numb2
// }
// console.log(test(2, 8))


// (function(numb1, numb2) {
//     console.log(numb1 * numb2)
// })(12 , 4)



// function repeat(limit) {
//     let cnt = 1
//     if(cnt < limit) {
//         console.log(cnt);
//         cnt++
//         repeat(limit--)
//     }
// }
// repeat(10)




// le array izobala ba zingaphi i letters azikwi gama ngalinye
// let amajita = [`Sipho Gcusa`, `Aphiwe Tsembeyi`, `Yanga Xaki`];

// console.log(amajita.map((amajita) => amajita.length));

// let greetings = " Hello World "
// console.log(greetings.split(""))
// console.log(greetings.trim().split(''))


// RECURSIVE FUNCTION INTERVIEW QUESTION
// function scorePrediction(n) {
//     if(n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * scorePrediction(n - 1);
//     }
// }

// console.log(scorePrediction(6));



// function repeat(limit) {
//     let cnt = 1
//      if(cnt < limit) {
//         console.log(cnt);
//         cnt++
//         repeat(limit--)
//     }
// }
// repeat(10)


// function display() {
//     let numb1 = 9
//     console.log(`Inside of a function: ${numb1}`);
// }
// display()
// console.log(`Outside of a function: ${numb1}`);



// Example of finding a prime number from an array (Rezaar's question)
// let data = [2, 8, 'Peter', 3, 11,'Shawn', -1, 6]
// let prime = data.filter((x)=>{
//     if ((x < 2) || (typeof x != 'number'))  return false
//     for(let c = 2; c < x; c++) {
//         if(x % c === 0 )
//             return false
//     }
//     return true
// })
// console.log(prime);


// Literal object
// console.log("Object literal");
// let person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// console.log("Object.create()");
// let smartPhone = Object.create(
//     {
//         make: "Samsung",
//         model: "A 51"
//     }
// )
// console.log(smartPhone);
// console.log("new keyword | Object constructor");
// let computer = new Object({
//     brand: "Dell",
//     amount: 18000
// })
// console.log(computer);



// FACTORY FACTION
// function person() {
//     let data = {
//         firstName: 'Peter'
//         age: 20
//     }
//     return data
// }



// function person(firstName, lastName, age, hrs, rate) {
//     return {
//         name: firstName, surname: lastName, userAge: age, hrsWorked: hrs, userRate: rate
//     }
// }
// let person1 = person('Peter', 'Mukanya', 3, 60, 500)
// let person2 = person('John', 'Mukanya', 1, 20, 3500)
// console.log(person1)
// console.log(person2)




// function Laptop(make, amount) {
//     this.make = make
//     this.amount = amount
// }
// function SmartPhone(amount) {
//     this.amount = amount
// }
// let laptop1 = new Laptop('Hp', 18000)
// let laptop2 = new Laptop('Dell', 20000)
// let samsungA51 = new SmartPhone(20000)
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop2 instanceof SmartPhone);


// CONSTRUCTOR PROPERTY
// function NewRecord(name) {
//     this.name = name 
// }
// let person1 = new NewRecord('John');
// let person2 = {name : 'Henk'};
// console.log(person2);

// CONSTRUCTOR PROPERTY 
// console.log(person1.constructor === NewRecord);
// It is the same as using instanceof
// console.log(person1 instanceof NewRecord);
// console.log(person2 instanceof NewRecord);




// FUNCTIONS INSIDE OF AN OBJECT 


// let person = {
//     firstName: 'Sipho',
//     lastName: 'Gcusa',
//     fullName: function() {
//         return  '${this.firstName} ${this.lastname}'
//     }
// }
// console.log(person);
// console.log(person.fullName())


// let person = {
//     firstName: 'John',
//     lastName: 'Bruce',
//     hrs: 120,
//     rate: 500,
//     salary: function() {
//         return this.hrs * this.rate
//     }
// }
// console.log(person);
// console.log(person.salary())





// let laptop = {
//     make: 'Dell',
//     cpu: '3Ghz',
//     ram: '16GB'
// }
// for (let key in laptop) {
//     console.log(key, '', laptop[key]);
// }

// console.log(laptop);
// for(const keyName in laptop) {
//     console.log(laptop[keyName])
// }
// OR 
// console.log(Object.keys(laptop))
// console.log(Object.values(laptop))
// Object.keys(laptop).forEach((key)=>{
//     console.log(`${key} -> ${laptop[key]}`);
// })
// Object.keys(laptop).forEach((value)=>{
//     console.log(`${value}`);
// })




// let car1 = {
//     make: 'Toyota',
//     year: 2023
// }
// let car2 = car1
// console.log("==car1==");
// console.log(car1);
// console.log("==car2==");
// console.log(car2);
// console.log("change the value of car2");
// car2.year = 2024;
// console.log(car1, car2);

// let car2 = {...car1}
// console.log(car1, car2);
// console.log("change the value of car2");
// car2.year = 2024
// console.log(car1, car2);
// OBJECT.ASSIGN 
// let car3 = Object.assign({}, car1)
// console.log("===car3===");
// console.log(car3);
// JASON.PARSE 
// console.log("JSON.parse()");
// let car4 = JSON.parse(JSON.stringify(car1))
// console.log(car4);





// INTERVIEW QUESTION 
// STRING METHOD 

// let numbers = [2, 4, 11, 1]
// let a = 3
// let b = 2
// console.log(`Highest number: ${Math.max(...numbers)}`);
// console.log(`Lowest number: ${Math.min(...numbers)}`);
// // 3^2 = 3 * 3
// console.log(`pow(x,y): ${Math.pow(a, b)}`);
// console.dir(Math);




// String method
// let firstName = 'Joel'
// console.log(firstName.split("").reverse().join(""));
// console.log(firstName.split("").reverse().join(""));
/*
Exercises on the below methods
=returns each letter=
- charAt() 
=returns a boolean, after you specified the last word and number of characters in an array=
- endsWith()  
=returns a boolean, you specify a word that is in the array=
- includes()
=
- lastIndexOf()
- indexOf()
- replace()
- repeat()
- startWith()
- subString()
- trim()
- trimEnd()
- trimStart()
- slice()
- split()
*/


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// let rIdx = Math.floor(Math.random() * (numbers.length - 1))
// console.log(numbers);
// console.log(rIdx);
// console.log(numbers[rIdx]);


// let modify = numbers.map( (x)=> {
//     return x/2
// })
// console.log(modify);
// let sum = numbers.reduce((a, b)=> a * b)
// console.log(sum);

