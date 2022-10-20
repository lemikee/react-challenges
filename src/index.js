import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
// import App from './other_challenges/counter'
// import App from './other_challenges/checklist'
// import App from './other_challenges/test'
// import App from './challenges/1-challenge';
// import App from './challenges/2-challenge';
// import App from './challenges/3-challenge';
// import App from "./challenges/4-challenge";
// import App from "./challenges/5-challenge";
// import App from "./challenges/6-challenge";
// import App from "./challenges/8-challenge";
// import App from "./challenges/9-challenge";
import App from "./challenges/10-challenge";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
