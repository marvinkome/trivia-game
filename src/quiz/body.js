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
        const quiz_length = this.props.quiz.length;
        const currentIndex = this.state.currentQuestionIndex + 1;

        if (currentIndex === quiz_length) return;

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
        this.moveToNextQuestion();
    };
    render() {
        const quiz = this.props.quiz;
        const currentIndex = this.state.currentQuestionIndex;

        return (
            <div className="container">
                <QuizCard item={quiz[currentIndex]} />
                <p className="answer">
                    <a
                        onClick={(e) =>
                            this.answerQuestion(e, quiz[currentIndex], 'True')
                        }
                    >
                        True
                    </a>
                    <a
                        onClick={(e) =>
                            this.answerQuestion(e, quiz[currentIndex], 'False')
                        }
                    >
                        False
                    </a>
                </p>
                <p className="quiz-counter">
                    {currentIndex + 1}/{quiz.length}
                </p>
                <a onClick={this.moveToNextQuestion}>Skip question</a>
            </div>
        );
    }
}

Body.propTypes = {
    quiz: types.array,
    onAnswer: types.func
};
