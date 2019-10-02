import { random, isNumber, toInteger } from 'lodash';
import { runGame } from '../engine';
import { gameTask } from '../game-task';
import { gameData } from '../game';

const randomMax = 100;
const maxDifference = 20;
const progressionSize = 10;

const gameRules = 'What number is missing in the progression?';

const generateProgression = (emptyPos, diff, startNumber) => {
  const iter = (progAcc, size, curr) => {
    if (size === progressionSize) {
      return progAcc;
    }
    const outNumber = size === emptyPos ? '..' : curr;
    return iter(`${progAcc}${outNumber} `, size + 1, curr + diff);
  };
  return iter('', 0, startNumber);
};

const isInputCorrect = (input) => isNumber(toInteger(input));
const generateTask = () => {
  const emptyPos = random(progressionSize - 1);
  const diff = random(1)
    ? random(maxDifference - 1) + 1
    : -(random(maxDifference - 1) + 1);
  const startNumber = random(1) ? random(randomMax) : -random(randomMax);
  const question = generateProgression(emptyPos, diff, startNumber);
  const answer = startNumber + emptyPos * diff;
  return gameTask(question, String(answer));
};

const initGame = () => {
  const game = gameData(gameRules, generateTask, isInputCorrect);
  runGame(game);
};

export default initGame;
