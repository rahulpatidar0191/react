import React, {Component} from "react";
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends Component {

  state = {lat: null, errorMessage: ''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=> this.setState({ lat: position.coords.latitude }),     //WE called seState to update value of state //setState is predefine by REact.Componenet
      err => this.setState({ errorMessage: err.message })
    )

  }
  //React says we have t define a render!!  always returns jsx
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    return <Spinner  />
  }

  render(){
    return(
      <div className= "border-red">
      {this.renderContent()}
      </div>
    )
  }

}

ReactDom.render(<App />, document.querySelector("#root"));


//componentDidMount : Same as Constructor, Use to load data once, MAny people say do not do data loading in a constructor, recommded to do here 
//componentDidUpdate : Place to do more data loading when state/prop changes 
//componentWillUnmount : Goodd place to do cleanup (especially for non react stuff), used rarley 




  // constructor(props) {
  //   //better to intialize state here as it needs to be define before the componenet and constructor willl be called first
  //   super(props); //to make sure the code inside React.Componenet still gets called as we overweite it with using constructor , super is a refrence to parents constructor

  //   //THIS IS THE only time we do direct assigment to this.state
  //   this.state = { lat: null, errorMessage: "" };

  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       //WE called seState to update value of state
  //       this.setState({ lat: position.coords.latitude }); //setState is predefine by REact.Componenet
  //     },
  //     (err) => {
  //       console.log(err);
  //       this.setState({ errorMessage: err.message });
  //     }
  //   )
  // }