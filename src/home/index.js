import React from 'react';
import types from 'prop-types';

export default class Home extends React.Component {
    goToQuiz = (e) => {
        e.preventDefault();
        this.props.goTo('quiz');
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h4> Welcome to Trivia challange!!</h4>
                </div>
                <div className="body">
                    <p>Can you score 100%? let{'\''}s find out</p>
                </div>
                <a onClick={this.goToQuiz} className="btn">begin</a>
            </div>
        );
    }
}

Home.propTypes = {
    goTo: types.func
};
