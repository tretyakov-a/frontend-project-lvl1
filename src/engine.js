import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './game-task';

const correctAnswersCount = 3;

export default (gameDescription, generateTask) => {
  const gameCycle = (answersAcc) => {
    if (answersAcc === correctAnswersCount) {
      return true;
    }
    const task = generateTask();
    console.log(`Question: ${getQuestion(task)}`);
    const answer = readlineSync.question('Your answer: ');
    if (getAnswer(task) === answer) {
      console.log('Correct!');
      return gameCycle(answersAcc + 1);
    }
    console.log(
      `'${answer}' is wrong answer ;(.`,
      `Correct answer was '${getAnswer(task)}'.`,
    );
    return false;
  };

  console.log('Welcome to the Brain Games');
  if (gameDescription) {
    console.log(gameDescription);
  }
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  if (!generateTask) {
    return;
  }
  if (gameCycle(0)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
