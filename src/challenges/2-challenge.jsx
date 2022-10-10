import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  // YOUR CODE HERE
  const [userInput, setUserInput] = useState("");
  const [robots, setRobots] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRobots([...robots, userInput]);
    setUserInput("");
  };

  return (
    <div>
      <h5 style={{ width: "50px", margin: "10px auto" }}>{userInput}</h5>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100px", margin: "10px auto" }}
      >
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      {robots.map((url, index) => (
        <img
          src={`https://robohash.org/${url}`}
          key={"robo_" + index}
          onClick={() => setRobots(robots.filter((robot) => robot !== url))}
        />
      ))}
    </div>
  );
};
export default App;
