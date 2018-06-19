import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { answerQuestion } from '../redux/actions';
import Body from './body';

export class Quiz extends React.Component {
    dispatchAnswer = (answer) => {
        this.props.dispatch(answerQuestion(answer));
    };
    render() {
        return (
            <Body
                quiz={this.props.quiz.results}
                onAnswer={this.dispatchAnswer}
            />
        );
    }
}

Quiz.propTypes = {
    quiz: types.object,
    dispatch: types.func
};

function mapStateToProps(state) {
    return {
        quiz: state.quiz_data
    };
}

export default connect(mapStateToProps)(Quiz);
