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
            <div className="container">
                <div className="content">
                    <QuizCard item={quiz[currentIndex]} />
                    <p className="answer">
                        <a
                            onClick={(e) =>
                                this.answerQuestion(
                                    e,
                                    quiz[currentIndex],
                                    'True'
                                )
                            }
                            id="select-true"
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
                        >
                            False
                        </a>
                    </p>
                    <p className="quiz-counter">
                        {currentIndex + 1}/{quiz.length}
                    </p>
                    <a
                        onClick={(e) =>
                            this.answerQuestion(e, quiz[currentIndex], 'None')
                        }
                    >
                        Skip question
                    </a>
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
