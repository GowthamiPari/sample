 import React, { useState, useEffect } from 'react';
 import RequestMetricsData from './requestMetrics.json'
import CustomMetricsTab from './CustomMetrics';

function RequestMetricsTab() {
    // const [jsonData, setJsonData] = useState();
    // useEffect(() => {
    //   setJsonData(RequestMetricsData);
    // }, []);
    // console.log(jsonData);
    // if (!jsonData) {
    //   return <div>Loading...</div>;
    // }  
    return (
      <table className="request-metrics-table">
        <thead>
          <tr className='even-row'>
            <th></th>
            <th>Count</th>
            <th>Rate</th>
            <th>Average</th>
            <th>Maximum</th>
            <th>Median</th>
            <th>Minimum</th>
            <th>90thPercentile</th>
            <th>95thPercentile</th>

          </tr>
        </thead>
        <tbody>
          {RequestMetricsData.requestMetrics.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'} >
              <td style={{fontWeight: 'bold'}}>{row['name']}</td>
              <td>{row['count']}</td>
              <td>{row['rate']}</td>
              <td>{row['average']}</td>
              <td>{row['maximum']}</td>
              <td>{row['median']}</td>
              <td>{row['minimum']}</td>
              <td>{row['90thPercentile']}</td>
              <td>{row['95thPercentile']}</td>

            </tr>

          ))}
        </tbody>
      </table> 
           
    );
  }
  
  export default RequestMetricsTab;
// function RequestMetricsTab({ visible }) {
//     const [jsonData, setJsonData] = useState();
//     useEffect(() => {
//       if (visible) {
//         setJsonData(RequestMetricsData);
//       }
//     }, [visible]);
  
//     if (!visible) {
//       return null;
//     }
  
//     const tableRows = jsonData.map((row, rowIndex) => (
//       <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'grey-row' : ''}>
//         {Object.values(row).map((cellData, cellIndex) => (
//           <td key={cellIndex}>{cellData}</td>
//         ))}
//       </tr>
//     ));
  
//     return (
//       <table className="request-metrics-table">
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             <th>Column 3</th>
//             <th>Column 4</th>
//             <th>Column 5</th>
//             <th>Column 6</th>
//             <th>Column 7</th>
//             <th>Column 8</th>
//             <th>Column 9</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableRows}
//         </tbody>
//       </table>
//     );
//   }
  
// function RequestMetricsTab({ visible }) {
//     const [jsonData, setJsonData] = useState(null);
  
//     useEffect(() => {
//       if (visible) {
//         fetch('path/to/your/json/file.json')
//           .then(response => response.json())
//           .then(data => setJsonData(data))
//           .catch(error => console.error('Error fetching JSON:', error));
//       }
//     }, [visible]);
  
//     if (!visible) {
//       return null;
//     }
  
//     if (!jsonData) {
//       return <div>Loading...</div>;
//     }
  
//     const tableRows = jsonData.map((row, rowIndex) => (
//       <tr key={rowIndex}>
//         {Object.values(row).map((cellData, cellIndex) => (
//           <td key={cellIndex}>{cellData}</td>
//         ))}
//       </tr>
//     ));
  
//     return (
//       <table className="request-metrics-table">
//         <tbody>
//           {tableRows}
//         </tbody>
//       </table>
//     );
//   }

