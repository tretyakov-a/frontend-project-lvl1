import { cons, car, cdr } from '@hexlet/pairs';

const gameData = (rules, taskGenerator, inputValidator) => (
  cons(rules, cons(taskGenerator, inputValidator))
);
const getRules = (game) => car(game);
const getTaskGenerator = (game) => car(cdr(game));
const getInputValidator = (game) => cdr(cdr(game));

export {
  gameData, getRules, getTaskGenerator, getInputValidator,
};
