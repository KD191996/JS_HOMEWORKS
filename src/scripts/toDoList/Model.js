import { DB_KEY } from "./constants.js";

const Model = {
  _currentId: 1,

  getById(id) {
    const data = this.getData();
    return data.find((item) => item.id === id);
  },

  getData() {
    const data = JSON.parse(localStorage.getItem(DB_KEY));
    if (data === null) {
      return [];
    }
    return data;
  },

  setData(data) {
    const saveData = this.getData();

    if (saveData.length > 150) {
      throw new Error("No capacity in DB");
    }

    const dataToSave = { ...data, id: this.currentId };
    saveData.push(dataToSave);
    localStorage.setItem(DB_KEY, JSON.stringify(saveData));
    this.currentId += 1;

    return this.getData().at(-1);
  },

  removeData(id) {
    const savedData = this.getData();
    const index = savedData.findIndex((item) => Number(item.id) === Number(id));
    const removedItem = savedData.splice(index, 1);
    localStorage.setItem(DB_KEY, JSON.stringify(savedData));

    const updateData = this.getData();

    return !updateData.some((item) => item.id === removedItem.id);
  },

  init() {
    const data = this.getData();
    if (!data.length) return;
    this.currentId = ++data.at(-1).id;
  },

  get currentId() {
    return this._currentId;
  },

  set currentId(val) {
    this._currentId = val;
    if (typeof val !== "number") throw new Error("id should be a number");
  },
};

export default Model;
