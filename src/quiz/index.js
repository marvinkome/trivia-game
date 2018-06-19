import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import Body from './body';

export class Quiz extends React.Component {
    render() {
        return <Body quiz={this.props.quiz.results} />;
    }
}

Quiz.propTypes = {
    quiz: types.object
};

function mapStateToProps(state) {
    return {
        quiz: state.quiz_data
    };
}

export default connect(mapStateToProps)(Quiz);
