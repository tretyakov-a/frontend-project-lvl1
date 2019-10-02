import { cons, car, cdr } from '@hexlet/pairs';

const gameTask = (question, answer) => cons(question, answer);
const getQuestion = (task) => car(task);
const getAnswer = (task) => cdr(task);

export { gameTask, getQuestion, getAnswer };
