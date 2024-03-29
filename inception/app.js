// "hello from react" is children, we can react element inside it
const heading = React.createElement("h1", { id: 'hello', className: 'helloname' }, "Hello from React!");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)