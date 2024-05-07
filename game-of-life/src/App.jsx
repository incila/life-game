import React, { useState, useEffect } from 'react';
import LifeStage from './components/LifeStage';
import './App.css';



const choices = [
    // Less Impactful and Casual Choices
    {
        text: "Pakistanda Doğ",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: -50, money: 0, love: 0, happiness: 0 },
        longTermEffects: [{ effect: { money: 50 }, duration: 20, startYear: 1 }]
    },
    {
        text: "Türkiyede Doğ",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: 0, money: 1000, love: 0, happiness: 0 },
        longTermEffects: []
    },
    {
        text: "Amerikada Doğ",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: -20, money: 50000, love: 30, happiness: 40 },
        longTermEffects: []
    },
    {
        text: "Almanyada Doğ",
        ageRange: { min: 0, max: 1 },
        immediateEffects: { health: 50, money: 5000, love: 10, happiness: 30 },
        longTermEffects: []
    },
    {
        text: "Hindistanda Doğ",
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
        immediateEffects: { health: 0, money: 0, love: 5, happiness: 15 },
        longTermEffects: []
    },
    {
        text: "Bir hobinin tadını çıkar",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 0, money: -5000, love: 0, happiness: 10 },
        longTermEffects: []
    },
    {
        text: "Yeni bir dil öğrenmeye başla",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 20, money: -10000, love: 0, happiness: 25 },
        longTermEffects: []
    },
    {
        text: "Yoga veya meditasyon yapmayı dene",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 25, money: 10000, love: 20, happiness: 30 },
        longTermEffects: []
    },
    {
        text: "Bir spor veya fitness rutini başlat",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 50, money: -10000, love: 0, happiness: 15 },
        longTermEffects: []
    },
    {
        text: "Evde temizlik yap",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 10, money: 0, love: 0, happiness: -10 },
        longTermEffects: []
    },
    {
        text: "Daha sağlıklı bir beslenme alışkanlığı edin",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: 45, money: -8000, love: 0, happiness: 0 },
        longTermEffects: []
    },
    // Important Choices with Long-Term Effects
    {
        text: "Kendi işini kur",
        ageRange: { min: 18, max: 99 },
        immediateEffects: { health: -10, money: -50000, love: 0, happiness: -10 },
        longTermEffects: [{ effect: { money: 20000, happiness: 20 }, duration: 10, startYear: 5 }]
    },
    {
        text: "Yüksek öğrenim için yurtdışına git",
        ageRange: { min: 18, max: 30 },
        immediateEffects: { health: 0, money: -30000, love: 5, happiness: 30 },
        longTermEffects: [{ effect: { happiness: 50, love: 50 }, duration: 5, startYear: 5 }]
    },
    {
        text: "Bir aile kur",
        ageRange: { min: 20, max: 40 },
        immediateEffects: { health: 0, money: -200000, love: 500, happiness: 30 },
        longTermEffects: [{ effect: { love: -50 }, duration: 20, startYear: 5 }]
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
        immediateEffects: { health: 200, money: -2000000, love: 200, happiness: 200 },
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
    const [happiness, setHappiness] = useState(0);
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
                    setHealth(h => h - 5);
                }
            }, age < 18 ? 300 : 3000);

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
                alert("Paranız bitti, yapı krediden kredi çekiliyor..!");
            }
            setHealth(health + choice.immediateEffects.health - (age >= 18 ? 5 : 0));
            setMoney(newMoney);
            setLove(love + choice.immediateEffects.love);
            setHappiness(happiness + choice.immediateEffects.happiness);
            setHistory([...history, choice.text]);
            setAge(age + 1);
            setAnimating(false);
        }, age < 18 ? 300 : 4000); 
    };


    if (age > 100) {
        return <div className="game-over">Oyun bitti! 100 yaşına ulaştın!</div>;
    }

    else if (age > 77 && health <= 0 ) {
        if (happiness >= 50 && love >= 50) {
            return <div className="game-over">Tebrikler! Uzun ve mutlu bir ömür yaşadın!</div>;}
        if (happiness < 50 && love >= 50) {
            return <div className="game-over">Tebrikler! Uzun ve sevgi dolu bir ömür yaşadın!</div>;}
        if (happiness >= 50 && love < 50) {
            return <div className="game-over">Tebrikler! Uzun ve mutlu bir ömür yaşadın!</div>;}
        if (happiness < 50 && love < 50) {
            return <div className="game-over">Uzun ama kötü bir ömür yaşadın gibi görünüyor. Uzun yaşamak marifet değil.</div>;}
        }

    else if (health <= 0) {
        if (happiness >= 50 && love >= 50) {
            return <div className="game-over">Tebrikler! Kısa ama mutlu ve sevgi dolu bir ömür yaşadın!</div>;}
        if (happiness < 50 && love >= 50) {
            return <div className="game-over">Tebrikler! Kısa ama sevgi dolu bir ömür yaşadın!</div>;}
        if (happiness >= 50 && love < 50) {
            return <div className="game-over">Tebrikler! Kısa ama mutlu bir ömür yaşadın!</div>;}
        if (happiness < 50 && love < 50) {
            return <div className="game-over">Kısa ve kötü bir ömür yaşadın, daha iyi kararlar vermek için yeniden başla.</div>;}
    }
    

   

    return (
        <div className="game-container">
            <header>
                <h1>Davşan Hayantı</h1>
                <div className="stats">
                    <p>Yaş: {age} </p>
                    <p>Sağlık: {health}🩺</p>
                    <p>Para: {money}TL💸</p>
                    <p>Aşk: {love} 💌</p>
                    <p>Mutluluk: {happiness}🙂</p>
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
