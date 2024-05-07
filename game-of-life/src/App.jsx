import React, { useState, useEffect } from 'react';
import LifeStage from './components/LifeStage';
import './App.css';



const choices = [
    // Less Impactful and Casual Choices
    {
        text: "Pakistanda Doğdun",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: -150, money: 0, love: 0, happiness: 0 },
        longTermEffects: []
    },
    {
        text: "Türkiyede Doğdun",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: -20, money: 0, love: 0, happiness: -30 },
        longTermEffects: []
    },
    {
        text: "Amerikada Doğdun",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: 0, money: 3000, love: 20, happiness: 30 },
        longTermEffects: []
    },
    {
        text: "Almanyada Doğdun",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: 50, money: 5000, love: 0, happiness: 30 },
        longTermEffects: []
    },
    {
        text: "Hindistanda Doğdun",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: 0, money: 0, love: 0, happiness: 0 },
        longTermEffects: []
    },
    {
        text: "Evdeki bitkileri bakımını yap",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 5, money: 0, love: 0, happiness: 5 },
        longTermEffects: []
    },
    {
        text: "Haftada bir yeni bir yemek tarifi deneyin",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 0, money: -5, love: 0, happiness: 10 },
        longTermEffects: []
    },
    {
        text: "Bir enstrüman çalmayı öğrenin",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 10, money: -10, love: 0, happiness: 15 },
        longTermEffects: []
    },
    {
        text: "Gönüllü çalışmaya başla",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 10, money: 0, love: 5, happiness: 15 },
        longTermEffects: []
    },
    {
        text: "Bir hobinin tadını çıkar",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 5, money: -5, love: 0, happiness: 10 },
        longTermEffects: []
    },
    {
        text: "Yeni bir dil öğrenmeye başla",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 10, money: -10, love: 0, happiness: 15 },
        longTermEffects: []
    },
    {
        text: "Yoga veya meditasyon yapmayı dene",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 15, money: 0, love: 0, happiness: 20 },
        longTermEffects: []
    },
    {
        text: "Bir spor veya fitness rutini başlat",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 20, money: -5, love: 0, happiness: 15 },
        longTermEffects: []
    },
    {
        text: "Evde temizlik yap",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 10, money: 0, love: 0, happiness: 10 },
        longTermEffects: []
    },
    {
        text: "Daha sağlıklı bir beslenme alışkanlığı edin",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 15, money: -10, love: 0, happiness: 10 },
        longTermEffects: []
    },
    // Important Choices with Long-Term Effects
    {
        text: "Kendi işini kur",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 0, money: -50, love: 0, happiness: 20 },
        longTermEffects: [{ effect: { money: 100 }, duration: 10, startYear: 5 }]
    },
    {
        text: "Yüksek öğrenim için yurtdışına git",
        ageRange: { min: 18, max: 30 },
        immediateEffects: { health: -5, money: -30, love: 5, happiness: 10 },
        longTermEffects: [{ effect: { money: 50 }, duration: 5, startYear: 5 }]
    },
    {
        text: "Bir aile kur",
        ageRange: { min: 20, max: 40 },
        immediateEffects: { health: 0, money: -30, love: 20, happiness: 30 },
        longTermEffects: [{ effect: { happiness: 50 }, duration: 20, startYear: 5 }]
    },
    {
        text: "Yatırım yapmaya başla",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
        longTermEffects: [{ effect: { money: 50 }, duration: 10, startYear: 5 }]
    },
    {
        text: "Sağlık sigortası satın al",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 10, money: -20, love: 0, happiness: 10 },
        longTermEffects: [{ effect: { health: 30 }, duration: 20, startYear: 5 }]
    },
    {
        text: "Girişimci ol",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: -10, money: -30, love: 0, happiness: 20 },
        longTermEffects: [{ effect: { money: 100 }, duration: 15, startYear: 5 }]
    },
    {
        text: "Emeklilik fonu aç",
        ageRange: { min: 18, max: 40 },
        immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
        longTermEffects: [{ effect: { money: 50 }, duration: 25, startYear: 5 }]
    },
    {
        text: "Ev satın al",
        ageRange: { min: 25, max: 50 },
        immediateEffects: { health: 0, money: -50, love: 0, happiness: 20 },
        longTermEffects: [{ effect: { happiness: 50 }, duration: 30, startYear: 5 }]
    },
    {
        text: "Yeni bir kariyer yoluna gir",
        ageRange: { min: 25, max: 50 },
        immediateEffects: { health: -10, money: -30, love: 0, happiness: 20 },
        longTermEffects: [{ effect: { money: 50 }, duration: 15, startYear: 5 }]
    },
    {
        text: "Yatırım yapmak için bir danışman işe al",
        ageRange: { min: 30, max: 60 },
        immediateEffects: { health: 0, money: -20, love: 0, happiness: 10 },
        longTermEffects: [{ effect: { money: 50 }, duration: 20, startYear: 5 }]
    }
];



function App() {
    const [animating, setAnimating] = useState(false);
    const [currentDecision, setCurrentDecision] = useState(null);
    const [age, setAge] = useState(1);
    const [health, setHealth] = useState(100);
    const [money, setMoney] = useState(0);
    const [love, setLove] = useState(0);
    const [happiness, setHappiness] = useState(10);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setAge(a => {
                    if (a > 100 || health <= 0) {
                        clearInterval(interval);
                        return a;
                    }
                    return a + 1;
                });
                if (age >= 18) {
                    setHealth(h => h - 5); // Deduct 5 health points each year after age 18
                }
            }, age < 18 ? 1000 : 2000); // Time passes faster until age 18

            return () => clearInterval(interval);
        }
    }, [loading, health, age]);

    useEffect(() => {
        const availableChoices = filterChoices();
        if (availableChoices.length > 0 || age > 100 || health <= 0) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [age, health]);

    const filterChoices = () => {
        return choices.filter(choice =>
            age >= choice.ageRange.min &&
            age <= choice.ageRange.max &&
            !history.includes(choice.text)
        ).sort(() => Math.random() - 0.5).slice(0, 2);
    };

    const handleDecision = (choice) => {
        setCurrentDecision(choice);
        setAnimating(true);
        setTimeout(() => {
            let newMoney = money + choice.immediateEffects.money;
            if (newMoney < 0) {
                newMoney = 0;
                alert("Your money is below 0. Taking credit from the bank...");
            }
            setHealth(health + choice.immediateEffects.health - (age >= 18 ? 5 : 0));
            setMoney(newMoney);
            setLove(love + choice.immediateEffects.love);
            setHappiness(happiness + choice.immediateEffects.happiness);
            setHistory([...history, choice.text]);
            setAge(age + 1);
            setAnimating(false);
        }, age < 18 ? 1000 : 2000); // Animation duration is shorter until age 18
    };

    if (age > 100 || health <= 0) {
        return <div className="game-over">Oyun bitti: Hakkıyla bir ömür yaşadın!</div>;
    }

    return (
        <div className="game-container">
            <header>
                <h1>Davşan Hayantı</h1>
                <div className="stats">
                    <p>Yaş: {age} </p>
                    <p>Sağlık: {health} 🩺</p>
                    <p>Para: {money} 💸</p>
                    <p>Aşk: {love} 💌</p>
                    <p>Mutluluk: {happiness} 🙂</p>
                </div>
            </header>
            <section>
                {animating ? (
                    <div className="loading">Zaman geşiyor...</div>
                ) : (
                    <LifeStage choices={filterChoices()} onDecision={handleDecision} />
                )}
            </section>
        </div>
    );
}

export default App;
