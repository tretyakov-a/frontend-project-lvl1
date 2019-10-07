import random from '../random';
import runGame from '../engine';
import { makeTask } from '../game-task';

const randomMax = 100;
const randomMin = 0;

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateTask = () => {
  const num1 = random(randomMin, randomMax);
  const num2 = random(randomMin, randomMax);
  const answer = calcGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return makeTask(question, String(answer));
};

export default () => {
  runGame(gameDescription, generateTask);
};
