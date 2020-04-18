import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    //better to intialize state here as it needs to be define before the componenet and constructor willl be called first
    super(props); //to make sure the code inside React.Componenet still gets called as we overweite it with using constructor , super is a refrence to parents constructor

    //THIS IS THE only time we do direct assigment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //WE called seState to update value of state
        this.setState({ lat: position.coords.latitude }); //setState is predefine by REact.Componenet
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //React says we have t define a render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
        return <div> latitude : {this.state.lat} </div>;
      }
      return <div> Loading </div>;

  }
}

ReactDom.render(<App />, document.querySelector("#root"));


