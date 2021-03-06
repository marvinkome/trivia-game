import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { Body } from './body';
import { resetQuiz } from '../../redux/actions';
import './styles.less';

export class Results extends React.Component {
    playAgain = (e) => {
        e.preventDefault();
        this.props.resetQuiz();
        this.props.goTo('quiz');
    };
    render() {
        const { score, all_answers } = this.props.user_answers;

        return <Body score={score} answers={all_answers} playAgain={this.playAgain} />;
    }
}

Results.propTypes = {
    user_answers: types.object,
    dispatch: types.func,
    goTo: types.func
};

function mapStateToProps(state) {
    return {
        user_answers: state.user_answers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetQuiz: () => dispatch(resetQuiz())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
