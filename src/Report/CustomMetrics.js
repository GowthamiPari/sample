import React, { useState, useEffect } from 'react';
import RequestMetricsData from './requestMetrics.json'
function CustomMetricsTab({ name }) {
   const [jsonData, setJsonData] = useState();
   useEffect(() => {
     setJsonData(RequestMetricsData);
   }, []);
   console.log(jsonData);
   if (!jsonData) {
     return <div>Loading...</div>;
   }  
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
         {RequestMetricsData.customMetrics.map((row, rowIndex) => (
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
 
 export default CustomMetricsTab;


