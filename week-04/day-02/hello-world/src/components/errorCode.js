import React from 'react';

const ErrorCode = ({match}) => {
    return (
        <div>
            <h1>Error: {match.params.errorcode}</h1>
        </div>
    )
}

export default ErrorCode