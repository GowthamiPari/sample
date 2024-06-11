// src/components/Scenario.js
import React from 'react';
import Step from './Step'
const Scenario = ({ scenario }) => {
  return (
    <div className="scenario">
      <h3>{scenario.name}</h3>
      <p>Status: <span className={scenario.status.toLowerCase()}>{scenario.status}</span></p>
      <p>Duration: {scenario.duration} ms</p>
      {scenario.steps.map((step, index) => (
        <Step key={index} step={step} />
      ))}
    </div>
  );
};

export default Scenario;
