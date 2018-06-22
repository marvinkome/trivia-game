import React from 'react';
import types from 'prop-types';
import { ShowResult } from './show-result';

function getScoreColor(value) {
    value = parseInt(value);
    if (value < 40) {
        return 'bad';
    } else if (value >= 40 && value < 70) {
        return 'okay';
    } else {
        return 'good';
    }
}

export function Body({ score, answers, playAgain }) {
    const questionsLength = answers.length;
    const scoreInPercent = (parseInt(score) / parseInt(questionsLength)) * 100;
    const scoreColor = getScoreColor(scoreInPercent);

    return (
        <div className="results container">
            <div className="content">
                <div className="header">
                    <p className={`score ${scoreColor}`}>{scoreInPercent}%</p>
                    <p>
                        You got {score} out of {questionsLength} questions correct
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
                    <a className="btn" onClick={playAgain}>
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
