import { useState } from "react";
import _ from "lodash";

const INITIAL_LIST = {
  "Organize closet": [
    { "Donate old clothes and shoes": false },
    { "Buy new shelf": false },
    { "Put in shelf by color": false },
  ],
  "Finish homework": [
    { "Finish math homework": false },
    { "Finish science homework": false },
    { "Finish Reactjs homework": false },
  ],
  "Achieve nirvana": [
    { "Meditate a little": false },
    { "Gain some wisdom": false },
  ],
};

function App() {
  return <Checklist />;
}

const Checklist = () => {
  const [list, setList] = useState(INITIAL_LIST);

  // YOUR CODE HERE

  const toggleSubtask = (task, subTaskIndex) => {
    const copyList = { ...list };
    copyList[task][subTaskIndex] = !copyList[task][subTaskIndex];
    setList(copyList);
  };

  return (
    <div>
      {Object.entries(list).map(([task, subTasks], index) => (
        <ChecklistItem
          task={task}
          subTasks={subTasks}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

// (PROBABLY) MORE OF YOUR CODE HERE

const ChecklistItem = ({ task, subTasks, index }) => {
  return (
    <div>
      <h5>{task}</h5>
      <div>
        <p>Completed</p>
        <ol>
          {subTasks.map((subTask, index) => {
            const [sub, status] = Object.entries(subTask);
          })}
        </ol>
      </div>
      <div>
        <p>Not Completed</p>
      </div>
    </div>
  );
};

export default App;

// const UserContext = React.createContext();

// function App() {
//   const [userState, setUserState] = useState({
//     Bob: true,
//     Gary: true,
//     Jessica: true,
//     Sam: true,
//     Eric: true,
//   });

//   return (
//     <UserContext.Provider value={{userState, setUserState}}>
//       <UserList />
//     </UserContext.Provider>
//   )
// }

// const UserList = () => {
//   const { userState, setUserState } = useContext(UserContext);

//   const changeStatus = () => {
//     const userArray = Object.keys(userState);
//     const randomNumber = Math.floor(Math.random() * userArray.length);
//     const randomUser = userArray[randomNumber];
//     const userObject = Object.assign({}, userState)
//     userObject[randomUser] = !(userObject[randomUser]);
//     setUserState(userObject);
//   };

//   useEffect(() => {
//     const intervalID = setInterval(changeStatus, 2000);
//     return () => clearInterval(intervalID);
//   }, [userState])

//   return (<div>
//     {Object.keys(userState).map((user, index) => {
//       return <p key={index}>{`${user}: ${userState[user] ? '🟢' : '🔴'}`}</p>
//     })}
//   </div>)
// };

// export default App;
