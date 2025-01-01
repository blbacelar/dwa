"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [localEndTime, setLocalEndTime] = useState<string>("");

  useEffect(() => {
    // Format the end date in user's local timezone
    const endDate = new Date(targetDate);
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
    setLocalEndTime(formatter.format(endDate));

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-black/40 rounded-lg p-2 sm:p-4 min-w-[60px] sm:min-w-[100px]">
      <span className="text-xl sm:text-3xl md:text-4xl font-bold text-gold-400">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <p className="text-sm sm:text-base md:text-lg mb-2">
        Promoção válida até: {localEndTime}
      </p>
      <div className="flex gap-2 sm:gap-4 justify-center">
        <TimeUnit value={timeLeft.days} label="dias" />
        <TimeUnit value={timeLeft.hours} label="horas" />
        <TimeUnit value={timeLeft.minutes} label="min" />
        <TimeUnit value={timeLeft.seconds} label="seg" />
      </div>
    </div>
  );
}
