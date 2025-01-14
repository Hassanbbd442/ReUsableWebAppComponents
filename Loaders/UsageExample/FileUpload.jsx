import React, { useState, useEffect } from 'react';
import ProgressBarLoader from './ProgressBarLoader';

const FileUpload = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 10 : 100));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h3>Uploading File...</h3>
            <ProgressBarLoader progress={progress} />
        </div>
    );
};

export default FileUpload;