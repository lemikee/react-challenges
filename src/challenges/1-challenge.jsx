import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    // YOUR CODE HERE
    <div>
      {Object.entries(nestedObjected).map(([key, value], index) => {
        if (typeof value === "object") {
          return (
            <div>
              <h3>{key}:</h3>
              <div style={{ paddingLeft: "10%" }}>
                <DisplayNested nestedObjected={value} />
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <h3>{`${key}: ${value}`}</h3>
            </div>
          );
        }
      })}
    </div>
  );
};

export default App;
