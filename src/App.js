import React, { Component } from "react";
import "./App.css";
import "./components/Interval";
import Timer from "./components/Interval";
import pic from "./pic.jpg";

class App extends Component {
  state = {
    fullName: "Ines Elkefi",
    bio: " A curious, Autonomous, ambitious girl ready to take up new challenges. After graduating with a professional master's in computer systems and network security, she chose to change her career path. She was interested in web development and decided to dive into that world.",
    imgSrc: { pic },
    show: false,
  };

  Aprove = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.Aprove}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show ? (
          <div>
            <img src={pic} alt="profile" />
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
          </div>
        ) : (
          <p>Press the button!</p>
        )}
        <Timer />
      </div>
    );
  }
}

export default App;
