(function (qualifiedName) {
  const ulEl = document.getElementById("ulId");
  const liEl = ulEl.querySelectorAll("li");

  const arr = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const element of liEl) {
    if (element instanceof HTMLElement) {
      arr.push(element);
    }
  }
  console.log(arr);

  const arrName = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const element of liEl) {
    arrName.push(element.textContent);
  }
  console.log(arrName);

  console.log((ulEl.lastElementChild.innerHTML = "Привет меня зовут Катя"));

  ulEl.firstElementChild.setAttribute("data-my-name", "Kateryna");
  console.log(ulEl.firstElementChild.getAttribute("data-my-name", "Kateryna"));

  ulEl.removeAttribute("data-dog-tail");
  console.log(ulEl.getAttribute("data-dog-tail"));
})();
