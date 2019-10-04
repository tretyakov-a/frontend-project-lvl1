import { random, isEven } from '../utils';
import runGame from '../engine';
import { gameTask } from '../game-task';

const randomMax = 100;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateTask = () => {
  const question = random(randomMax);
  const answer = isEven(question) ? 'yes' : 'no';
  return gameTask(question, answer);
};

const initGame = () => {
  runGame(gameDescription, generateTask);
};

export default initGame;
