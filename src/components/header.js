import React from 'react';
import { Component } from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown, FormGroup, FormControl, Button, Form } from 'react-bootstrap';

export default class Header extends Component {

  onChange(event) {
    event.preventDefault();
  }

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#login-panel" />
            <a className="navbar-brand" href="#">Gate</a>
          </div>

          <div className="collapse navbar-collapse" id="login-panel">

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                <ul id="login-dp" className="dropdown-menu">
                  <li>
                    <div className="row">
                      <div className="col-md-12">

                        <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                          <div className="form-group">
                            <label className="sr-only" for="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                          </div>
                          <div className="form-group">
                            <label className="sr-only" for="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                            <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> keep me logged-in
                            </label>
                          </div>
                        </form>

                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}