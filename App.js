// const header = React.createElement("h1", {id:'heading'}, "Hello I am React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);

//Write a code for the nested div below in react style
/*
<div id="parent">
    <div id="child">
         <h1>I'm a h1 tag</h1>
         <h1>I'm another h1 tag</h1>
    </div>
</div>
*/
//If we want to add another child sibling in React just use array in third argument of React.createElement()
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am another h1 tag"),
  ]),
   React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am another h1 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
