import { random } from 'lodash';
import { runGame } from '../engine';
import { gameTask } from '../game-task';
import { gameData } from '../game';

const randomMax = 100;

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isInputCorrect = (input) => input === 'yes' || input === 'no';

const isPrime = (number) => {
  const upperLimit = number / 2;
  const iter = (acc) => {
    if (acc > upperLimit) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const generateTask = () => {
  const rndNumber = random(randomMax);
  const answer = isPrime(rndNumber) ? 'yes' : 'no';
  return gameTask(rndNumber, answer);
};


const initGame = () => {
  const game = gameData(gameRules, generateTask, isInputCorrect);
  runGame(game);
};

export default initGame;
