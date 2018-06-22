import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { answerQuestion, setupQuiz } from '../../redux/actions';
import Body from './body';
import './styles.less';

export class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false
        };
    }
    async componentDidMount() {
        this.setState({
            loading: true
        });

        try {
            const response = await fetch(
                'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
            );
            const data = await response.json();

            this.props.setupQuiz(data);

            this.setState({
                loading: false
            });
        } catch (e) {
            this.setState({
                loading: false,
                error: true
            });
        }
    }
    showResults = () => {
        this.props.goTo('results');
    };
    dispatchAnswer = (answer) => {
        this.props.answerQuestion(answer);
    };
    render() {
        return (
            <Body
                quiz={this.props.quiz.results}
                onAnswer={this.dispatchAnswer}
                showResults={this.showResults}
                showLoading={this.state.loading}
                error={this.state.error}
            />
        );
    }
}

Quiz.propTypes = {
    quiz: types.object,
    setupQuiz: types.func,
    answerQuestion: types.func,
    goTo: types.func
};

function mapStateToProps(state) {
    return {
        quiz: state.quiz_data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setupQuiz: (data) => dispatch(setupQuiz(data)),
        answerQuestion: (data) => dispatch(answerQuestion(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
