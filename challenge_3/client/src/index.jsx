import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyForm from "./components/form1.jsx";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    },

    this.storage = {};
  }

  saveStorage(key, value){
   this.storage[key] = value
  }

  handleClick() {
    this.setState({visible: false});
  }

  render() {
    if (this.state.visible === true) {
      return (

          <div>
            <button
              className="checkout"
              onClick={this.handleClick.bind(this)}
               > Check Out</button>
          </div>

      );
    } else {
        return (<MyForm saveStorage = {this.saveStorage.bind(this)}/>)  
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
