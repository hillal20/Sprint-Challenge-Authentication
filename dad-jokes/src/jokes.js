import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  fetchingJokes = () => {
    const token = localStorage.getItem("token");
    console.log("storageToken", token);
    const obj = {
      headers: { Authorization: `${token}` }
    };

    const promise = axios.get("http://localhost:5000/api/jokes", obj);
    promise
      .then(response => {
        console.log("res3", response);
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.fetchingJokes();
  };
  logOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        {localStorage.getItem("token") && (
          <div>
            <button onClick={this.logOut}> log-out</button>
          </div>
        )}
        jokes list
        {this.state.jokes.map((joke, i) => {
          return (
            <div key={i}>
              <div>{joke.type}</div>
              <div>{joke.setup}</div>
              <div>{joke.punchline}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Jokes;
