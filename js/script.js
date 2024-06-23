import Building from "./Building.js";
import Human from "./Human.js";
import Apartment from "./Apartment.js";

const apartment1 = new Apartment();
const apartment2 = new Apartment();

const person1 = new Human("John", "Man");
const person2 = new Human("Alice", "Woman");
const person3 = new Human("Alex", "Man");

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

const building = new Building(2);

building.addApartment(apartment1);
building.addApartment(apartment2);

// const apartment3 = new Apartment();
// building.addApartment(apartment3);

console.log("Будинок:", building);
console.log("Квартира 1, Жителі:", apartment1.residents);
console.log("Квартира 2, Жителі:", apartment2.residents);
