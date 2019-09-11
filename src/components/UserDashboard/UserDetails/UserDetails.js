import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ name, value }) => (
  <div className="display-full-div">
    <div className="display-half-div left-side">
      <p>
        <span>
          {name[0]}
          :
          {' '}
        </span>
        {value[0]}
      </p>
    </div>
    <div className="display-half-div right-side">
      <p>
        <span>
          {name[1]}
          :
          {' '}
        </span>
        {value[1]}
      </p>
    </div>
  </div>
);

UserDetails.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserDetails;
