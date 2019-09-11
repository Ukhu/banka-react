import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticatedHeader from '../common/Header/AuthenticatedHeader';
import UserDetails from './UserDetails/UserDetails';
import AccountDetails from './AccountDetails/AccountDetails';
import Footer from '../common/Footer/Footer';

const UserDashboard = (props) => {
  const {
    user: {
      firstName, lastName, email, gender, age, phoneNumber, city, state,
    }, accountDetails: {
      accountNumber, openingBalance,
    },
  } = props;

  const accountDetails = localStorage.getItem('accountDetails');

  return (
    !accountDetails ? window.history.back()
      : (
        <>
          <AuthenticatedHeader user={firstName} link="dashboard" />
          <main>
            <section className="container account-details dashboard">
              <h3 id="dashboard-main-title" className="dashboard-section-title">
                  Dashboard
                {' '}
                <i id="list-icon" title="View your transaction history" className="far fa-list-alt" />
              </h3>
              <AccountDetails name={['AccountNumber', 'Account Balance']} value={[accountNumber, openingBalance]} />
            </section>
            <section id="profile" className="container account-details">
              <h3 className="dashboard-section-title">
                  Personal Information
                {' '}
                <i className="fas fa-pen" title="Update details" id="pen-icon" />
              </h3>
              <div className="details-div">
                <UserDetails name={['Firstname', 'Lastname']} value={[firstName, lastName]} />
                <UserDetails name={['Gender', 'Age']} value={[gender, age]} />
                <UserDetails name={['Email', 'Phone Number']} value={[email, phoneNumber]} />
                <UserDetails name={['City', 'State']} value={[city, state]} />
              </div>
            </section>
          </main>
          <Footer />
        </>
      )
  );
};

UserDashboard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    gender: PropTypes.string,
    age: PropTypes.string,
    phoneNumber: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  accountDetails: PropTypes.shape({
    accountNumber: PropTypes.number.isRequired,
    openingBalance: PropTypes.string.isRequired,
  }).isRequired,
};

UserDashboard.defaultValues = {
  user: {
    gender: '',
    age: '',
    phoneNumber: '',
    city: '',
    state: '',
  },
};

const mapStateToProps = (state) => ({
  user: state.currentUser,
  accountDetails: state.accountDetails,
});

export default connect(mapStateToProps)(UserDashboard);
