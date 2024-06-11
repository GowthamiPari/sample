// src/App.js
import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import './styles.css';
import reportData from './reportData.json'
const AppReport = () => {
  const [data, setData] = useState(null);
  console.log(reportData);
  

  useEffect(() => {
    setData(reportData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <div className="App">
      <h1 className='App_report'>Truterra Test Report</h1>
      {data.features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
    </div>
  );
};

export default AppReport;
