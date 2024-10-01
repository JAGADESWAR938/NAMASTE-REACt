const heading = React.createElement("div",
  {id: "parent"}, [
  React.createElement("div",
  {id: "child1"},
  [ React.createElement("h1", {}, "I'm an h1 tag"), 
    React.createElement("h2", {}, "I'm an h2 tag"),]),

    React.createElement("div",
     {id: "child2"},[ 
    React.createElement("h1", {}, "I'm an h1 tag"), 
    React.createElement("h2", {}, "I'm an h2 tag"),])
]); 






//react.create element is a object and render used that object to convert it into h1 tag and put it on reactDOM


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);