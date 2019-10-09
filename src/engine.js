import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './game-task';

const correctAnswersCount = 3;

export default (gameDescription, generateTask) => {
  const iter = (answersCounter) => {
    if (answersCounter === correctAnswersCount) {
      return true;
    }
    const task = generateTask();
    const question = getQuestion(task);
    const correctAnswer = getAnswer(task);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      return iter(answersCounter + 1);
    }
    console.log(
      `'${answer}' is wrong answer ;(.`,
      `Correct answer was '${correctAnswer}'.`,
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
  if (iter(0)) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  console.log(`Let's try again, ${playerName}!`);
};
