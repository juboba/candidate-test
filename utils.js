const TOTAL_LIMIT = 100

function getNumber() {
  return new Promise(
    (resolve, reject) => {
      const randomError = Math.floor(Math.random() * 100)

      setTimeout(() => {
          if (randomError % 2 === 0) {
            const start = Array.from({ length: randomError }, x => '{').join('')
            const end = Array.from({ length: randomError }, x => '}').join('')
            return reject(start + randomError + end)
          }

          return resolve(Math.floor(Math.random() * 100))
      }, randomError * 10)
    }
  )
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
