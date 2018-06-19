import * as types from './actionTypes';

export const updateObject = (oldObj, newValues) => {
    return Object.assign({}, oldObj, newValues);
};

export const updateNestedItemArray = (array, itemId, callback, key = 'id') => {
    const updatedItems = array.map((item) => {
        if (item[key] !== itemId) {
            return item;
        }

        const updatedItem = callback(item);
        return updatedItem;
    });

    return updatedItems;
};

function answerQuestion(state, answer) {
    const { correct_answer, user_answer, question } = answer;
    const passed = user_answer === correct_answer;
    const score = passed
        ? state.user_answers.score + 1
        : state.user_answers.score;
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

export default (state, action) => {
    switch (action.type) {
    case types.answerQuestion:
        return answerQuestion(state, action.answer);
    default:
        return state;
    }
};
