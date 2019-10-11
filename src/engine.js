import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './game-task';

const correctAnswersCount = 3;

export default (gameDescription, generateTask) => {
  console.log('Welcome to the Brain Games');
  if (gameDescription) {
    console.log(gameDescription);
  }
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  if (!generateTask) {
    return;
  }
  const iter = (counter) => {
    if (counter === correctAnswersCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const task = generateTask();
    const question = getQuestion(task);
    const correctAnswer = getAnswer(task);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };

  iter(0);
};
