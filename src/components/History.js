import React, { Component } from "react";

class History extends Component {
  state = {
    wynik: this.props.formulageResoult.split("\n").map(function(item, key) {
      return <li key={key}>{item}</li>;
    }),
    status: this.props.formulageStatus
  };

  onClick = () => {
    this.props.formulageClear("");
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="App-rtitle">
          Wynik <span>twojego</span> badania
        </h1>
        <h2 className="App-rsubtitle App-result">
          jest <span className={this.state.status}>{this.state.status}</span>
        </h2>
        <ul className="App-rsubtitle App-list">{this.state.wynik}</ul>

        <button className="App-rbtn" onClick={this.onClick}>
          Wyświetl formularz
        </button>
      </React.Fragment>
    );
  }
}

export default History;
