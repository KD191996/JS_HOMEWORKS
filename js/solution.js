(function () {
  const ulEl = document.getElementById("ulId");
  const liEl = ulEl.querySelectorAll("li");

  const arr = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const element of liEl) {
    console.log(element.textContent);
    arr.push(element.textContent);
  }

  console.log(`Total number of elements: ${liEl.length}`);
  console.log("Text from li elements:", arr);
})();
