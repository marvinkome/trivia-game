import React from 'react';
import types from 'prop-types';

export function QuizCard({ item, currentInd, length }) {
    const progressPercent = (currentInd / length) * 100;
    return (
        <React.Fragment>
            <div className="header">
                <p>{item.category}</p>
                <div className="question-progress">
                    <span>
                        Question {currentInd} out of {length}
                    </span>
                    <div className="progress">
                        <div className="determinate" style={{ width: `${progressPercent}%` }} />
                    </div>
                </div>
            </div>
            <div className="body">
                <p
                    className="question"
                    dangerouslySetInnerHTML={{
                        __html: item.question
                    }}
                />
            </div>
        </React.Fragment>
    );
}

QuizCard.propTypes = {
    item: types.object,
    currentInd: types.number,
    length: types.number
};
