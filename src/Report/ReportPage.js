import React, { useEffect, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEye, faChartBar, faTimes, faClock, faChartLine,faCheckSquare,faDownload,faUpload, faMountain, faRotateRight,faUser } from '@fortawesome/free-solid-svg-icons';
import summaryData from './summaryData.json'
import ReqMetrics from './ReqMetrics';
import OtherStatsTab from './OtherStatsTab';
import Box from './Box';
import Groups from './Groups';

function Header() {
    const currentTime = new Date();
  return (
    <header className="App-header">
      <h2  id='header-name'><span className="icon"><FontAwesomeIcon icon={faMountain}/></span> K6 Load Test: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</h2>
    </header>
  );
}


function ReportPage() {
    //const [visibility, setVisibility] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    // const handleClick = () => {
    //   setVisibility(true);

    // };
    const handleTabClick = (tab) => {
        setActiveTab(tab);

      };

    const [data, setData] = useState(null);


  useEffect(() => { 
      setData(summaryData);
  }, []);


  if(!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Header />

      <div className="content">
        <div className="boxes">
          <Box title="Total Requests" icon={faGlobe} value={data.totalRequests}/>
          <Box title="Failed Requests" icon={faTimes} value={data.failedRequests} />
          <Box title="Breached Thresholds" icon={faChartBar} value={data.breachedThresholds} />
          <Box title="Failed Checks" icon={faEye}  value={data.failedChecks}/>
        </div>
        <div className="tabs">
          <button className={`tab ${activeTab === 'requestMetrics' ? 'active' : ''}`} onClick={() => handleTabClick('requestMetrics')}>
            <FontAwesomeIcon icon={faClock} /><br/>
            <span>Request Metrics</span>
          </button>
          <button className={`tab ${activeTab === 'otherStats' ? 'active' : ''}`} onClick={() => handleTabClick('otherStats')}>
            <FontAwesomeIcon icon={faChartLine} /><br/>
            <span>Other Stats</span>
          </button>
          <button className={`tab ${activeTab === 'checksGroups' ? 'active' : ''}`} onClick={() => handleTabClick('checksGroups')}>
            <FontAwesomeIcon icon={faCheckSquare} /><br/>
            <span>Checks & Groups</span>
          </button>
        </div>
        {activeTab === 'requestMetrics' && <ReqMetrics />}
        {activeTab === 'otherStats' && <OtherStatsTab />}
        {activeTab === 'checksGroups' && <Groups />}
      </div>
    </div>
  );
}

export default ReportPage;


