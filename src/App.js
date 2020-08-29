import React from "react";
import "./App.css";
import RegistrationForm from "./registrationForm/registrationForm";
class App extends React.Component {
  render() {
    return (
      <main className="App">
        <RegistrationForm />
      </main>
    );
  }
}

export default App;
