import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo"><i className="fa fa-envelope"></i> Emaily</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Login With Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
