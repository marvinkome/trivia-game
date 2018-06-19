import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h4> Welcome to Trivia challange!!</h4>
                </div>
                <div className="body">
                    <p>Can you score 100%? let{'\''}s find out</p>
                </div>
                <Link to="/quiz" className="btn">
                    begin
                </Link>
            </div>
        );
    }
}
