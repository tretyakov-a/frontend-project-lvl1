import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './game-task';

const amountOfCorrectAnswers = 3;

const gameCycle = (answersAcc, generateTask) => {
  if (answersAcc === amountOfCorrectAnswers) {
    return true;
  }

  const task = generateTask();
  console.log(`Question: ${getQuestion(task)}`);
  const answer = readlineSync.question('Your answer: ');

  if (getAnswer(task) === answer) {
    console.log('Correct!');
    return gameCycle(answersAcc + 1, generateTask);
  }

  console.log(
    `'${answer}' is wrong answer ;(.`,
    `Correct answer was '${getAnswer(task)}'.`,
  );
  return false;
};

const runGame = (gameDescription, generateTask) => {
  console.log('Welcome to the Brain Games');
  if (gameDescription) {
    console.log(gameDescription);
  }
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  if (!generateTask) {
    return;
  }
  if (gameCycle(0, generateTask)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default runGame;
