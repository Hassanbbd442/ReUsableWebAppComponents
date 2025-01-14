import React from 'react';
import RingLoader from './RingLoader';

const FullPageLoading = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RingLoader />
        </div>
    );
};

export default FullPageLoading;