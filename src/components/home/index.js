import React from 'react';
import types from 'prop-types';
import './styles.less';

export default class Home extends React.Component {
    goToQuiz = (e) => {
        e.preventDefault();
        this.props.goTo('quiz');
    };
    render() {
        return (
            <div className="container home">
                <div className="content">
                    <div className="header">
                        <h1> Welcome to the trivia challange</h1>
                    </div>
                    <div className="body">
                        <p>
                            You will be presented with 10 True or False questions. Can you score
                            100%? Let{'\''}s find out.
                        </p>
                    </div>
                    <div className="center-btn">
                        <a onClick={this.goToQuiz} className="btn">
                            begin
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    goTo: types.func
};
