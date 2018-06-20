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
    moveToNextQuestion = () => {
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex + 1
        });
    };
    answerQuestion = (e, quiz, answer) => {
        e.preventDefault();

        const { question, correct_answer } = quiz;
        const data = {
            question,
            user_answer: answer,
            correct_answer
        };

        this.props.onAnswer(data);

        const quiz_length = this.props.quiz.length - 1;

        if (this.state.currentQuestionIndex === quiz_length) {
            this.props.showResults();
        } else {
            this.moveToNextQuestion();
        }
    };
    render() {
        const quiz = this.props.quiz;
        const currentIndex = this.state.currentQuestionIndex;

        return (
            <div className="container quiz">
                <div className="content">
                    <QuizCard item={quiz[currentIndex]} />
                    <div className="options">
                        <a
                            onClick={(e) =>
                                this.answerQuestion(
                                    e,
                                    quiz[currentIndex],
                                    'True'
                                )
                            }
                            id="select-true"
                            className="btn btn-block"
                        >
                            True
                        </a>
                        <a
                            onClick={(e) =>
                                this.answerQuestion(
                                    e,
                                    quiz[currentIndex],
                                    'False'
                                )
                            }
                            id="select-false"
                            className="btn btn-block"
                        >
                            False
                        </a>
                    </div>
                    <div className="meta-options">

                        <p className="quiz-counter">
                            {currentIndex + 1}/{quiz.length}
                        </p>
                        <p>
                            <a onClick={
                                (e) => this.answerQuestion(e, quiz[currentIndex], 'None')
                            }>Skip question</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    quiz: types.array,
    onAnswer: types.func,
    showResults: types.func
};
