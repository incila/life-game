import React from 'react';
import './LifeStage.css';

function LifeStage({ choices, onDecision }) {
    return (
        <div className="life-stage">
            <h3>Choose Your Path</h3>
            {choices.map((choice, index) => (
                <div key={index} className="choice-card">
                    <p className="choice-text">{choice.text}</p>
                    <button className="choice-button" onClick={() => onDecision(choice)}>
                        Choose
                    </button>
                </div>
            ))}
        </div>
    );
}

export default LifeStage;
