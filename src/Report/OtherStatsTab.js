import React, { useState, useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEye, faChartBar, faTimes, faClock, faChartLine,faCheckSquare,faDownload,faUpload, faMountain, faRotateRight,faUser } from '@fortawesome/free-solid-svg-icons';
import Box from './Box';
import otherStatsData from'./otherStats.json'
function OtherStatsTab() {
    const [data, setData] = useState(null);


  useEffect(() => { 
      setData(otherStatsData);
  }, []);
  console.log('data',data);
  console.log('otherStatsData',otherStatsData.otherStats);

  if(!data) {
    return <div>Loading...</div>;
  }
  function Boxx({ title, icon, values }) {
    return (
        <div className="boxx">
            <span className="icon"><FontAwesomeIcon icon={icon} size="2x" /></span>
            <h3>{title}</h3>
            {values.map((value, index) => (
                <div key={index}>
                    <strong>{value.label}:</strong> {value.value}
                </div>
            ))}
        </div>
    );
}
  
    // return (
    //     <div className="other-stats">
    //         <div className="boxes">
    //             <Box title="Checks" icon={faEye} value={data.checks} />
    //             <Box title="Iterations" icon={faRotateRight} value={data.maxResponseTime} />
    //             <Box title="Virtual User" icon={faUser} value={data.minResponseTime} />
    //             <Box title="Requests" icon={faGlobe} value={data.requestsPerSecond} />
    //             <Box title="Data Received" icon={faDownload} value={data.dataReceived} />
    //             <Box title="Data Sent" icon={faUpload} value={data.dataSent} />
    //         </div>
    //     </div>
    // );

     const boxesData = [
        {
            title: "Checks",
            icon: faCheckSquare,
            values: [
                { label: 'Passed', value: data.otherStats.checks.passed },
                { label: 'Failed', value: data.otherStats.checks.failed }
            ]
        },
        {
            title: "Iterations",
            icon: faRotateRight,
            values: [
                { label: 'Total', value: data.otherStats.iterations.total },
                { label: 'Rate', value: data.otherStats.iterations.rate }
            ]
        },
        {
            title: "Virtual Users",
            icon: faUser,
            values: [
                { label: 'Min', value: data.otherStats.virtualUsers.min },
                { label: 'Max', value: data.otherStats.virtualUsers.max }
            ]
        },
        {
            title: "Requests",
            icon: faGlobe,
            values: [
                { label: 'Total', value: data.otherStats.requests.total },
                { label: 'Rate', value: data.otherStats.requests.rate }
            ]
        },
        {
            title: "Data Received",
            icon: faDownload,
            values: [
                { label: 'Total (MB)', value: `${data.otherStats.dataReceived.total} MB` },
                { label: 'Rate (MB/s)', value: `${data.otherStats.dataReceived.rate} MB/s` }
            ]
        },
        {
            title: "Data Sent",
            icon: faUpload,
            values: [
                { label: 'Total (MB)', value: `${data.otherStats.dataSent.total} MB` },
                { label: 'Rate (MB/s)', value: `${data.otherStats.dataSent.rate} MB/s` }
            ]
        }
    ];

    return (
        <div className="other-stats">
            <div className="other-stats-boxes">
                {boxesData.map((item, index) => (
                    <Boxx key={index} title={item.title} icon={item.icon} values={item.values} />
                ))}
            </div>
        </div>
    );
  }
  export default OtherStatsTab;