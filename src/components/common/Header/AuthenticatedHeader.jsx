import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthenticatedHeader = ({ user }) => (
  <header>
    <div className="container">
      <div id="header-title">
        <Link to="/new/bank-account">
          <h1>Banka</h1>
        </Link>
      </div>
      <div id="header-links">
        <p>
          <i className="far fa-user" />
          {' '}
          {user}
        </p>
        <a id="logout" href="index.html">Logout</a>
      </div>
    </div>
  </header>
);

AuthenticatedHeader.propTypes = {
  user: PropTypes.string.isRequired,
};

export default AuthenticatedHeader;
