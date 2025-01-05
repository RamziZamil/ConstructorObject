//Q1
const persons = [
  { firstName: "Ramzi", lastNmae: "Zamil", age: 22 },
  { firstName: "Faisal", lastNmae: "Jadallah", age: 23 },
  { firstName: "Ahmad", lastNmae: "Tarawneh", age: 21 },
  { firstName: "Rami", lastNmae: "Abdulhamid", age: 26 },
  { firstName: "Belal", lastNmae: "Kahaleh", age: 24 },
];
const allFirstName = [];
for (let i = 0; i < persons.length; i++) {
  allFirstName.push(persons[i].firstName);
}
console.log(allFirstName);

//Q2
const obj = {
  firstName: "Ramzi",
  lastName: "Ahmad Zamil",
  age: 22,
};
function keyAndValueToArray(obj) {
  return Object.entries(obj).flat();
}
const result = keyAndValueToArray(obj);
console.log(result);

//Q3
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.getDetails = function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  };
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Telsa", "Model 3", 2022);
const car3 = new Car("Ford", "Mustang", 2021);
const car4 = new Car("Dodge", "Challenger", 2023);

const cars = [car1, car2, car3, car4];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].getDetails());
}
