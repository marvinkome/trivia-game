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

    // render methods
    render_options = (currentIndex, quiz) => {
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
    render_quiz = (currentIndex, quiz, quiz_length) => {
        return (
            <React.Fragment>
                <QuizCard 
                    item={quiz[currentIndex]} currentInd={currentIndex + 1} length={quiz_length} />
                {this.render_options(currentIndex, quiz)}
            </React.Fragment>
        );
    };
    render_loader = () => {
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
    render_error = () => {
        // check if user is offline
        const isOffline = !navigator.onLine;
        return (
            <div className="error center">
                <h5>
                    Error loading questions
                    {isOffline && ', check you connection and reload the page'}
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
                        ? this.render_loader()
                        : this.props.error
                            ? this.render_error()
                            : this.render_quiz(currentIndex, quiz, quiz.length)}
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
