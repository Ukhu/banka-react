import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import validateInput from './utils/validateInput';
import * as userActions from '../../actions/userActions';
import InputField from '../common/InputField/InputField';
import initialState from './signupLocalState';
import UnauthenticatedHeader from '../common/Header/UnauthenticatedHeader';
import Footer from '../common/Footer/Footer';

class SignupContainer extends Component {
  constructor() {
    super();

    this.state = {
      form: initialState,
      error: '',
      loading: false,
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user');

    if (user) {
      window.history.back();
    }
  }

  handleInputChange = (e, index) => {
    e.persist();
    const { value } = e.target;
    const { form } = this.state;
    this.setState((prevState) => {
      const newForm = [...prevState.form];
      const error = validateInput(index, value, form);
      newForm[index].value = e.target.value;
      newForm[index].errorMessage = error;
      return {
        form: newForm,
      };
    });
  };

  handleSubmit = (e) => {
    const { form } = this.state;
    const { actions, history } = this.props;
    e.preventDefault();

    const validationError = form.find((field) => field.errorMessage);


    if (validationError) {
      this.setState({
        error: 'please supply valid input',
      });
      setTimeout(() => {
        this.setState({
          error: '',
        });
      }, 2000);
    } else {
      const user = {
        firstName: form[0].value,
        lastName: form[1].value,
        email: form[2].value,
        password: form[3].value,
      };

      this.setState({
        loading: true,
      });

      actions.signupUser(user).then(() => {
        this.setState({
          loading: false,
        });
        history.push('/new/bank-account');
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
  }

  render() {
    const { form, error, loading } = this.state;
    return (
      <>
        <UnauthenticatedHeader />
        <main>
          <section id="signup" className="container">
            <div id="signup-form" className="all-form">
              <h2 className="form-title">Step 1: Register As A Banka User</h2>
              <form id="sign_up" onSubmit={(e) => this.handleSubmit(e)}>
                { form.map((field, index) => (
                  <InputField
                    key={field.id}
                    index={index}
                    placeholder={field.name}
                    value={field.value}
                    type={field.type}
                    onChange={this.handleInputChange}
                    title={field.validationMessage}
                    error={field.errorMessage}
                  />
                ))}
                <button className="form-button" type="submit">
                  { !loading ? 'Sign Up' : 'Signing you up...'}
                  {' '}
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

SignupContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default connect(null, mapDispatchToProps)(SignupContainer);
