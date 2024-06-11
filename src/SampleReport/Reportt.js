// import React, { useEffect, useState } from 'react';
// import Featuree from './Featuree';
// import './styles.css';
// import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import reportDataa from './reportDataa.json';
// const Appreport = () => {
//   const [data, setData] = useState(null);
//   console.log(reportDataa);
  

//   useEffect(() => {
//     setData(reportDataa);
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   // Calculate total features, scenarios, and passed scenarios
//   const totalFeatures = data.features.length;
//   const totalScenarios = data.features.reduce((acc, feature) => acc + feature.scenarios.length, 0);
//   const passedScenarios = data.features.reduce(
//     (acc, feature) => acc + feature.scenarios.filter(scenario => scenario.status === 'Passed').length,
//     0
//   );
//   const failedScenarios = totalScenarios - passedScenarios;
//   const passPercentage = ((passedScenarios / totalScenarios) * 100).toFixed(2);
//   const failPercentage = (100 - passPercentage).toFixed(2);

//   return (
//     <Container className="App">
//       <h1>Test Report</h1>
//       <Row>
//         <Col>
//           <h2>Total Features: {totalFeatures}</h2>
//           <h2>Total Scenarios: {totalScenarios}</h2>
//         </Col>
//         <Col>
//           <h2>Pass Percentage: {passPercentage}%</h2>
//           <h2>Fail Percentage: {failPercentage}%</h2>
//         </Col>
//       </Row>
//       <ProgressBar>
//         <ProgressBar variant="success" now={passPercentage} label={`${passPercentage}%`} />
//         <ProgressBar variant="danger" now={failPercentage} label={`${failPercentage}%`} />
//       </ProgressBar>
//       {data.features.map((feature, index) => (
//         <Featuree key={index} feature={feature} />
//       ))}
//     </Container>
//   );
// };
// export default Appreport