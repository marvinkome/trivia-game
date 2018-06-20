import * as types from './actionTypes';

const updateObject = (oldObj, newValues) => {
    return Object.assign({}, oldObj, newValues);
};

function answerQuestion(state, answer) {
    const { correct_answer, user_answer, question } = answer;
    const passed = user_answer === correct_answer;
    const score = passed ? state.user_answers.score + 1 : state.user_answers.score;
    const new_answer = {
        question,
        user_answer,
        result: passed ? 'Passed' : 'Failed'
    };

    const user_answers = updateObject(state.user_answers, {
        score,
        all_answers: [...state.user_answers.all_answers, new_answer]
    });

    return updateObject(state, {
        user_answers
    });
}

function resetQuiz(state) {
    const user_answers = updateObject(state.user_answers, {
        score: 0,
        all_answers: []
    });

    return updateObject(state, {
        quiz_data: {},
        user_answers
    });
}

function setupQuiz(state, quiz_data) {
    return updateObject(state, {
        quiz_data
    });
}

export default (state, action) => {
    switch (action.type) {
    case types.answerQuestion:
        return answerQuestion(state, action.answer);
    case types.resetQuiz:
        return resetQuiz(state);
    case types.setupQuiz:
        return setupQuiz(state, action.data);
    default:
        return state;
    }
};
