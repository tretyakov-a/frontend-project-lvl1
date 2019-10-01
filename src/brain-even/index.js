import readlineSync from 'readline-sync';

const randomMin = 0;
const randomMax = 100;
const amountOfCorrectAnswers = 3;

const isAnswerCorrect = (number, answer) => (
  number % 2 === 0
    ? answer === 'yes' || false
    : answer === 'no' || false
);

const isInputCorrect = (input) => input === 'yes' || input === 'no';

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

const gameCycle = (answersAcc) => {
  if (answersAcc === amountOfCorrectAnswers) {
    return true;
  }
  const randomNumber = getRandomInt(randomMin, randomMax);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (isInputCorrect(answer) && isAnswerCorrect(randomNumber, answer)) {
    console.log('Correct!');
    return gameCycle(answersAcc + 1);
  }
  console.log(
    `'${answer}' is wrong answer ;(.`,
    `Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`,
  );
  return false;
};

const runGame = (playerName) => {
  if (gameCycle(0)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default runGame;
