import { random, calcGcd } from '../utils';
import runGame from '../engine';
import { gameTask } from '../game-task';

const randomMax = 100;

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateTask = () => {
  const num1 = random(randomMax);
  const num2 = random(randomMax);
  const answer = calcGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return gameTask(question, String(answer));
};

const initGame = () => {
  runGame(gameDescription, generateTask);
};

export default initGame;
