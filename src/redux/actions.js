import * as types from './actionTypes';

export const answerQuestion = (answer) => ({
    type: types.answerQuestion,
    answer
});

export const resetQuiz = () => ({
    type: types.resetQuiz
});

export const setupQuiz = (data) => ({
    type: types.setupQuiz,
    data
});
