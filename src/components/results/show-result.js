import React from 'react';
import types from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';
import FaCheck from 'react-icons/lib/fa/check';

function resultIcon(type) {
    if (type === 'Failed') {
        return <FaClose />;
    } else {
        return <FaCheck />;
    }
}

export function ShowResult({ resultType, question }) {
    return (
        <div className="result-card">
            <p>
                <span className={resultType}>{resultIcon(resultType)}</span>
                <span dangerouslySetInnerHTML={{ __html: question }} />
            </p>
        </div>
    );
}

ShowResult.propTypes = {
    resultType: types.string,
    question: types.any
};
