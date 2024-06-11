import React from "react";
import "./styles.css";
const list = ["Art", "Singing", "Dancing", "Playing", "Reading", "cooking", "sleeping"];
const Checkboxes = () => {
  return (
    <center>
      <div id="Checkboxes_container">
        <p>Select your interests:</p>
        <div id="Checkboxes">
          <ul style={{ listStyleType: "none" }}>
            {list.map((item) => (
              <li key={item}><input type="checkbox"/> {item}</li>
            ))}
        </ul>
        </div>
      </div>
    </center>
  );
};

export default Checkboxes;
