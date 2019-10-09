import random from '../random';
import runGame from '../engine';
import { makeTask } from '../game-task';

const randomMax = 100;
const randomMin = -100;
const maxDifference = 20;
const progressionSize = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (size, hidedElementPosition, diff, startElement) => {
  const iter = (progressionAcc, sizeCounter) => {
    if (sizeCounter === size) {
      return progressionAcc.trim();
    }
    const currentElement = startElement + diff * sizeCounter;
    const outputElement = sizeCounter === hidedElementPosition ? '..' : currentElement;
    return iter(`${progressionAcc}${outputElement} `, sizeCounter + 1);
  };
  return iter('', 0);
};

const generateTask = () => {
  const hidedElementPosition = random(0, progressionSize - 1);
  const diff = random(1, maxDifference);
  const startElement = random(randomMin, randomMax);
  const question = generateProgression(progressionSize, hidedElementPosition, diff, startElement);
  const answer = startElement + hidedElementPosition * diff;
  return makeTask(question, String(answer));
};

export default () => {
  runGame(gameDescription, generateTask);
};
