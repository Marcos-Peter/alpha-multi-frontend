import { useState, useEffect, useRef } from 'react';

interface PropType {
  duration: number;
}

export const Countdown = ({ duration }: PropType) => {
  const intervalRef = useRef(0);

  const [timer, setTimer] = useState('00:00:00');

  const getRemainingTime = (endTime: string | number | Date) => {
    const total =
      Date.parse(endTime.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (deadLine: Date) => {
    const { total, hours, minutes, seconds } = getRemainingTime(deadLine);

    if (total >= 0) {
      setTimer(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
      );
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const clearTimer = (endTime: Date) => {
    setTimer('00:00:00');
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => startTimer(endTime), 1000);
    intervalRef.current = id;
  };

  const getDeadLine = (timeInSeconds: number) => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + timeInSeconds);
    return date;
  };

  useEffect(() => {
    clearTimer(getDeadLine(duration));
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
};
