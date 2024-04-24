(function () {
  const call = function (func, ctx, arg) {
    ctx.func = func;
    ctx.func(arg);
    delete ctx.func;
  };

  const bind = function (bFunc, bCtx, bArrayOfArg) {
    return function () {
      return call(bFunc, bCtx, bArrayOfArg);
    };
  };

  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  const display = function () {
    console.log(this.lastName);
  };

  const b = bind(display, person1);
  b();
})();
