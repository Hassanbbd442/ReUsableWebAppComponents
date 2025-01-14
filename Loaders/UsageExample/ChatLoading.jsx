import React from 'react';
import DotsLoader from './DotsLoader';

const ChatLoading = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DotsLoader />
        </div>
    );
};

export default ChatLoading;