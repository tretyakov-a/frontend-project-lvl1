import { random } from 'lodash';
import { runGame } from '../engine';
import { gameTask } from '../game-task';
import { gameData } from '../game';

const randomMax = 100;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isInputCorrect = (input) => input === 'yes' || input === 'no';

const generateTask = () => {
  const rndNumber = random(randomMax);
  const answer = rndNumber % 2 === 0 ? 'yes' : 'no';
  return gameTask(rndNumber, answer);
};

const initGame = () => {
  const game = gameData(gameRules, generateTask, isInputCorrect);
  runGame(game);
};

export default initGame;
