import Model from "./Model.js";
import controller from "./controller.js";
import view from "./view.js";

const selectors = {
  form: "#todoForm",
  todosContainer: "#todoItems",
};

controller.init(selectors);
view.init(selectors);
Model.init();
