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

        const quizLength = this.props.quiz.length - 1;

        if (this.state.currentQuestionIndex === quizLength) {
            this.props.showResults();
        } else {
            this.moveToNextQuestion();
        }
    };

    // render methods
    renderOptions = (currentIndex, quiz) => {
        return (
            <React.Fragment>
                <div className="options">
                    <a
                        onClick={(e) => this.answerQuestion(e, quiz[currentIndex], 'True')}
                        id="select-true"
                        className="btn btn-block"
                    >
                        True
                    </a>
                    <a
                        onClick={(e) => this.answerQuestion(e, quiz[currentIndex], 'False')}
                        id="select-false"
                        className="btn btn-block"
                    >
                        False
                    </a>
                </div>
                <div className="meta-options">
                    <p>
                        <a onClick={(e) => this.answerQuestion(e, quiz[currentIndex], 'None')}>
                            Skip question
                        </a>
                    </p>
                </div>
            </React.Fragment>
        );
    };
    renderQuiz = (currentIndex, quiz, quizLength) => {
        return (
            <React.Fragment>
                <QuizCard 
                    item={quiz[currentIndex]} currentInd={currentIndex + 1} length={quizLength} />
                {this.renderOptions(currentIndex, quiz)}
            </React.Fragment>
        );
    };
    renderLoader = () => {
        return (
            <div className="loader center">
                <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    renderError = () => {
        // check if user is offline
        const isOffline = !navigator.onLine;
        return (
            <div className="error center">
                <h5>
                    It's not you it's us,
                    {isOffline && ' Check your connection and'}
                    {' '} try reloading the page
                </h5>
            </div>
        );
    };
    render() {
        const quiz = this.props.quiz;
        const currentIndex = this.state.currentQuestionIndex;

        return (
            <div className="container quiz">
                <div className="content">
                    {this.props.showLoading
                        ? this.renderLoader()
                        : this.props.error
                            ? this.renderError()
                            : this.renderQuiz(currentIndex, quiz, quiz.length)}
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    quiz: types.array,
    onAnswer: types.func,
    showResults: types.func,
    showLoading: types.bool,
    error: types.bool
};
