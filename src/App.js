import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyProvider, MyContext } from "./context";

import "./App.css";
import Login from "./Login";
import Receipt from "./Receipt";
import Receipts from "./Receipts";

class App extends Component {
  state = {
    active: null,

    alert: {
      show: false,
      msg: ""
    }
  };

  notification(type, msg) {
    this.setState({ alert: { show: true, msg: msg } });
    setTimeout(() => {
      this.setState({ alert: { show: false } });
    }, 5000);
  }
  handleClick = event => {
    event.preventDefault();
    this.setState({ active: null });

    this.notification("success", "Stopped cooking!");
  };
  acceptRecipe = receipt => {
    this.setState({ active: receipt });
  };
  handleMenu = event => {
    event.preventDefault();
    this.setState({ menu: !this.state.menu });
  };
  render() {
    let button;
    if (this.state.active) {
      button = (
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          type="submit"
          onClick={this.handleClick}
        >
          Back to Receipts
        </button>
      );
    }

    return (
      <div className="App">
        <MyProvider>
          <Router>
            <div className="h-100">
              <header className="App-header bg-info">
                <nav className="navbar">
                  <div className="d-flex align-items-center">
                    <div className="menu" onClick={this.handleMenu}>
                      J.O.
                      <div
                        className={`menumenu${
                          this.state.menu ? "" : " hidden"
                        }`}
                      >
                        <ul>
                          <li />
                          <Link to="/">Abmelden</Link>
                        </ul>
                      </div>
                    </div>
                    <MyContext.Consumer>
                      {context => (
                        <div className="ml-2 text-white">Cookingtime: {context.time}m</div>
                      )}
                    </MyContext.Consumer>
                  </div>
                  {button}
                </nav>

                <div
                  className={`alert ${
                    this.state.alert.show === true ? "" : " hidden"
                  }`}
                >
                  {this.state.alert.msg}
                </div>
              </header>
              <div className="wrapper">
                <Route path="/" exact component={Login} />
                <Route
                  path="/recipe/:recipe"
                  exact
                  render={props => (
                    <Receipt {...props} active={this.state.active} />
                  )}
                />
                <Route
                  path="/receipts"
                  exact
                  render={props => (
                    <Receipts
                      {...props}
                      active={this.state.active}
                      acceptRecipe={this.acceptRecipe}
                    />
                  )}
                />
              </div>
            </div>
          </Router>
        </MyProvider>
      </div>
    );
  }
}

export default App;
