module.exports = {
  add(a, b) {
    return a + b;
  },
  init({ option, param }) {
    console.log('执行init流程');
    console.log(`${option}叫做:${param}`);
  },
};
