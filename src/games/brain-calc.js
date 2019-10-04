import { random } from '../utils';
import runGame from '../engine';
import { gameTask } from '../game-task';

const randomMax = 100;
const randomMaxForMul = 10;
const operations = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const getRandomOperation = () => {
  const randomOperationIndex = random(operations.length - 1);
  return operations[randomOperationIndex];
};

const performOperation = (operation, leftOperand, rightOperand) => {
  switch (operation) {
    case '+': return leftOperand + rightOperand;
    case '-': return leftOperand - rightOperand;
    case '*': return leftOperand * rightOperand;
    default: return 0;
  }
};

const generateTask = () => {
  const operation = getRandomOperation();
  const leftOperand = operation === '*' ? random(randomMaxForMul) : random(randomMax);
  const rightOperand = operation === '*' ? random(randomMaxForMul) : random(randomMax);
  const answer = performOperation(operation, leftOperand, rightOperand);
  const question = `${leftOperand} ${operation} ${rightOperand}`;
  return gameTask(question, String(answer));
};

const initGame = () => {
  runGame(gameDescription, generateTask);
};

export default initGame;
