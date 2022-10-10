import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  // YOUR CODE HERE
  const [users, setNames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [userInput, setUserInput] = useState("");

  const getNames = async () => {
    setIsLoaded(false);
    let response = await fetch("https://www.randomuser.me/api?results=50");
    let data = await response.json();
    setNames(data.results);
    // console.log(users)
    setIsLoaded(true);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <div style={{ margin: "10px auto", width: "250px" }}>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      {!isLoaded && <p>Loading...</p>}
      <ul style={{ listStyle: "none" }}>
        {isLoaded &&
          users.map((personObj, index) => {
            // console.log(personObj)
            const nameObj = personObj.name;
            // console.log(nameObj)
            const fullName = nameObj.title + nameObj.first + nameObj.last;
            // console.log(fullName)
            if (fullName.toLowerCase().includes(userInput.toLowerCase())) {
              return (
                <li
                  key={"person_" + index}
                >{`${nameObj.title} ${nameObj.first} ${nameObj.last}`}</li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export default App;

const DATA = {
  results: [
    {
      gender: "female",
      name: { title: "Miss", first: "Sara", last: "Johnson" },
      location: {
        street: { number: 6263, name: "Kingsway" },
        city: "Winchester",
        state: "West Yorkshire",
        country: "United Kingdom",
        postcode: "US4C 3HD",
        coordinates: { latitude: "13.7996", longitude: "179.3694" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "sara.johnson@example.com",
      login: {
        uuid: "d703a5ff-7e73-400a-a735-f330addfcb31",
        username: "goldenzebra309",
        password: "clevelan",
        salt: "3CobdNiB",
        md5: "bd978843e8b18cd6e7424a5a18f62af5",
        sha1: "7e6bafa636c6f7245241d8a2d3e0190f9cc40b87",
        sha256:
          "224588a5360826e3495a16f16fa5007e4ef439930df47760616e2c79ca704534",
      },
      dob: { date: "1957-06-04T12:40:38.974Z", age: 64 },
      registered: { date: "2002-07-09T02:17:52.520Z", age: 19 },
      phone: "015242 69350",
      cell: "0792-242-687",
      id: { name: "NINO", value: "XP 63 26 10 L" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/64.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
      },
      nat: "GB",
    },
  ],
  info: { seed: "6bc47b82484c2761", results: 1, page: 1, version: "1.3" },
};
