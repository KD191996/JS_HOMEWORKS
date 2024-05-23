(function () {
  // document.addEventListener("DOMContentLoaded", () => {
  const dataList = document.getElementById("dataList");
  const formData = JSON.parse(localStorage.getItem("form"));

  for (const key in formData) {
    const li = document.createElement("li");
    if (!formData[key]) {
      li.textContent = `${key}: Пользователь не ввел информацию`;
    } else {
      li.textContent = `${key}: ${formData[key]}`;
    }
    dataList.append(li);
  }
})();
