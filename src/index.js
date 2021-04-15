import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "orange", "Lemon"];
const fruits = ["mango", "apple", "grape", ...citrus];

console.log(fruits)

