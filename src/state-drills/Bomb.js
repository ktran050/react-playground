import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      word: "tick",
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count < 8) {
        if (this.state.count % 2 === 0) this.setState({ word: "tick" });
        else this.setState({ word: "tock" });
        this.setState({ count: this.state.count + 1 });
      } else this.setState({ count: 0, word: "BOOM!!" });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.word}</div>;
  }
}

export default Bomb;
