(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todoForm");
    const todoItemsContainer = document.getElementById("todoItems");
    const removeAllButton = document.querySelector("[data-remove-all]");

    // Загрузка задач из localStorage
    const savedTodos = localStorage.getItem("todos");
    let todos = savedTodos ? JSON.parse(savedTodos) : [];
    renderTodos(todos);

    // Обработчик отправки формы
    const formHandler = {
      handleSubmit(event) {
        event.preventDefault();
        const formData = {
          title: form.elements.title.value.trim(),
          description: form.elements.description.value.trim(),
        };

        if (formData.title && formData.description) {
          const newTask = {
            title: formData.title,
            description: formData.description,
          };
          todos.push(newTask);
          localStorage.setItem("todos", JSON.stringify(todos));
          renderTodos(todos);
          form.reset();
        }
      },
    };

    form.addEventListener("submit", formHandler.handleSubmit);

    // Обработчик кнопки "Remove All TODOS"
    const removeAllHandler = {
      handleRemoveAll() {
        todos = [];
        localStorage.setItem("todos", JSON.stringify([]));
        renderTodos(todos);
      },
    };

    removeAllButton.addEventListener("click", removeAllHandler.handleRemoveAll);

    // Функция для отображения задач
    function renderTodos(todos) {
      todoItemsContainer.innerHTML = "";
      todos.forEach((todo, index) => {
        const col = document.createElement("div");
        col.className = "col-4";
        col.innerHTML = `
          <div class="taskWrapper">
            <div class="taskHeading">${todo.title}</div>
            <div class="taskDescription">${todo.description}</div>
            <button class="btn btn-danger btn-sm" data-remove="${index}">Remove</button>
          </div>
        `;
        todoItemsContainer.appendChild(col);
      });

      // Добавляем обработчики удаления для каждой задачи
      document.querySelectorAll("[data-remove]").forEach((button) => {
        button.addEventListener("click", (event) => {
          const index = event.target.getAttribute("data-remove");
          todos.splice(index, 1);
          localStorage.setItem("todos", JSON.stringify(todos));
          renderTodos(todos);
        });
      });
    }
  });
})();
