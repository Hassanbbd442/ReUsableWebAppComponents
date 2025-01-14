import React from 'react';
import RippleLoader from './RippleLoader';

const AppLoading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <RippleLoader />
            
        </div>
    );
};

export default AppLoading;