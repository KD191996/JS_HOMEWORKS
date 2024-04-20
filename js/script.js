const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
