import React from 'react';
import {Link} from 'react-router-dom';
import { NavBar } from 'react-bootstrap';

class NavBarComp extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          Question and Answer App
        </Link>
      </nav>
    );
  }
}

export default NavBarComp;
