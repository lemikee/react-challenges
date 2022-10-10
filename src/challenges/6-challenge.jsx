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
