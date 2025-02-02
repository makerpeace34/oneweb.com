   
   
   age = 18;
    let canVote = age >= 18 ? "Yes, you can vote!" : "No, you're too young.";
    console.log(canVote);  // Output: Yes, you can vote!
    let day = "Tuesday";
    switch (day) {
      case "Monday":
        console.log("Start of the work week!");
        break;
      case "Friday":
        console.log("Weekend is almost here!");
        break;
      case "Saturday":
      case "Sunday":
        console.log("Enjoy the weekend!");
        break;
      default:
        console.log("It's a regular weekday.");
    }


//Exercise for condition statement
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}

checkEvenOdd(8); 

function divisibleByThree(number) {
  if (number % 3 === 0) {
    console.log(number + " is multiple of 3");
  } else if(number % 3 ===2){
    console.log(number + " the remainder is 2");
  }
  else{
    console.log(number + "remainder is 1")
  }
}
divisibleByThree(73)
//Switch statement
function dayOfTheWeek(number){
  switch(number){
    case 1: 
    console.log("Monday")
    break;
    case 2: console.log(Tuesday)
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday") 
    break;
    case 4: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
    default:
      console.log("Invalid day number! Please enter a number between 1 and 7.")
  }
}
dayOfTheWeek(1);
dayOfTheWeek(4);
dayOfTheWeek(9);

// for loop
for (let i=1; i <= 10;i++) {
  console.log(i)
  }
  

// while loop
let i=2
while (i<=20) {
  console.log(i);
  i +=2
}

//returning values
function addNumbers(a,b){
  return a+b
  }
  let sum= addNumbers(5,6)
  console.log(sum)

// function with parameters for log
function identifyPerson(names,age) {
  console.log(names + age)
}
let output1=identifyPerson("Peace Ufitamahoro",28)
console.log(output1)

// function expression
const user=(names)=>{
  return "Welcome Sir !" + names
}
let output= user("Peacemaker");
console.log(output)

// function expression
let user1=function(names){
  return "Welcome Sir !" +" "+ names
}
console.log(user1("Peacemaker"))

// Fruits Array Manipulation

let fruits=["Apple","Banana","Mango"]
console.log(fruits)
fruits.push("Orange")
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift("Strawberry")
console.log(fruits)
fruits.pop()
console.log(fruits)

// objects manipulation property method 
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName(), person.id, person)


// creating a to do list
let tasks = [];
function addTask(task) {
  tasks.push(task);
  console.log(`"${task}" has been added to the list.`);
}
function displayTasks() {
  console.log("Your To-Do List:");
  tasks.forEach((task, index) => {
      console.log(`${index + 1}: ${task}`);
  });
}
function removeTask(index) {
  if (index > 0 && index <= tasks.length) {
      console.log(`"${tasks[index - 1]}" has been removed from the list.`);
      tasks.splice(index - 1, 1);
  } else {
      console.log("Invalid index.");
  }
}
addTask("Buy groceries");
addTask("Read a book");
displayTasks();
removeTask(1);
displayTasks();

// classes define it constructor properties log methods
class User {
  constructor(name, role){
    this.name= name;
    this.role= role;
  }
  showRole(){
    console.log(`${this.name} is ${this.role}`);
  }
}
      const peaceUfitamahoro= new User("Peace UFITAMAHORO", "nurse")
peaceUfitamahoro.showRole();
const usabaseChristian= new User("Christian USABASE", "policeman")
usabaseChristian.showRole();

class house{
  constructor(location, price, year){
    this.location= location
    this.price= price 
    this.year= year
  }
showHouse(){
  console.log(`${this.location} is ${this.price} and is built in ${this.year}`)
}
}
const kacyiru= new house("Kacyiru", "250k", 2006)
kacyiru.showHouse();

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  showCar()
  {console.log(`${this.name} ${this.year}`)}
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
myCar1.showCar();
myCar2.showCar();