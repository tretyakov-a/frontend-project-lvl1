import random from '../random';
import runGame from '../engine';
import { makeTask } from '../game-task';

const randomMax = 100;
const randomMin = -100;
const maxDifference = 20;
const progressionSize = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (hidedElementPosition, diff, startNumber) => {
  const iter = (progressionAcc, size, curr) => {
    if (size === progressionSize) {
      return progressionAcc;
    }
    const outNumber = size === hidedElementPosition ? '..' : curr;
    return iter(`${progressionAcc}${outNumber} `, size + 1, curr + diff);
  };
  return iter('', 0, startNumber);
};

const generateTask = () => {
  const hidedElementPosition = random(0, progressionSize - 1);
  const diff = random(1, maxDifference);
  const startNumber = random(randomMin, randomMax);
  const question = generateProgression(hidedElementPosition, diff, startNumber);
  const answer = startNumber + hidedElementPosition * diff;
  return makeTask(question, String(answer));
};

export default () => {
  runGame(gameDescription, generateTask);
};
