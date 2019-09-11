import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthenticatedHeader = ({ user, link }) => (
  <header>
    <div className="container">
      <div id="header-title">
        <Link to={`/${link}`}>
          <h1>Banka</h1>
        </Link>
      </div>
      <div id="header-links">
        <p>
          <i className="far fa-user" />
          {' '}
          {user}
        </p>
        <Link
          id="logout"
          to="/"
          onClick={() => {
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('accountDetails');
          }}
        >
        Logout
        </Link>
      </div>
    </div>
  </header>
);

AuthenticatedHeader.propTypes = {
  user: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AuthenticatedHeader;
