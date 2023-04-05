const heading = React.createElement("h1", {id: "heading"}, "Hello world");
const heading1 = React.createElement("h1", {id: "heading1"}, "Hello world");
const child = React.createElement("div", {id: "child"}, [heading, heading1]);
const parent = React.createElement("div", {}, child);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);