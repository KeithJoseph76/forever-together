import React, { useState, useEffect } from "react";

const DigitalClock = ({ startDate, label }) => {
  const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClock = () => {
      const start = new Date(startDate);
      const now = new Date();
      const diffInSeconds = Math.floor((now - start) / 1000);

      const days = Math.floor(diffInSeconds / (24 * 60 * 60));
      const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
      const seconds = diffInSeconds % 60;

      setTimePassed({ days, hours, minutes, seconds });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="digital-clock">
      <p>
        {timePassed.days}D {timePassed.hours}H {timePassed.minutes}M {timePassed.seconds}S 
      </p>
    </div>
  );
};

export default DigitalClock;