import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

// JSX - is HTML like syntax
// This is transpiled before it goes to JS engine by Parcel which used Babel.
// JSX =>Babel transpile it to React.createElement => React Object => HTMLElement(render) - this is done by Babel.
const Heading = () => (
  <h1 id='heading' className='heading'>
    Heading in JSX
  </h1>
);
console.log(heading, Heading());

// React Components
// Class Based Components - Old Ways
// Functional Components - New Way


//Component Composition - Combining multiple components in a single component.
const HeadingComponent = () => {
  return (
    <div className="container">
      <Heading/>
      <h1 id='functional-component'>This is a Functional Component</h1>
      <h2>{
        //If we use curly braces inside JSX, we can write JS code inside it.
        100+150 
      }</h2>
      <div>{heading}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
