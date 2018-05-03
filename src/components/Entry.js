import React, { Component } from "react";
import Login from "./Login";

class Entry extends Component {
  onClick = () => {
    this.props.toFormulage(true);
  };

  checkHistory = () => {
    this.props.toHistory(true);
  };

  render() {
    if (!this.props.uid) {
      return (
        <React.Fragment>
          <h1 className="App-rtitle">
            Zadbaj o <span>swoje</span> zdrowie
          </h1>
          <h2 className="App-rsubtitle">
            Czy wiesz że co miesięczne badanie krwii może uratować twoje życie?<br />
            Przejdz do formularza i sprawdz wyniki online swoich badań.
          </h2>
          <button className="App-rbtn" onClick={this.onClick}>
            Wyświetl formularz
          </button>
          <Login authenticate={this.props.authenticate} />;
        </React.Fragment>
      );
    }
    if (this.props.uid) {
      return (
        <React.Fragment>
          <h1 className="App-rtitle">
            Zadbaj o <span>swoje</span> zdrowie
          </h1>
          <h2 className="App-rsubtitle">
            Czy wiesz że co miesięczne badanie krwii może uratować twoje życie?<br />
            Przejdz do formularza i sprawdz wyniki online swoich badań.
          </h2>
          <button className="App-rbtn" onClick={this.onClick}>
            Wyświetl formularz
          </button>
          <button className="App-rbtn" onClick={this.checkHistory}>
            Historia badań
          </button>
          <h1 className="App-rtitle">
            Jesteś <span>zalogowany</span>
          </h1>
          <button className="App-rbtn" onClick={this.props.logout}>
            Wyloguj
          </button>
        </React.Fragment>
      );
    }
  }
}

export default Entry;
