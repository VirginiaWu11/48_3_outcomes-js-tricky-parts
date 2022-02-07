function curriedAdd(total = 0) {
  let currentTotal = total;
  if (total === 0) return currentTotal;
  return function add(num = null) {
    if (num === null) {
      return currentTotal;
    } else {
      currentTotal += num;
      return add;
    }
  };
}

// let firstAdder = curriedAdd();
// console.log(firstAdder(1)(2)());

module.exports = { curriedAdd };
