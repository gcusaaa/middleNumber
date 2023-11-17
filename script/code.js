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


