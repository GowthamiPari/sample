import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Box({ title, icon ,value}) {
    return (
      <div className="box">
        <span className="icon"><FontAwesomeIcon icon={icon} size="2x"/></span>
        <h3>{title}</h3>
        <h1>{value}</h1>
      </div>
    );
  }

  export default Box