import React from 'react';
import types from 'prop-types';
import { ShowResult } from './show-result';

export function Body({ score, answers, playAgain }) {
    const questions_length = answers.length;

    return (
        <div className="home section container">
            <div className="header">
                <p>
                    You scored {score}/{questions_length}
                </p>
            </div>
            <div className="body results">
                {answers.map((item) => (
                    <ShowResult
                        key={item.question}
                        resultType={item.result}
                        question={item.question}
                    />
                ))}
            </div>
            <div className="cta">
                <a onClick={playAgain}>Play again</a>
            </div>
        </div>
    );
}

Body.propTypes = {
    score: types.number,
    answers: types.array,
    playAgain: types.func
};
