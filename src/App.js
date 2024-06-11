import "./App.css";
//import { Component } from "react";
//import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import SignUp from './login/SignUp';
//import ShoppingList from './shoppingList';
 import Countries from './Countries';
 //import OnClick from "./practice/OnClick";
 import ComponentA from "./practice/ComponentA";
import UseEffectPractice from "./practice/UseEffect";
//import ErrorFallback from "./practice/ErrorFallback";
import ErrorFallback from "./practice/ErrorFallback";
//import UseEffectPractice from "./practice/UseEffect";
import Dropdown from "./practice/Dropdown";
import Checkboxes from "./Checkboxes";
import Report from "./Reports/Report";
import AppReport from "./TrailCode/ReportFile";
import Appreport from "./SampleReport/Reportt";
import AppReportt from "./Report/ReportPage";
import RequestMetricsTab from "./Report/RequestMetrics";
import ReportPage from "./Report/ReportPage";
 //import Display from "./practice/Display";

// export class App extends Component {
//   state= {
//     name: "My Practice"
//   }
// render() {

//   return (
//     <center>
//           <Display name={this.state.name}/>
//     </center>
//   )
// }
// }



function App() {
  return (
    /* <Router>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/signUp" element={<SignUp />} />
</Routes>
</Router> */
<Router>
<Routes>
  <Route path="/" element={<ReportPage/>} />
</Routes>
</Router>

//  <Route path="/" element={<Checkboxes />} />
    //  <Route path="/" element={<Dropdown />} />
    // <Route path="/" element={<ComponentA />} />
    // <Route path="/ErrorFallback" element={<ErrorFallback/>} />
    // // <Router>
    //   <Routes>
    //      <Route path="/" element={<ComponentA />} />
    //   </Routes>
    // </Router>
    //  <Route path="/" element={<OnClick />} />
    //  <Route path="/" element={<ShoppingList />} />
    //  <Route path="/" element={<Countries />} />


    //<Route path="/" element={<ShoppingList />} />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
