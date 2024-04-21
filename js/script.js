/* eslint-disable quotes */
function myApply(func, context, args) {
  if (typeof func !== "function") return "Перший аргумент має бути функцією";

  let newContext = null;
  if (!context) {
    newContext = window;
  } else {
    newContext = context;
  }

  let result = null;
  if (Array.isArray(args)) {
    result = args;
  } else if (typeof args === "object" && args !== null) {
    result = [];
    const keys = Object.keys(args);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result.push(args[key]);
    }
  }
  const boundFunc = func.bind(newContext);
  return boundFunc(...result);
}

const person1 = {
  firstName: "John",
  lastName: "Doe",
};
function fullName(city, country) {
  return `My name is ${this.firstName} ${this.lastName}, I am from ${city},${country}`;
}

const about = myApply(fullName, person1, ["Odesa", "Ukraine"]);
console.log(about);
