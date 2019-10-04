const random = (max) => {
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue + 1));
};

const isEven = (number) => number % 2 === 0;

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
};

const isPrime = (number) => {
  const upperLimit = number / 2;
  const iter = (acc) => {
    if (acc > upperLimit) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

export {
  random, isEven, isPrime, calcGcd,
};
