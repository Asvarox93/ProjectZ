import React from "react";

const Login = props => {
  return (
    <nav className="App-login App-rsubtitle">
      <h1 className="App-rtitle">
        Zaloguj <span>się</span>
      </h1>
      <button
        className="App-facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Przy użyciu Facebooka
      </button>
    </nav>
  );
};

export default Login;
