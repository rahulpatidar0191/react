import React from "react";

class SearchBar extends React.Component {
  //callback function
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  state = { term: "" };

  /*Notice that there are no () after onInputChange as that avoid it getting called everytime the app renders, wihthout () we are passing reference to be used in the future*/
  //OnChange is a prop here, onClick, onSubmit [Event Handlers]

  // Alternate to input  <input type="text" onChange={this.onInputChange}></input>
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field" />
          <label>Image search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
