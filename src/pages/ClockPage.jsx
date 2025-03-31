import React from "react";
import "./ClockPage.css"; // Import CSS
import Navbar from "../components/Navbar";
import DigitalClock from "../components/DigitalClock"; // Import DigitalClock component
import CountdownTimer from "../components/CountdownTimer";

const ClockPage = () => {
  return (
    <div className="clock-container">
      <div className="clock-nav"><Navbar/></div>
      <div className="clock-main">
        <div className="clock-section clock-1">
          <DigitalClock startDate="2024-12-08T00:00:00" label="Hours Passed Since Dec 8, 2024" />
        </div>
        <div className="clock-section clock-2">
          <CountdownTimer targetDate="2033-12-31T00:00:00" label="Countdown to Dec 31, 2033" />
        </div>
      </div>
    </div>
  );
};

export default ClockPage;