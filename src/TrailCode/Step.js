// src/components/Step.js
import React from 'react';

const Step = ({ step }) => {
  return (
    <div className="step">
      <p>{step.name} - <span className={step.status.toLowerCase()}>{step.status}</span></p>
    </div>
  );
};

export default Step;
