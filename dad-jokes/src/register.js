import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  addInfoHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendRegistration = event => {
    event.preventDefault();
    const obj = {
      username: this.state.username,
      password: this.state.password
    };
    const promise = axios.post("http://localhost:5000/api/users", obj);
    promise
      .then(response => {
        console.log("res1", response);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {" "}
        register-bellow
        <form onSubmit={this.sendRegistration}>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={this.state.username}
            onChange={this.addInfoHandler}
          />
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={this.state.password}
            onChange={this.addInfoHandler}
          />
          <button> send </button>
        </form>
      </div>
    );
  }
}
export default Register;
