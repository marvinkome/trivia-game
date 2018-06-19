import React from 'react';
import types from 'prop-types';
import { QuizCard } from './quiz-card';

export default class Body extends React.Component {
    constructor() {
        super();

        this.state = {
            currentQuestionIndex: 0
        };
    }
    render() {
        const quiz = this.props.quiz;
        const currentIndex = this.state.currentQuestionIndex;

        return (
            <div className="container">
                <QuizCard item={quiz[currentIndex]} />
                <p className="quiz-counter">{quiz.length}</p>
            </div>
        );
    }
}

Body.propTypes = {
    quiz: types.array
};
