import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const DashboardLoading = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h3><SkeletonLoader width="200px" height="24px" /></h3>
            <p><SkeletonLoader width="100%" height="18px" /></p>
            <p><SkeletonLoader width="80%" height="18px" /></p>
            <p><SkeletonLoader width="80%" height="18px" /></p>
            <p><SkeletonLoader width="100%" height="18px" /></p>
            <h3><SkeletonLoader width="200px" height="24px" /></h3>
            <p><SkeletonLoader width="100%" height="18px" /></p>
            <p><SkeletonLoader width="80%" height="18px" /></p>
            <p><SkeletonLoader width="80%" height="18px" /></p>
            <p><SkeletonLoader width="100%" height="18px" /></p>
        </div>
    );
};

export default DashboardLoading;