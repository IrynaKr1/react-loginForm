import React, { Component } from 'react';
import classNames from 'classnames';
import LoginFormHtml from './LoginFormHtml';

const INITIAL_VALUES = { email: '', password: '', fullName: '' };
const LOGIN_FORM_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/,
  fullName: /^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$/,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: INITIAL_VALUES.fullName,
      email: INITIAL_VALUES.email,
      password: INITIAL_VALUES.password,
      isFullNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPasswordVisible: false,
    };
  }

  handleFullnameChange = ({ target: { value } }) => {
    this.setState({
      fullName: value,
      isFullNameValid: LOGIN_FORM_REG_EXP.fullName.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REG_EXP.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REG_EXP.password.test(value),
    });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  handleCheckboxChange = ({ target: { checked } }) => {
    console.log('Checkbox is:', checked ? 'checked' : 'unchecked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: INITIAL_VALUES.email,
      fullName: INITIAL_VALUES.fullName,
      password: INITIAL_VALUES.password,
    });
  };

  render() {
    const {
      email,
      password,
      fullName,
      isFullNameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordVisible,
    } = this.state;
    return (
      <>
        <LoginFormHtml
          handleFullnameChange={this.handleFullnameChange}
          isFullNameValid={isFullNameValid}
          isEmailValid={isEmailValid}
          handleEmailChange={this.handleEmailChange}
          isPasswordValid={isPasswordValid}
          isPasswordVisible={isPasswordVisible}
          handlePasswordChange={this.handlePasswordChange}
          togglePasswordVisibility={this.togglePasswordVisibility}
          handleCheckboxChange={this.handleCheckboxChange}
          email={email}
          password={password}
          fullName={fullName}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default LoginForm;
