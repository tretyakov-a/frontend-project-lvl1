import random from '../random';
import runGame from '../engine';
import { makeTask } from '../game-task';

const randomMax = 100;
const randomMin = 0;
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
    default: return null;
  }
};

const generateTask = () => {
  const operation = getRandomOperation();
  const leftOperand = operation === '*' ? random(randomMin, randomMaxForMul) : random(randomMin, randomMax);
  const rightOperand = operation === '*' ? random(randomMin, randomMaxForMul) : random(randomMin, randomMax);
  const answer = performOperation(operation, leftOperand, rightOperand);
  const question = `${leftOperand} ${operation} ${rightOperand}`;
  return makeTask(question, String(answer));
};

export default () => {
  runGame(gameDescription, generateTask);
};
