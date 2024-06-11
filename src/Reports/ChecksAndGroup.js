import React, { useState, useEffect } from 'react';
import ChecksAndGroupData from '../Report/checksGroups.json'
function ChecksAndGroup() {
   const [jsonData, setJsonData] = useState();
   useEffect(() => {
     setJsonData(ChecksAndGroupData);
   }, []);
   console.log(jsonData);
   if (!jsonData) {
     return <div>Loading...</div>;
   }  
   return (
    <table>
        <thead>
            <tr>
                <th>Check Name</th>
                <th>Passes</th>
                <th>Failures</th>
            </tr>
        </thead>
        <tbody>
            {jsonData.groups.map((group, index) => (
                <React.Fragment key={index}>
                  &nbsp;<li className='group' rowSpan={group.checks.length}>{group.name}</li>&nbsp;
                    <tr>
                        <td>{group.checks[0].name}</td>
                        <td>{group.checks[0].passes}</td>
                        <td>{group.checks[0].failures}</td>
                    </tr>
                    {group.checks.slice(1).map((check, idx) => (
                        <tr key={idx}>
                            <td>{check.name}</td>
                            <td>{check.passes}</td>
                            <td>{check.failures}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
        </tbody>
    </table>
);
 }
 
 export default ChecksAndGroup;

