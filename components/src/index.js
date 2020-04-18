//Import the react and ReactDom libraires
import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker"; //library to get fakke images/avatars
import ApprovalCard from './ApprovalCard'
//line 14 outer brackets tells that its a js object

// Create a react component
const App = () => {
  //const buttonText = {text:'Click me'}
  return (
    <div className="ui container comments">
      <ApprovalCard> <h4>WARning you bro</h4>whatever man </ApprovalCard> 
      <ApprovalCard> <CommentDetail author="rahul" date="Yday at 10:956" text="je suis Rahul" avatar= {faker.image.avatar()} /> </ApprovalCard>
      <ApprovalCard>  <CommentDetail author="jay" date="today at 5:23" text="me gusta"  avatar= {faker.image.avatar()} /> </ApprovalCard>
      <ApprovalCard>  <CommentDetail author="ray" date="tomorrow at 6:35" text="aprrove ti"  avatar= {faker.image.avatar()} /></ApprovalCard>
      <CommentDetail />
  
    </div>
  );
};

// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
