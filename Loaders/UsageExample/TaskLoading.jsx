import React from 'react';
import CircularProgressLoader from './CircularProgressLoader';

const TaskLoading = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgressLoader />
        </div>
    );
};

export default TaskLoading;