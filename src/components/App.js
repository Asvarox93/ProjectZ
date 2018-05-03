import React, { Component } from "react";
import Formulage from "./Formulage";
import Entry from "./Entry";
import Resoult from "./Resoult";
import History from "./History";
import base, { firebaseApp } from "./Base";
import firebase from "firebase";

class App extends Component {
  state = {
    getFormulage: false,
    getHistory: false,
    FormulageResoult: "",
    formulageStatus: "",
    formulageHistory: "",
    uid: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    this.setState({
      uid: authData.user.uid
    });
    this.dbGetHistory();
  };

  authenticate = e => {
    const authProvider = new firebase.auth.FacebookAuthProvider();

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  dbGetHistory = async () => {
    let date = await base.fetch("users/" + this.state.uid, {
      context: this
    });

    console.log(date);
  };
  dbSynchronise = async e => {
    let count = await base.fetch("users/" + this.state.uid, {
      context: this
    });

    if (count.itemCount === undefined) {
      count.itemCount = 0;
    }

    if (count.itemCount >= 0) {
      firebase
        .database()
        .ref("users/" + this.state.uid + "/" + count.itemCount)
        .set({
          FormulageResoult: e
        });

      firebase
        .database()
        .ref("users/" + this.state.uid)
        .update({
          itemCount: count.itemCount + 1
        });
    }
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
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

  setHistoryState = e => {
    this.setState({
      getHistory: e
    });
    this.setFormulageState(false);
  };

  render() {
    if (this.state.getFormulage === false && this.state.getHistory === false) {
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
            <Entry
              toFormulage={this.setFormulageState}
              toHistory={this.setHistoryState}
              authHandler={this.authHandler}
              authenticate={this.authenticate}
              logout={this.logout}
              uid={this.state.uid}
            />
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
              dbSynchronise={this.dbSynchronise}
            />
          </main>
        </div>
      );
    } else if (
      this.state.FormulageResoult.length > 0 &&
      this.state.getHistory === false
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
            <Resoult
              formulageResoult={this.state.FormulageResoult}
              formulageClear={this.setFormulageResoult}
              formulageStatus={this.state.formulageStatus}
            />
          </main>
        </div>
      );
    } else if (
      this.state.getHistory === true &&
      this.state.getFormulage === false
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
            <History formulageHistory={this.state.formulageHistory} />
          </main>
        </div>
      );
    }
  }
}

export default App;
