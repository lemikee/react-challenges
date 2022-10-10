import { useState } from "react";

const LADDER_IMAGE =
  "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";

function App() {
  return <Ladder img={LADDER_IMAGE} />;
}

const Ladder = ({ img }) => {
  // YOUR CODE HERE

  const [ladderIds, setLadderIds] = useState([5, 4, 3, 2, 1]);
  const [currentLadder, setCurrentLadder] = useState(0);

  const getSize = (id) => {
    return currentLadder >= id ? "100px" : "50px";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "300px",
        width: "50px",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      {ladderIds.map((id, index) => (
        <img
          src={img}
          key={"ladder_" + id}
          onMouseEnter={() => setCurrentLadder(id)}
          onMouseLeave={() => setCurrentLadder(0)}
          height={getSize(id)}
          width={getSize(id)}
          alt="ladder"
        />
      ))}
    </div>
  );
};

export default App;
