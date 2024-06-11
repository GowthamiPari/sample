import React from "react";
import RequestMetricsTab from "./RequestMetrics";
import CustomMetricsTab from "./CustomMetrics";
function ReqMetrics() {
    // Assuming you're fetching data or performing other operations here
  
    return (
      <div>
        <RequestMetricsTab />&nbsp;
  
        <h2>Custom Metrics</h2>
        <hr style={{ margin: '20px 0' }} /> 
        <CustomMetricsTab />&nbsp;
        <p className="note"> Note. All times are in milli-seconds</p>
      </div>

    );
  }
  
  export default ReqMetrics;