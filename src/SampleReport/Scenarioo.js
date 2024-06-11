// import {Accordion, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// const Scenarioo = ({ scenario }) => {
//     return (
//       <Accordion defaultActiveKey="0" className="mb-2">
//         <Card>
//           <Accordion.Toggle as={Card.Header} eventKey="0">
//             <h4>{scenario.name}</h4>
//             <p>Status: <span className={scenario.status === 'Passed' ? 'text-success' : 'text-danger'}>{scenario.status}</span></p>
//             <p>Duration: {scenario.duration} seconds</p>
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>
//               <ul>
//                 {scenario.steps.map((step, stepIndex) => (
//                   <li key={stepIndex}>
//                     {step.name}: <span className={step.status === 'Passed' ? 'text-success' : 'text-danger'}>{step.status}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     );
//   };
//   export default Scenarioo