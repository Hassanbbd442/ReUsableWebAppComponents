import React from 'react';
import EllipsisLoader from './EllipsisLoader';

const InlineTextLoading = () => {
    return (
        <div>
            Loading<span style={{ marginLeft: '10px' }}><EllipsisLoader /></span>
        </div>
    );
};

export default InlineTextLoading;