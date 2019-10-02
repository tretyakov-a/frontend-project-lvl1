import { random, isNumber, toInteger } from 'lodash';
import { runGame } from '../engine';
import { gameTask } from '../game-task';
import { gameData } from '../game';

const randomMax = 100;

const gameRules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
};

const isInputCorrect = (input) => isNumber(toInteger(input));
const generateTask = () => {
  const num1 = random(randomMax);
  const num2 = random(randomMax);
  const gcd = calcGcd(num1, num2);
  const question = `${num1} ${num2}`;
  return gameTask(question, String(gcd));
};

const initGame = () => {
  const game = gameData(gameRules, generateTask, isInputCorrect);
  runGame(game);
};

export default initGame;
