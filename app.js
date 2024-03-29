import React from "react";
import ReactDOM from "react-dom";
// "hello from react" is children, we can react element inside it
const heading = React.createElement("h1", { id: 'hello' }, "Hello from React!");
console.log(heading)
console.log(ReactDOM)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)