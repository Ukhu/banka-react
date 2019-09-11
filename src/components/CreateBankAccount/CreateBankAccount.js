import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as accountActions from '../../actions/accountActions';
import AuthenticatedHeader from '../common/Header/AuthenticatedHeader';
import Footer from '../common/Footer/Footer';

class CreateAccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      accountType: '',
      error: '',
      loading: false,
    };
  }

  componentDidMount() {
    const accountDetails = localStorage.getItem('accountDetails');
    const { user, history } = this.props;

    if (accountDetails) {
      history.push('/dashboard');
    } else if (!user) {
      window.history.back();
    }
  }

  handleInputChange = (e) => {
    e.persist();
    const { value } = e.target;
    this.setState({ accountType: value, error: '' });
  };

  handleSubmit = (e) => {
    const { accountType } = this.state;
    const { actions, history } = this.props;
    e.preventDefault();
    if (accountType === '') {
      return this.setState({
        error: 'you must select an account type to continue',
        loading: false,
      });
    }
    return actions.createBankAccount(accountType).then(() => {
      this.setState({
        loading: false,
      });
      history.push('/dashboard');
    })
      .catch((error) => {
        this.setState({
          error: error.response.data.error,
          loading: false,
        });
        setTimeout(() => {
          this.setState({
            error: '',
          });
        }, 2000);
      });
  }

  render() {
    const { error, loading, accountType } = this.state;
    const { user } = this.props;
    return (
      <>
        <AuthenticatedHeader user={user.firstName} link="new/bank-account" />
        <main>
          <section id="create-account" className="container">
            <div className="all-form">
              <h2>Step 2: Open A Bank Account</h2>
              <form id="create-account-form" onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                  <select name="accountType" defaultValue={accountType} onChange={(e) => this.handleInputChange(e)} required>
                    <option>Type</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                  </select>
                </div>
                <button type="submit" className="form-button">
                  { !loading ? 'Create Account' : 'Finishing up...'}
                </button>
              </form>
              { error ? <p id="message">{error}</p> : null }
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

CreateAccountContainer.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(accountActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountContainer);
