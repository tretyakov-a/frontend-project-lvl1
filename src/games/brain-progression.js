import { random } from '../utils';
import runGame from '../engine';
import { gameTask } from '../game-task';

const randomMax = 100;
const maxDifference = 20;
const progressionSize = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (emptyPos, diff, startNumber) => {
  const iter = (progressionAcc, size, curr) => {
    if (size === progressionSize) {
      return progressionAcc;
    }
    const outNumber = size === emptyPos ? '..' : curr;
    return iter(`${progressionAcc}${outNumber} `, size + 1, curr + diff);
  };
  return iter('', 0, startNumber);
};

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
  runGame(gameDescription, generateTask);
};

export default initGame;
