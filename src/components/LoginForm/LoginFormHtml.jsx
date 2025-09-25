import classNames from 'classnames';
import smileBeamIcon from './img/smile-beam.png';
import eyeIcon from './img/eye.png';
import eyeCrossed from './img/eye-crossed.png';
import styles from './LoginForm.module.css';

function LoginFormHtml(props) {
  const {
    formState: {
      email,
      password,
      fullName,
      isFullNameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordVisible,
      isAgreed,
    },
    handleFullnameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    togglePasswordVisibility,
    handleCheckboxChange,
  } = props;

  const fullnameClassName = classNames(styles.input, {
    [styles.inputValid]: isFullNameValid,
    [styles.inputInvalid]: !isFullNameValid,
  });

  const emailClassName = classNames(styles.input, {
    [styles.inputValid]: isEmailValid,
    [styles.inputInvalid]: !isEmailValid,
  });

  const passClassName = classNames(styles.passwordContainer, {
    [styles.inputValid]: isPasswordValid,
    [styles.inputInvalid]: !isPasswordValid,
  });

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={smileBeamIcon}
            alt='Smile face icon'
            className={styles.headerImg}
          />
        </div>
        <h1 className={styles.formHeader}>Create Your Account</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Full Name</span>
            <input
              type='text'
              name='fullName'
              placeholder='John Doe'
              value={fullName}
              onChange={handleFullnameChange}
              autoFocus
              className={fullnameClassName}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Email address</span>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='johndoe@gmail.com'
              onChange={handleEmailChange}
              className={emailClassName}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <div className={passClassName}>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                name='password'
                value={password}
                className={styles.input}
                onChange={handlePasswordChange}
              />
              <button
                type='button'
                className={styles.showPassword}
                onClick={togglePasswordVisibility}
              >
                <img
                  src={isPasswordVisible ? eyeCrossed : eyeIcon}
                  alt='Show password button'
                />
              </button>
            </div>
          </label>
          <label className={styles.label}>
            <span className={styles.checkboxField}>
              <input
                type='checkbox'
                name='termsCheckbox'
                checked={isAgreed}
                className={styles.checkbox}
                onChange={handleCheckboxChange}
              />
              <span className={styles.checkboxText}>
                I Agree all Statements in Terms od Service
              </span>
            </span>
          </label>
          <button
            disabled={!isAgreed}
            type='submit'
            className={styles.submitBtn}
          >
            Sign Up
          </button>
        </form>
        <p className={styles.signInText}>
          I'm already a member!
          <a
            href='https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?hl=en&cp=e30.'
            target='_blank'
          >
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}

export default LoginFormHtml;
