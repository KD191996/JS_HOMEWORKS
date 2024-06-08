(function () {
  const deepFreeze = (obj) => {
    const propNames = Object.getOwnPropertyNames(obj);

    for (const name of propNames) {
      const value = obj[name];

      if (typeof value === "object" && value !== null) {
        deepFreeze(value);
      }
      Object.defineProperty(obj, name, {
        writable: false,
        configurable: false,
      });
    }

    return obj;
  };

  let user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };

  deepFreeze(user);

  user.data.a = 42;
  console.log(user.data.a);
})();
