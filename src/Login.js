import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1 className="">Handfree cookbook</h1>
        <h2 className="">Please sign in</h2>
        <div>
          <input placeholder="username" className="form-control" type="text" name="username" />
        </div>
        <div>
          <input className="form-control" type="password" name="p assword" placeholder="password" />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <Link className="btn btn-lg btn-primary btn-block" to="/receipts/">Login</Link>
      </div>
    );
  }
}

export default Login;
