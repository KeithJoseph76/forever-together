import React, { useState, useEffect } from "react";

const CountdownTimer = ({ label }) => {
  const targetDate = new Date("December 31, 2033 23:59:59");
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const diffInSeconds = Math.floor((targetDate - now) / 1000);

      if (diffInSeconds < 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diffInSeconds / (24 * 60 * 60));
      const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
      const seconds = diffInSeconds % 60;

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-clock">
      <p>
        {timeRemaining.days}D {timeRemaining.hours}H {timeRemaining.minutes}M {timeRemaining.seconds}S
      </p>
    </div>
  );
};

export default CountdownTimer;