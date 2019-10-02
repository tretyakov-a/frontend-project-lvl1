import { random, isNumber, toInteger } from 'lodash';
import { runGame } from '../engine';
import { gameTask } from '../game-task';
import { gameData } from '../game';

const randomMax = 100;
const randomMaxForMul = 10;

const gameRules = 'What is the result of the expression?';

const getRandomOperation = () => {
  const rndInt = random(2);
  switch (rndInt) {
    case 1: return '-';
    case 2: return '*';
    default: return '+';
  }
};
const isInputCorrect = (input) => isNumber(toInteger(input));
const generateTask = () => {
  const operation = getRandomOperation();
  const leftOp = operation === '*' ? random(randomMaxForMul) : random(randomMax);
  const rightOp = operation === '*' ? random(randomMaxForMul) : random(randomMax);
  const expr = `${leftOp} ${operation} ${rightOp}`;
  return gameTask(expr, String(eval(expr)));
};

const initGame = () => {
  const game = gameData(gameRules, generateTask, isInputCorrect);
  runGame(game);
};

export default initGame;
