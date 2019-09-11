import React from 'react';
import { Link } from 'react-router-dom';

const UnauthenticatedHeader = () => (
  <header>
    <div className="container">
      <div id="header-title">
        <Link to="/">
          <h1>Banka</h1>
        </Link>
      </div>
      <div id="header-links">
        <p className="login-signup">
          <Link className="pre-login-link" to="/signup">
            Sign Up
          </Link>
        </p>
        <p className="login-signup">
            Sign In
        </p>
      </div>
    </div>
  </header>
);

export default UnauthenticatedHeader;
