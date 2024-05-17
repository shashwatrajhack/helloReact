import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1",{id:"heading"},"Namste React");

console.log(heading);

const Title = () => (
    <h1 className="head">This is Namste react by jsx</h1>
)



const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1>THis is react functional component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
