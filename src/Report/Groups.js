import React, { useState, useEffect } from 'react';
import ChecksAndGroupData from './checksGroups.json'

function Groups() {
const [jsonData, setJsonData] = useState();
   useEffect(() => {
     setJsonData(ChecksAndGroupData);
   }, []);
   console.log(jsonData);
   if (!jsonData) {
     return <div>Loading...</div>;
   }  
//    return (
//     <table>
//         <thead>
//             <tr>
//                 <th>Check Name</th>
//                 <th>Passes</th>
//                 <th>Failures</th>
//             </tr>
//         </thead>
//         <tbody>
//             {jsonData.groups.map((group, index) => (
//                 <React.Fragment key={index}>
//                   &nbsp;<li className='group' rowSpan={group.checks.length}>{group.name}</li>&nbsp;
//                     <tr>
//                         <td>{group.checks[0].name}</td>
//                         <td>{group.checks[0].passes}</td>
//                         <td>{group.checks[0].failures}</td>
//                     </tr>
//                     {group.checks.slice(1).map((check, idx) => (
//                         <tr key={idx}>
//                             <td>{check.name}</td>
//                             <td>{check.passes}</td>
//                             <td>{check.failures}</td>
//                         </tr>
//                     ))}
//                 </React.Fragment>
//             ))}
//         </tbody>
//     </table>
// );
// return (
//     <table>
//     <thead>
//         <tr>
//             <td>Check Name</td>
//             <td>Passes</td>
//             <td>Failures</td>
//         </tr>
//     </thead>
//     <tbody>
//         {jsonData.groups.map((group, index) => (
//             group.checks.map((check, idx) => (
//                 [
//                     idx === 0 && (
//                         <tr key={`${index}-${idx}`}>
//                             <td rowSpan={group.checks.length}>{group.name}</td>
//                             <td>{check.name}</td>
//                             <td>{check.passes}</td>
//                             <td>{check.failures}</td>
//                         </tr>
//                     ),
//                     idx !== 0 && (
//                         <tr key={`${index}-${idx}`}>
//                             <td>{check.name}</td>
//                             <td>{check.passes}</td>
//                             <td>{check.failures}</td>
//                         </tr>
//                     )
//                 ]
//             )
//         )
//         ))}
//     </tbody>
// </table>
// // );
// return (
//     <table>
//         <thead>
//             <tr>
//                 <th>Check Name</th>
//                 <th>Passes</th>
//                 <th>Failures</th>
//             </tr>
//         </thead>
//         <tbody>
//             {jsonData.groups.map((group, index) => (
//                 group.checks.map((check, idx) => (
//                     <tr key={`${index}-${idx}`}>
//                         {idx === 0}
//                         <td>{check.name}</td>
//                         <td>{check.passes}</td>
//                         <td>{check.failures}</td>
//                     </tr>
//                 ))
//             ))}
//         </tbody>
//     </table>
// );
return (
    <div>
        {jsonData.groups.map((group, index) => (
            <div key={index}>
                &nbsp;&nbsp;<li className='group-name'>{group.name}</li>
                <hr style={{ margin: '20px 0' }} /> 
                <table className='group-table'>
                    <thead>
                        <tr>
                            <th>Check Name</th>
                            <th>Passes</th>
                            <th>Failures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {group.checks.map((check, idx) => (
                            <tr key={idx}>
                                <td>{check.name}</td>
                                <td>{check.passes}</td>
                                <td>{check.failures}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))}
        <div>
                &nbsp;&nbsp;<li className='group-name'>{jsonData.otherChecks.name}</li>
                <hr style={{ margin: '20px 0' }} /> 
                <table className='group-table'>
                    <thead>
                        <tr>
                            <th>Check Name</th>
                            <th>Passes</th>
                            <th>Failures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.otherChecks.checks.map((check, idx) => (
                            <tr key={idx}>
                                <td>{check.checkName.name}</td>
                                <td>{check.checkName.passes}</td>
                                <td>{check.checkName.failures}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
);
}

export default Groups;