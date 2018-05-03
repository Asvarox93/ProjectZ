import React, { Component } from "react";

class History extends Component {
  state = {
    wynik: this.props.formulageHistory
  };

  onClick = () => {
    this.props.toHistory(false);
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="App-rtitle">
          Twoja <span>historia</span> badań
        </h1>

        <div className="App-rsubtitle App-history">
          {Object.keys(this.state.wynik).map((item, i) => (
            <span className="App-hResoult" key={i}>
              Badanie nr {i + 1}:{" "}
              <p>{this.state.wynik[item].FormulageResoult}</p>
              <br />
            </span>
          ))}
        </div>

        <button className="App-rbtn" onClick={this.onClick}>
          Wróc na początek
        </button>
      </React.Fragment>
    );
  }
}

export default History;
