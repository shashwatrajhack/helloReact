import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1",{id:"heading"},"Namste React");

console.log(heading);

const jsxHeading = <h1 className="head">This is Namste react by jsx</h1>;

console.log(jsxHeading);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
