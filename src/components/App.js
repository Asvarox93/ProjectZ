import React, { Component } from "react";
import Formulage from "./Formulage";
import Entry from "./Entry";
import Resoult from "./Resoult";

class App extends Component {
  state = {
    getFormulage: false,
    FormulageResoult: "",
    formulageStatus: ""
  };

  setFormulageState = e => {
    this.setState({
      getFormulage: e
    });
  };

  setFormulageResoult = e => {
    this.setState({
      FormulageResoult: e
    });
  };

  setFormulageStatus = e => {
    this.setState({
      formulageStatus: e
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
    } else if (
      this.state.getFormulage === true &&
      this.state.FormulageResoult.length <= 0
    ) {
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
            <Formulage
              formulageResoult={this.setFormulageResoult}
              setFormulageStatus={this.setFormulageStatus}
            />
          </main>
        </div>
      );
    } else if (this.state.FormulageResoult.length > 0) {
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
            <Resoult
              formulageResoult={this.state.FormulageResoult}
              formulageClear={this.setFormulageResoult}
              formulageStatus={this.state.formulageStatus}
            />
          </main>
        </div>
      );
    }
  }
}

export default App;
