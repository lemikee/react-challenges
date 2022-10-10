import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  //YOUR CODE HERE
  const [activites, setActivites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [button, setButton] = useState(false);

  const getActivity = async () => {
    setButton(true)
    let response = await fetch("http://www.boredapi.com/api/activity");
    let activity = await response.json()
    setActivites([...activites, activity])
    setButton(false)
  };

  useEffect(() => {
    setIsLoaded(false)
    getActivity()
    setIsLoaded(true)
  }, [])

//  for async, isLoaded/disable button so not multiple requests

  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <button onClick={getActivity} disabled={button}>
        Generate New Activity
      </button>
      <ul>
        {activites.map((item, index) => <ExpandableListItem item={item} key={'item_' + index}/>)}
      </ul>
    </div>
  );
};

const ExpandableListItem = ({ item }) => {
  // YOUR CODE HERE
  const [ display, setDisplay ] = useState(true);

  return (
    <div>
      <div style={{display: 'inline'}}>
        <p>{item.activity}</p>
        <button onClick={() => setDisplay(!display)}>
          {display ? "Collpase" : "Expand"}
        </button>
      </div>
      {Object.entries(item).map(([key, value], index) => {
        if (key !== "activity") {
          return (
            <div>
              {display && (
                <p style={{ paddingLeft: "50px" }}>{`${key}: ${value}`}</p>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default App;






















// function App() {
//   return <GenerateList />;
// }

// const GenerateList = () => {
//   //YOUR CODE HERE

//   const [activities, setActivites] = useState([]);
//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   const getActivity = async () => {
//     setButtonDisabled(true);
//     let response = await fetch("http://www.boredapi.com/api/activity");
//     let data = await response.json();
//     setActivites([...activities, data]);
//     setButtonDisabled(false);
//   };

//   useEffect(() => {
//     getActivity();
//   }, []);

//   return (
//     <div>
//       <button disabled={buttonDisabled} onClick={getActivity}>Generate Activity</button>
//       <ul>
//         {activities.map((item, index) => <ExpandableListItem key={index} item={item}/>)}
//       </ul>
//     </div>
//   );
// };

// const ExpandableListItem = ({item}) => {
//   const [ display, setDisplay ] = useState(true);

//   return (
//    <li>
//       <p>{item.activity}</p>
//       <button onClick={() => setDisplay(!display)}>{ display ? 'Collapse' : 'Expand'}</button>
//       <ul >
//         {Object.entries(item).map(([key, value], index) => {
//           if (key !== 'activity') {
//             return (
//               <div>
//                 {display && <li>{`${key}: ${value} `}</li>}
//               </div>
//             );
//           }
//         })}
//       </ul>
//    </li>
//   )
// };

// export default App;

// function App() {
//   return <GenerateList />;
// }

// const GenerateList = () => {
//   const [activities, setActivities] = useState([]);
//   const [ disableButton, setDisabledButton ] = useState(false);

//   const addActivity = () => {
//     setDisabledButton(true);

//     const getActivity = async () => {
//       let response = await fetch("http://www.boredapi.com/api/activity");
//       let activity = await response.json();
//       // console.log(typeof data === 'object')
//       // console.log(response);
//       // console.log(data);
//       // const activity = [Object.entries(data)];
//       // console.log(activity)
//       setActivities([...activities, activity]);

//       setDisabledButton(false);
//     };
//     getActivity();
//   };

//   useEffect(addActivity, []);

//   return (
//     <div>
//       <button onClick={addActivity} disabled={disableButton}>Generate Activity</button>
//       <ul>
//         {activities.map((item, index) => (
//           <ExpandableListItem key={index} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ExpandableListItem = ({ item }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <li>
//       <div>
//         <p>{item.activity}</p>
//         <button onClick={() => setExpanded(!expanded)}>
//           {expanded ? "Collapse" : "Expand"}
//         </button>
//       </div>
//       <ul>
//         {expanded &&
//           Object.keys(item)
//             .filter((key) => key !== "activity")
//             .map((key, index) => {
//               return <li key={index}>{`${key}: ${item.key}`}</li>;
//             })}
//       </ul>
//     </li>
//   );
// };

// export default App;
