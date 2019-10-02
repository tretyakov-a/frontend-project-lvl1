import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './game-task';
import { getRules, getTaskGenerator, getInputValidator } from './game';

const amountOfCorrectAnswers = 3;
let gameData;

const askForName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameCycle = (answersAcc) => {
  if (answersAcc === amountOfCorrectAnswers) {
    return true;
  }

  const task = getTaskGenerator(gameData)();
  console.log(`Question: ${getQuestion(task)}`);
  const answer = readlineSync.question('Your answer: ');

  if (getInputValidator(gameData)(answer) && getAnswer(task) === answer) {
    console.log('Correct!');
    return gameCycle(answersAcc + 1);
  }

  console.log(
    `'${answer}' is wrong answer ;(.`,
    `Correct answer was '${getAnswer(task)}'.`,
  );
  return false;
};

const runGame = (game) => {
  gameData = game;

  console.log(getRules(gameData));
  const playerName = askForName();

  if (gameCycle(0)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export { runGame, askForName };
