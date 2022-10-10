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

  const toggleSubtask = (task, subtaskId, subtask) => {
    const listCopy = JSON.parse(JSON.stringify(list));
    // console.log(listCopy)
    // console.log(listCopy[task][subtaskId][subtask]);
    listCopy[task][subtaskId][subtask] = !listCopy[task][subtaskId][subtask];
    setList(listCopy);
    console.log(list);

    //     const copyList = JSON.parse(JSON.stringify(list))

  };

  return (
    <div>
      {Object.entries(list).map(([task, subtasks], index) => (
        <ChecklistItem
          task={task}
          subtasks={subtasks}
          toggleSubtask={toggleSubtask}
          key={"checklistitem_" + index}
        />
      ))}
    </div>
  );
};

// (PROBABLY) MORE OF YOUR CODE HERE

const ChecklistItem = ({ task, subtasks, toggleSubtask }) => {
  const bold = { fontWeight: "bold" };

  return (
    <div>
      <h3>{task}</h3>
      <div>
        <p style={bold}>Completed</p>
        <ul>
          {subtasks.map((subtask, index) => {
            const [taskTitle, status] = Object.entries(subtask)[0];
            if (status) {
              return (
                <li
                  key={"completed_" + index}
                  onClick={() => toggleSubtask(task, index, taskTitle)}
                >
                  {taskTitle}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div>
        <p style={bold}>Not Completed</p>
        <ul>
          {subtasks.map((subtask, index) => {
            const [taskTitle, status] = Object.entries(subtask)[0];
            if (!status) {
              return (
                <li
                  key={"notCompleted_" + index}
                  onClick={() => toggleSubtask(task, index, taskTitle)}
                >
                  {taskTitle}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;

// function App() {
//   return <Checklist />;
// }

// const Checklist = () => {
//   const [list, setList] = useState(INITIAL_LIST);

//   // YOUR CODE HERE

//   const toggleSubtask = (task, subTaskIndex, subTask) => {
//     // console.log(task)
//     // console.log(subTaskIndex)
//     const copyList = JSON.parse(JSON.stringify(list))
//     copyList[task][subTaskIndex][subTask] = !copyList[task][subTaskIndex][subTask];
//     setList(copyList);
//   };

//   return (
//     <div>
//       {Object.entries(list).map(([task, subTasks], index) => (
//         <ChecklistItem
//           task={task}
//           subTasks={subTasks}
//           key={index}
//           toggleSubtask={toggleSubtask}
//         />
//       ))}
//     </div>
//   );
// };

// // (PROBABLY) MORE OF YOUR CODE HERE

// const ChecklistItem = ({ task, subTasks, index, toggleSubtask }) => {
//   const style = {paddingLeft: '20px' }

//   return (
//     <div>
//       <h4>{task}</h4>
//       <div>
//         <h5 style={style}>Completed</h5>
//         <ol style={{listStyle: 'none', paddingLeft: '30px'}}>
//           {subTasks.map((subTask, index) => {
//             console.log(subTask)
//             const [sub, status] = Object.entries(subTask)[0];
//             // console.log(subTask)
//             // console.log(sub)
//             // console.log(status)
//             if (status) {
//               return <li key={index} index={index} task={sub} onClick={() => toggleSubtask(task, index, sub)}>{sub}</li>
//             } else {
//               return null
//             }
//           })}
//         </ol>
//       </div>
//       <div>
//         <h5 style={style}>Not Completed</h5>
//         <ol style={{listStyle: 'none', paddingLeft: '30px'}}>
//           {subTasks.map((subTask, index) => {
//             const [ sub, status ] = Object.entries(subTask)[0];
//             if (!(status)) {
//               return <li key={index} index={index} task={sub} onClick={() => toggleSubtask(task, index, sub)}>{sub}</li>
//             } else {
//               return null
//             }
//           })}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default App;

// const INITIAL_LIST = {
//   "Organize closet": [
//     { "Donate old clothes and shoes": false },
//     { "Buy new shelf": false },
//     { "Put in shelf by color": false },
//   ],
//   "Finish homework": [
//     { "Finish math homework": false },
//     { "Finish science homework": false },
//     { "Finish Reactjs homework": false },
//   ],
//   "Achieve nirvana": [
//     { "Meditate a little": false },
//     { "Gain some wisdom": false },
//   ],
// };

// function App() {
//   return <Checklist />;
// }

// const Checklist = () => {
//   const [list, setList] = useState(INITIAL_LIST);

//   const clickTask = (topTask, index, taskText) => {
//     const newList = _.cloneDeep(list);
//     newList[topTask][index][taskText] = !newList[topTask][index][taskText];
//     setList(newList);
//   };

//   const print = () => {
//     console.log('hello world')
//   }

//   return (
//     <div
//       style={{
//         diplay: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: 40,
//       }}
//     >
//       {Object.entries(list).map(([topTask, subTasks], index) => {
//         return (
//           <div key={index}>
//             <h2>{topTask}</h2>
//             <div style={{ display: "flex" }}>
//               <DisplaySubtasks
//                 topTask={topTask}
//                 subTasks={subTasks}
//                 clickTask={clickTask}
//                 print={print}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const DisplaySubtasks = ({ topTask, subTasks, clickTask, print }) => {
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           paddingRight: 50,
//           width: 250,
//         }}
//       >
//         <h3>Not yet completed</h3>
//         {subTasks.map((subTask, index) => {
//           const taskText = Object.keys(subTask)[0];
//           if (!subTask[taskText])
//             return (
//               <p onClick={() => clickTask(topTask, index, taskText)} key={index}>
//                 {taskText}
//               </p>
//             );
//         })}
//       </div>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <h3>Completed</h3>
//         {subTasks.map((subTask, index) => {
//           const taskText = Object.keys(subTask)[0];
//           if (subTask[taskText])
//             return (
//               <p
//                 onClick={() => clickTask(topTask, index, taskText)}
//                 key={index}
//               >
//                 {taskText}
//               </p>
//             );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// // import _ from "lodash";

// const INITIAL_LIST = {
//   "Organize closet": [
//     { "Donate old clothes and shoes": false },
//     { "Buy new shelf": false },
//     { "Put in shelf by color": false },
//   ],
//   "Finish homework": [
//     { "Finish math homework": false },
//     { "Finish science homework": false },
//     { "Finish Reactjs homework": false },
//   ],
//   "Achieve nirvana": [
//     { "Meditate a little": false },
//     { "Gain some wisdom": false },
//   ],
// };

// function App() {
//   return <Checklist />;
// }

// const Checklist = () => {
//   const [list, setList] = useState(INITIAL_LIST);

//   const toggleTask = (task, index, subTask) => {
//     const newList = JSON.parse(JSON.stringify(list));
//     newList[task][index][subTask] = !newList[task][index][subTask];
//     setList(newList);
//   }

//   // YOUR CODE HERE
//   return (
//     <ul>
//       {Object.entries(list).map(([title, subTasks], index) => (
//         <ChecklistItem title={title} subTasks={subTasks} key={index} toggleTask={toggleTask}/>
//       ))}
//     </ul>
//   );
// };

// const ChecklistItem = (props) => {
//   const { title, subTasks, toggleTask } = props;

//   const completed = subTasks.filter((obj) => {
//     const status = Object.values(obj);
//     return status[0];
//   })

//   // console.log(completed)
//   const notCompleted = subTasks.filter((obj) => {
//     const status = Object.values(obj);
//     return !status[0];
//   });

//   // console.log(notCompleted)
//   return (
//     <div>
//       <b>{title}</b>
//       <div style={{ paddingLeft: 20 }}>
//         <p>Completed</p>
//         <ul>
//           {completed.map((obj, index) => {
//             const keys = Object.keys(obj);
//             return <li key={index} onClick={() => toggleTask(title, index, keys[0])}>{keys[0]}</li>;
//           })}
//         </ul>
//         <p>Not Completed</p>
//         <ul>
//           {notCompleted.map((obj, index) => {
//             const keys = Object.keys(obj);
//             return <li key={index} onClick={() => toggleTask(title, index, keys[0])}>{keys[0]}</li>;
//           })}
//           <p>test start</p>
//         {undefined}
//           <p>test end</p>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
