import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "foo",
    };
  }

  handleFriend = () => {
    this.setState({
      who: "friend",
    });
  };
  handleWorld = () => {
    this.setState({
      who: "world",
    });
  };
  handleReact = () => {
    this.setState({
      who: "react",
    });
  };
  handle;
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleFriend}>Friend</button>
        <button onClick={this.handleWorld}>World</button>
        <button onClick={this.handleReact}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
