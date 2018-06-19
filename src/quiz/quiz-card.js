import React from 'react';
import types from 'prop-types';

export function QuizCard({ item }) {
    return (
        <React.Fragment>
            <div className="header">
                <p>
                    <span>{item.category}</span>
                </p>
            </div>
            <div className="body">
                <p
                    className="question"
                    dangerouslySetInnerHTML={{
                        __html: `${item.question}?`
                    }}
                />
            </div>
        </React.Fragment>
    );
}

QuizCard.propTypes = {
    item: types.object
};
