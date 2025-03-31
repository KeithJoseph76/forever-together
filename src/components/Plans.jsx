import React, { useState } from "react";
import "./Plans.css";

const Plans = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Waffle", completed: false },
    { id: 2, text: "Amusement Park", completed: false },
    { id: 3, text: "One Day Together", completed: false },
    { id: 4, text: "Majnu Ka Tilla", completed: false },
  ]);

  const toggleCompleted = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="plans-container">
      <h1 className="plans-title">Plans</h1>
      <ul className="checklist">
        {checklist.map((item) => (
          <li key={item.id} className={`checklist-item ${item.completed ? "completed" : ""}`}>
            <label className="checkbox-container">
              <input type="checkbox" checked={item.completed} onChange={() => toggleCompleted(item.id)} />
              <span className="checkmark"></span>
              <span className="item-text">{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plans;