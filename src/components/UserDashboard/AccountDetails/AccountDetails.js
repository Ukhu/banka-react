import React from 'react';
import PropTypes from 'prop-types';

const AccountDetails = ({ name, value }) => (
  <div className="details-div">
    <div className="acc-details-div">
      <p className="acc-details-title">{name[0]}</p>
      <p id="accountNumber" className="acc-details-val">{value[0]}</p>
    </div>
    <div className="acc-details-div left">
      <p className="acc-details-title total-bal">{name[1]}</p>
      <p id="accountBalance" className="acc-details-val">{value[1]}</p>
    </div>
  </div>
);

AccountDetails.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default AccountDetails;
