(function () {
  const categories = [
    { id: 1, name: "Верхній одяг" },
    { id: 2, name: "Взуття" },
    { id: 3, name: "Аксесуари" },
  ];

  const products = [
    {
      id: 1,
      categoryId: 1,
      name: "Куртка",
      price: 10,
    },
    {
      id: 2,
      categoryId: 1,
      name: "Пальто",
      price: 20,
    },
    {
      id: 3,
      categoryId: 2,
      name: "Сланці",
      price: 15,
    },
    {
      id: 4,
      categoryId: 2,
      name: "Чоботи",
      price: 25,
    },
    {
      id: 5,
      categoryId: 3,
      name: "Кепка",
      price: 30,
    },
    {
      id: 6,
      categoryId: 3,
      name: "Окуляри",
      price: 35,
    },
  ];
  document.addEventListener("DOMContentLoaded", () => {
    const categoriesElements = document.querySelectorAll(".categories li");
    const productsContainer = document.querySelector(".products ul");
    const productDetails = document.querySelector(".product-details");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const buyButton = document.getElementById("buyButton");

    productDetails.style.display = "none";
    productsContainer.style.display = "block";

    // Додати обробник подій для категорій
    categoriesElements.forEach((category) => {
      category.addEventListener("click", () => {
        const categoryId = category.getAttribute("data-category-id");
        displayProducts(categoryId);
      });
    });

    // Додати обробник подій для кнопки "купити"
    buyButton.addEventListener("click", () => {
      alert("Товар куплений");
      // Повернення у вихідний стан
      productDetails.style.display = "none";
      productsContainer.style.display = "block";
    });

    // Функція для виведення товарів категорії
    function displayProducts(categoryId) {
      // Очистити контейнер з товарами
      productsContainer.innerHTML = "";
      // Знайти товари з відповідною категорією та відобразити їх
      const filteredProducts = products.filter(
        (product) => product.categoryId === parseInt(categoryId),
      );
      filteredProducts.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price}`;
        li.addEventListener("click", () => {
          // При кліку на товар виводимо його інформацію
          productName.textContent = product.name;
          productPrice.textContent = product.price;
          productDetails.style.display = "block";
          productsContainer.style.display = "none";
        });
        productsContainer.appendChild(li);
      });
    }
  });
})();
