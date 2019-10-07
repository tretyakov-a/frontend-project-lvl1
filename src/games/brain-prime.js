import random from '../random';
import runGame from '../engine';
import { makeTask } from '../game-task';

const randomMax = 100;
const randomMin = 0;

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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateTask = () => {
  const question = random(randomMin, randomMax);
  const answer = isPrime(question) ? 'yes' : 'no';
  return makeTask(question, answer);
};

export default () => {
  runGame(gameDescription, generateTask);
};
