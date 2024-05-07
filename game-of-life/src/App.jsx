import React, { useState, useEffect } from 'react';
import LifeStage from './components/LifeStage';
import './App.css';

// Define the choices array
const choices = [
    {
        text: "Start college",
        ageRange: { min: 18, max: 30 },
        immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
        longTermEffects: [{ effect: { money: 20 }, duration: 5, startYear: 5 }]
    },
    {
        text: "Travel the world",
        ageRange: { min: 18, max: 50 },
        immediateEffects: { health: 10, money: -15, love: 5, happiness: 20 },
        longTermEffects: []
    },
    {
        text: "Learn a trade",
        ageRange: { min: 18, max: 45 },
        immediateEffects: { health: 0, money: 5, love: 0, happiness: 5 },
        longTermEffects: []
    },
    // More choices here...
];

function App() {
    const [age, setAge] = useState(18);
    const [health, setHealth] = useState(100);
    const [money, setMoney] = useState(50);
    const [love, setLove] = useState(50);
    const [happiness, setHappiness] = useState(50);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setAge(a => {
                    if (a > 100) { // Stop when max age is reached
                        clearInterval(interval);
                        return a;
                    }
                    return a + 1;
                });
                setHealth(h => h - 2); // Deduct 2 health points each year
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [loading]);

    useEffect(() => {
        const availableChoices = filterChoices();
        if (availableChoices.length > 0 || age > 100) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [age]); // Check for available choices whenever age changes

    const filterChoices = () => {
        return choices.filter(choice =>
            age >= choice.ageRange.min &&
            age <= choice.ageRange.max &&
            !history.includes(choice.text)
        ).sort(() => Math.random() - 0.5).slice(0, 2);
    };

    const handleDecision = (choice) => {
        setHealth(health + choice.immediateEffects.health - 2); // Apply immediate effects and deduct annual health
        setMoney(money + choice.immediateEffects.money);
        setLove(love + choice.immediateEffects.love);
        setHappiness(happiness + choice.immediateEffects.happiness);
        setHistory([...history, choice.text]);  // Record the choice
        setAge(age + 1);  // Increment age after making a decision
    };

    if (age > 100) {
        return <div className="game-over">Game Over: You've lived a full life!</div>;
    }

    return (
        <div className="game-container">
            <h2>Game of Life</h2>
            <p>Age: {age}</p>
            <p>Health: {health}</p>
            <p>Money: {money}</p>
            <p>Love: {love}</p>
            <p>Happiness: {happiness}</p>
            {!loading ? (
                filterChoices().length > 0 ? (
                    <LifeStage choices={filterChoices()} onDecision={handleDecision} />
                ) : (
                    <div>No available choices at this age, time passes...</div>
                )
            ) : (
                <div className="loading">Time passes...</div>
            )}
        </div>
    );
}

export default App;
