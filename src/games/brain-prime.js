import { random, isPrime } from '../utils';
import runGame from '../engine';
import { gameTask } from '../game-task';

const randomMax = 100;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateTask = () => {
  const rndNumber = random(randomMax);
  const answer = isPrime(rndNumber) ? 'yes' : 'no';
  return gameTask(rndNumber, answer);
};

const initGame = () => {
  runGame(gameDescription, generateTask);
};

export default initGame;
