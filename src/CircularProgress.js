import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar} from 'react-circular-progressbar';
import './CircularProgress.css';

function CircularProgress() {

    const percentage = 66;

    return (
        <div className="circularProgress">
        <CircularProgressbar 
        className="progress__bar"
        value={percentage}
        text={`${percentage}%`}
        /> 
        </div>
    )
}

export default CircularProgress
