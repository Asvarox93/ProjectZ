import React, { Component } from "react";

class Entry extends Component {
  onClick = () => {
    this.props.toFormulage(true);
  };
  render() {
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
      </React.Fragment>
    );
  }
}

export default Entry;
