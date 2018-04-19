import React, { Component } from "react";
import Kreacja from "./Kreacja";
import Formulage from "./Formulage";
import Entry from "./Entry";

class App extends Component {
  state = {
    getFormulage: false
  };

  setFormulageState = e => {
    this.setState({
      getFormulage: e
    });
  };

  render() {
    if (this.state.getFormulage === false) {
      return (
        <div className="App">
          <aside className="App-left">
            <img
              src={require("../images/home-fullwidth-features.png")}
              alt="Ładna pani"
              className="App-left-img"
            />
          </aside>
          <main className="App-right">
            <Entry toFormulage={this.setFormulageState} />
          </main>
        </div>
      );
    } else {
      return (
        <div className="App">
          <aside className="App-left">
            <img
              src={require("../images/home-fullwidth-features.png")}
              alt="Ładna pani"
              className="App-left-img"
            />
          </aside>
          <main className="App-right">
            <h1 className="App-title">To jest prawa strona</h1>
            <Formulage />
          </main>
        </div>
      );
    }
  }
}

export default App;
