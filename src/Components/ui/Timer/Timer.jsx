import { useState, useEffect } from 'react'
import "./Timer.css"

const Timer = () => {
    const [day, setDay] = useState(30);
    const [hour, setHour] = useState(9);
    const [minute, setMinute] = useState(24);
    const [seconds, setSeconds] = useState(59);

    // Function to format number to two digits
    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) return prevSeconds - 1;
                if (minute > 0 || hour > 0 || day > 0) {
                    setMinute((prevMinute) => {
                        if (prevMinute > 0) return prevMinute - 1;
                        setHour((prevHour) => {
                            if (prevHour > 0) return prevHour - 1;
                            if (day > 0) {
                                setDay((prevDay) => prevDay - 1);
                                return 23;
                            }
                            return prevHour;
                        });
                        return 59;
                    });
                    return 59;
                }
                return 0;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds, minute, hour, day]);

    return (
        <div className="timer">
            <div className="days">
                <div className="value">{formatNumber(day)}</div>        
                <div className="label">Days</div>
            </div>
            <div className="hour">
                <div className="value">{formatNumber(hour)}</div>        
                <div className="label">Hrs</div>
            </div>
            <div className="minutes">
                <div className="value">{formatNumber(minute)}</div>        
                <div className="label">Mins</div>
            </div>
            <div className="seconds">
                <div className="value">{formatNumber(seconds)}</div>        
                <div className="label">Secs</div>
            </div>
        </div>
    )
}

export default Timer
