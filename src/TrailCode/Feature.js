// src/components/Feature.js
import React from 'react';
import Scenario from './Scenario'

const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <h2>{feature.name}</h2>
      <p>{feature.description}</p>
      {feature.scenarios.map((scenario, index) => (
        <Scenario key={index} scenario={scenario} />
      ))}
    </div>
  );
};

export default Feature;
