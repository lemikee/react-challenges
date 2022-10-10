import React, { useState, useEffects } from "react";

const App = () => {
  const nums = [1, 2, 3, 4, 5];

  const numDivs = nums.map((num, index) => (
    <div key={index}>{num.toString()}</div>
  ));

  return <div>{numDivs}</div>;
};

export default App;

