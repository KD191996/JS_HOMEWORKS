(function () {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = {};
    const formData = {
      email: null,
      firstName: null,
      lastName: null,
      nickname: null,
      password: null,
      option: null,
      message: null,
      file: null,
      terms: null,
    };
    const inputs = event.target.querySelectorAll("input, textarea, select");

    for (const input of inputs) {
      formData[input.name] = input.value;
    }

    localStorage.setItem("form", JSON.stringify(formData));
    window.location.href = "result.html";
    console.log(JSON.parse(localStorage.getItem("form")));

    formData.reset();
  });

  // document.addEventListener("DOMContentLoaded", () => {
  //   const dataList = document.getElementById("dataList");
  //   const formData = JSON.parse(localStorage.getItem("formData"));
  //
  //   if (formData) {
  //     // eslint-disable-next-line guard-for-in,no-restricted-syntax
  //     for (const key in formData) {
  //       const li = document.createElement("li");
  //       li.textContent = `${key}: ${formData[key]}`;
  //       li.classList.add("list-group-item");
  //       dataList.appendChild(li);
  //     }
  //   } else {
  //     const li = document.createElement("li");
  //     li.textContent = "No data available";
  //     li.classList.add("list-group-item");
  //     dataList.appendChild(li);
  //   }
  // });

  console.log(123);
  console.log(window.location.href);
})();
