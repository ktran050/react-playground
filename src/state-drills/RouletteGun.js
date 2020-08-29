import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }
  pullTheTrigger = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      let someNum = Math.ceil(Math.random() * 8);
      this.setState({ chamber: someNum, spinningTheChamber: false });
    }, 1000);
  };
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  message() {
    if (this.state.spinningTheChamber === true) {
      return <p>spinning the chamber and pulling the trigger! ...</p>;
    } else if (this.state.chamber === 8) {
      return <p>BANG!!!</p>;
    } else {
      return <p>You're safe!</p>;
    }
  }
  render() {
    return (
      <div>
        {this.message()}
        <button onClick={this.pullTheTrigger}>Pull the trigger</button>
      </div>
    );
  }
}

export default RouletteGun;
