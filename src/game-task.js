import { cons, car, cdr } from '@hexlet/pairs';

const makeTask = (question, answer) => cons(question, answer);
const getQuestion = (task) => car(task);
const getAnswer = (task) => cdr(task);

export { makeTask, getQuestion, getAnswer };
