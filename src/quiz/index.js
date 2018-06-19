import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { answerQuestion } from '../redux/actions';
import Body from './body';

export class Quiz extends React.Component {
    showResults = () => {
        this.props.goTo('results');
    };
    dispatchAnswer = (answer) => {
        this.props.dispatch(answerQuestion(answer));
    };
    render() {
        return (
            <Body
                quiz={this.props.quiz.results}
                onAnswer={this.dispatchAnswer}
                showResults={this.showResults}
            />
        );
    }
}

Quiz.propTypes = {
    quiz: types.object,
    dispatch: types.func,
    goTo: types.func
};

function mapStateToProps(state) {
    return {
        quiz: state.quiz_data
    };
}

export default connect(mapStateToProps)(Quiz);
