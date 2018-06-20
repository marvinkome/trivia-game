import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { Body } from './body';
import { resetQuiz } from '../redux/actions';
import './styles.less';

export class Results extends React.Component {
    playAgain = (e) => {
        e.preventDefault();
        this.props.dispatch(resetQuiz());
        this.props.goTo('');
    };
    render() {
        const { score, all_answers } = this.props.user_answers;

        return (
            <Body
                score={score}
                answers={all_answers}
                playAgain={this.playAgain}
            />
        );
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

export default connect(mapStateToProps)(Results);
