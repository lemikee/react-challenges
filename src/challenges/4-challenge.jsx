import { useState } from "react";

const LADDER_IMAGE =
  "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";

function App() {
  return <Ladder img={LADDER_IMAGE} />;
}

const Ladder = ({ img }) => {
  // YOUR CODE HERE
  // have currentLadder is be 0, default state, so that in default state every ladder strictly less than it will be enlarged. But we have no ladders with id less than zero. So in default state, no ladders will be enlarged
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
          alt='ladder'
        />
      ))}
    </div>
  );
};

export default App;

// function App() {
//   return <Ladder img={LADDER_IMAGE} />;
// }

// const Ladder = ({ img }) => {
//   const [ladders, setLadders] = useState([5, 4, 3, 2, 1]);
//   const [hovered, setHovered] = useState(0);

//   const getSize = (id) => {
//     return hovered >= id ? 150 : 80;
//   };

//   return (
//     <div
//       style={{
//         margin: "0 auto",
//         display: "flex",
//         // height: '1000px',
//         // width: '250px',
//         alignItems: "center",
//         // justifyContent: 'center',
//         flexDirection: "column",
//         border: "1px solid blue",
//       }}
//     >
//       {ladders.map((id, index) => (
//         <img
//           width={getSize(id)}
//           height={getSize(id)}
//           src={img}
//           alt='ladder'
//           key={index}
//           onMouseEnter={() => setHovered(id)}
//           onMouseLeave={() => setHovered(0)}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

// function App() {
//   return <Ladder img={LADDER_IMAGE} />;
// }

// const Ladder = ({ img }) => {
//   const ladderIds = [5, 4, 3, 2, 1];
//   const [hoveredLadder, setHoveredLadder] = useState(0);

//   const getSize = (id) => {
//     return hoveredLadder >= id ? 150 : 80;
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: 20,
//       }}
//     >
//       {ladderIds.map((id, index) => {
//          return <img
//           src={img}
//           alt='ladder'
//           key={index}
//           onMouseEnter={() => setHoveredLadder(id)}
//           onMouseLeave={() => setHoveredLadder(0)}
//           height={getSize(id)}
//           width={getSize(id)}
//         />
//       })}
//     </div>
//   );
// };

// export default App;
