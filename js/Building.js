import Apartment from "./Apartment.js";
class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        throw new Error("Cannot add more apartments, maximum limit reached");
      }
    } else {
      throw new Error("The apartment should be an instance of Apartment class");
    }
  }
}

export default Building;
