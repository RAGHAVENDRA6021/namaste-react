import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => ReactElement - JS Object => HTMLElement (render)
// "hello from react" is children, we can react element inside it
const heading = React.createElement("h1", { id: "hello" }, "Hello from React!");
console.log(heading);
//JSX - HTML or XML like syntax
//JSX (transpiled before it reaches the JS) - pracel - Babel
//JSX => React.createElement => ReactElement - JS Object => HTMLElement (render)
const jsxHeading = <h1>Hello Raghava!</h1>;
const Title = () => <h1>Hello hi !</h1>;
//React Component
// Class Based Component - Old
// functional Based Component - New
const root = ReactDOM.createRoot(document.getElementById("root"));
// React functional component - javascript function return react element
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {100 * 200}
      {jsxHeading}
      <h1>Namaste React Function component</h1>
    </div>
  );
};
root.render(<HeadingComponent />);
