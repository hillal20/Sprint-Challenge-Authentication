import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  addLoginsHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendLogins = event => {
    event.preventDefault();
    const obj = {
      username: this.state.username,
      password: this.state.password
    };
    const promise = axios.post("http://localhost:5000/api/login", obj);
    promise
      .then(response => {
        console.log("res2", response);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div>
        {" "}
        login form
        <form onSubmit={this.sendLogins}>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={this.state.username}
            onChange={this.addLoginsHandler}
          />
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={this.state.password}
            onChange={this.addLoginsHandler}
          />
          <button> send </button>
        </form>
      </div>
    );
  }
}
export default Login;
