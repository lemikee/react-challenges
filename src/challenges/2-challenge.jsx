import React, { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [ images, setImages ] = useState([]);
  const [ userInput, setUserInput ] = useState('');

  return (
    <div>
      challenge 2
      <form>
        <label>
          <input placeholder='Generate Robot'></input>
        </label>
      </form>
    </div>
  )
};
export default App;
