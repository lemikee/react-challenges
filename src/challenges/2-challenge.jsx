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
        <img src={`https://robohash.org/${url}`} key={"robo_" + index} onClick={() => setRobots(robots.filter((robot) => robot !== url))}/>
      ))}
    </div>
  );
};
export default App;

// function App() {
//   return <RobotList />;
// }

// const RobotList = () => {
//   const [userInput, setUserInput] = useState("");
//   const [robots, setRobots] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const robotCopy = [...robots];
//     robotCopy.push(userInput);
//     setRobots(robotCopy);
//     setUserInput("");
//   };

//   const removeRobot = (e) => {
//     const robotCopy = [...robots];
//     const index = e.target.getAttribute("index");
//     robotCopy.splice(index, 1);
//     setRobots(robotCopy);
//   };

//   return (
//     <div>
//       <form
//         style={{ width: "350px", margin: "40px auto" }}
//         onSubmit={handleSubmit}
//       >
//         <input
//           style={{ width: "250px" }}
//           placeholder="Try entering some characters"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>

//       {robots.map((robo, index) => (
//         // <img key={index} index={index} src={`https:robohash.org/${robo}`} onClick={removeRobot}/>
//         <img
//           key={index}
//           index={index}
//           src={`https:robohash.org/${robo}`}
//           onClick={() => setRobots(robots.filter((r) => r !== robo))}
//         />
//       ))}
//     </div>
//   );
// };
// export default App;

// function App() {
//   return <RobotList />;
// }

// class RobotList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { userInput: "", robotList: [] };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.removeRobot = this.removeRobot.bind(this);
//   }

//   removeRobot(e) {
//     const robot = e.target.getAttribute("robot");
//     const robotList = this.state.robotList.filter((robo) => robo !== robot);
//     this.setState({ robotList });
//     console.log(this.state.robotList);
//     console.log(this.state.userInput);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.userInput)
//     console.log(e.target.value)
//     const robotList = [...this.state.robotList, this.state.userInput];
//     this.setState({ robotList });
//     this.setState({ userInput: "" });
//   }

//   render() {
//     const { userInput, robotList } = this.state;

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Enter a string:{" "}
//             <input
//               value={userInput}
//               onChange={(e) => this.setState({ userInput: e.target.value })}
//               placeholder="Generate a Robot"
//             ></input>
//           </label>
//           <button>Submit</button>
//         </form>

//         {robotList.map((robot, index) => (
//           <img
//             src={`https:robohash.org/${robot}`}
//             alt="robot"
//             key={index}
//             onClick={this.removeRobot}
//             robot={robot}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// const RobotList = () => {
//   const [robotList, setRobotList] = useState([]);
//   const [userInput, setUserInput] = useState("");

//   const addRobot = (e) => {
//     e.preventDefault();
//     // const url = "https://robohash.org/" + userInput;
//     // console.log(url);
//     setRobotList([...robotList, userInput]);
//     setUserInput('');
//   };

//   const handleClick = (e) => {
//     e.preventDefault()
//     const index = e.target.getAttribute('index');
//     console.log(typeof index)
//     const filteredRobots = robotList.filter((robot, i) => {
//       console.log(i)
//       console.log(index)
//       return i != index;
//     });
//     setRobotList(filteredRobots);
//     // console.log(robotList)
//   };

//   return (
//     <div>
//       challenge 2
//       <form onSubmit={addRobot}>
//         <label>
//           <input
//             placeholder="Generate Robot"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//           ></input>
//         </label>
//         <button>Generate Robot</button>
//       </form>
//       {robotList.map((robot, index) => (
//         <img src={`https://robohash.org/${robot}`} alt="robot" key={index} onClick={handleClick} data-tag={robot} index={index}/>
//       ))}
//     </div>
//   );
// };
// export default App;
