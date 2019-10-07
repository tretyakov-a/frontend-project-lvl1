import random from '../random';
import runGame from '../engine';
import { makeTask } from '../game-task';

const randomMax = 100;
const randomMin = 0;

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateTask = () => {
  const question = random(randomMin, randomMax);
  const answer = isEven(question) ? 'yes' : 'no';
  return makeTask(question, answer);
};

export default () => {
  runGame(gameDescription, generateTask);
};
