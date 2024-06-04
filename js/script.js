(function () {
  const NOTES_KEY = "todos";
  const FAVORITES_KEY = "favorites";
  const form = document.getElementById("todoForm");
  const todoItemsContainer = document.getElementById("todoItems");
  const removeAllButton = document.querySelector("[data-remove-all]");

  // Функция для загрузки данных из localStorage
  const loadData = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data || [];
  };

  // Загрузка задач и избранных элементов
  let todos = loadData(NOTES_KEY);
  let favorites = loadData(FAVORITES_KEY);

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
        localStorage.setItem(NOTES_KEY, JSON.stringify(todos));
        renderTodos(todos, favorites);
        form.reset();
      }
    },
  };

  const removeAllHandler = {
    handleRemoveAll() {
      todos = [];
      favorites = [];
      localStorage.setItem(NOTES_KEY, JSON.stringify([]));
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([]));
      renderTodos(todos, favorites);
    },
  };

  const removeTaskHandler = {
    handleRemoveTask(event) {
      const index = event.target.getAttribute("data-remove");
      todos.splice(index, 1);
      favorites = favorites.filter((favIndex) => favIndex !== parseInt(index));
      localStorage.setItem(NOTES_KEY, JSON.stringify(todos));
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      renderTodos(todos, favorites);
    },

    addRemoveListeners() {
      document.querySelectorAll("[data-remove]").forEach((button) => {
        button.addEventListener("click", this.handleRemoveTask.bind(this));
      });
    },
  };

  const favoriteHandler = {
    handleFavorite(event) {
      const index = event.target.getAttribute("data-favorite");
      const favIndex = favorites.indexOf(parseInt(index));

      if (favIndex === -1) {
        favorites.push(parseInt(index));
      } else {
        favorites.splice(favIndex, 1);
      }

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      renderTodos(todos, favorites);
    },

    addFavoriteListeners() {
      document.querySelectorAll("[data-favorite]").forEach((button) => {
        button.addEventListener("click", this.handleFavorite.bind(this));
      });
    },
  };

  const renderTodos = (todos, favorites) => {
    todoItemsContainer.innerHTML = "";
    todos.forEach((todo, index) => {
      const col = document.createElement("div");
      col.className = "col-4";
      const isFavorite = favorites.includes(index);
      col.innerHTML = `
      <div class="taskWrapper">
        <div class="taskHeading">${todo.title}</div>
        <div class="taskDescription">${todo.description}</div>
        <button class="btn btn-danger btn-sm" data-remove="${index}">Remove</button>
        <button class="btn btn-sm ${isFavorite ? "btn-warning" : "btn-secondary"}" data-favorite="${index}">
          ${isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        </button>
      </div>
    `;
      todoItemsContainer.appendChild(col);
    });

    // Добавляем обработчики удаления и избранного после рендеринга
    removeTaskHandler.addRemoveListeners();
    favoriteHandler.addFavoriteListeners();
  };

  // Установка обработчиков событий
  form.addEventListener("submit", formHandler.handleSubmit);
  removeAllButton.addEventListener("click", removeAllHandler.handleRemoveAll);

  // Изначальное рендеринг задач
  renderTodos(todos, favorites);
})();
