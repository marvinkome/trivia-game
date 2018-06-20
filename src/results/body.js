import React from 'react';
import types from 'prop-types';
import { ShowResult } from './show-result';

export function Body({ score, answers, playAgain }) {
    const questions_length = answers.length;

    return (
        <div className="results container">
            <div className="content">
                <div className="header">
                    <h1>
                        You scored {score}/{questions_length}
                    </h1>
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
                    <a className="btn-block btn" onClick={playAgain}>
                        Play again
                    </a>
                </div>
            </div>
        </div>
    );
}

Body.propTypes = {
    score: types.number,
    answers: types.array,
    playAgain: types.func
};
