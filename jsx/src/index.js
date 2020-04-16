//Import the react and ReactDom libraires
import React from "react";
import ReactDom from "react-dom";
//line 14 outer brackets tells that its a js object

// Create a react component
const App = () => {
    const buttonText = {text:'Click me'}
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}> 
        {buttonText.text}
      </button>
    </div>
  );
}; 

// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
