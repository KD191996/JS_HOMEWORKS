import Human from "./Human.js";
class Apartment {
  residents = [];

  addResident(person) {
    if (person instanceof Human) {
      this.residents.push(person);
    } else {
      throw new Error("The resident should be an instance of Human class");
    }
  }
}

export default Apartment;
