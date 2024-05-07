import React from 'react';
import './LifeStage.css';

function LifeStage({ choices, onDecision }) {
    return (
        <div className="life-stage">
            {choices.map((choice, index) => (
                <div key={index} className="choice-card">
                    <p className="choice-text" onClick={() => onDecision(choice)}>{choice.text}</p>
                </div>
            ))}
        </div>
    );
}

export default LifeStage;
