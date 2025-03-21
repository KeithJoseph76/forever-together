import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import DaysTogether from '../components/DaysTogether';
import Plans from '../components/Plans';
import MainDisplay from '../components/MainDisplay';

const calculateDays = (startDate) => {
  const ISTOffset = 330 * 60 * 1000;
  const today = new Date(new Date().getTime() + ISTOffset);
  const start = new Date(new Date(startDate).getTime());
  const differenceInTime = today.getTime() - start.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays + 1;
};

const startDate = '2024-12-08';
const days = calculateDays(startDate);



const HomePage = () => {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="title">
        <Title />
      </div>
      <div className="days-together">
          <DaysTogether className="card">
            <p>Days Together</p>
            <h1>{days}</h1>
          </DaysTogether>
      </div>
      <div className="main">
          <MainDisplay />
      </div>
      <div className="plans">
        <Plans />
      </div>
    </div>
  );
};


export default HomePage;