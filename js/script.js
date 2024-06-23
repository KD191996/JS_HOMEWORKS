(function () {
  (function () {
    function cacheFunc(func) {
      const cache = new Map();

      return function (a, b) {
        const key = JSON.stringify([a, b]);

        if (cache.has(key)) {
          return `Результат отриманий з кешу: ${cache.get(key)}`;
        }

        const result = func(a, b);

        cache.set(key, result);

        if (cache.size > 10) {
          const firstKey = cache.keys().next().value;
          cache.delete(firstKey);
        }

        return `Результат: ${result}, Кеш: ${cache.size}`;
      };
    }

    function plus(a, b) {
      return a + b;
    }

    const cachePlus = cacheFunc(plus);

    console.log(cachePlus(1, 1));
    console.log(cachePlus(3, 4));
    console.log(cachePlus(6, 4));
    console.log(cachePlus(4, 2));
    console.log(cachePlus(1, 2));
    console.log(cachePlus(2, 1));
    console.log(cachePlus(3, 4));
    console.log(cachePlus(2, 1));
    console.log(cachePlus(26, 3));
    console.log(cachePlus(26, 3));
  })();
})();
