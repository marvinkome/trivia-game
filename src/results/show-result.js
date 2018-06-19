import React from 'react';
import types from 'prop-types';

export function ShowResult({ resultType, question }) {
    return (
        <p className={`result ${resultType}`}>
            <span>{resultType} - </span>
            {question}
        </p>
    );
}

ShowResult.propTypes = {
    resultType: types.string,
    question: types.any
};
