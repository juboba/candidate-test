const TOTAL_LIMIT = 100

function getNumber() {
  const randomError = Math.floor(Math.random() * 100)

  if (randomError % 2 === 0) {
    return Promise.reject('{' + randomError + '}')
  }

  return Promise.resolve(Math.floor(Math.random() * 100))
}

const add = (a, b) => a + b;

const addIfPair = (total, number) => {
  return number % 2 === 0 ? add(total, number) : total;
};

const countTotal = list => list.reduce(add, 0);


module.exports = {
  TOTAL_LIMIT,
  countTotal,
  getNumber,
  addIfPair,
};
