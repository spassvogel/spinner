import React from 'react';
import './styles/loading.css';

const Loading = () => {
    return (
        <div className="loading-background">
            <div className="white-block">
                <div className="outset"></div>
                <div className="blue-block"></div>
            </div>
            <div className="subtext">
                Stay curious
            </div>
        </div>
    )
}

export default Loading;
