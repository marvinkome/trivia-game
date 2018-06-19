import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { Body } from './body';

export class Results extends React.Component {
    render() {
        const { score, all_answers } = this.props.user_answers;

        return <Body score={score} answers={all_answers} />;
    }
}

Results.propTypes = {
    user_answers: types.object
};

function mapStateToProps(state) {
    return {
        user_answers: state.user_answers
    };
}

export default connect(mapStateToProps)(Results);
