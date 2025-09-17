import smileBeamIcon from './img/smile-beam.png';
import eyeIcon from './img/eye.png';
import styles from './LoginForm.module.css';

function LoginFormHtml(props) {
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
        <form className={styles.loginForm}>
          <label className={styles.label}>
            <span className={styles.inputName}>Full Name</span>
            <input
              type='text'
              name='fullName'
              placeholder='John Doe'
              autoFocus
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Email address</span>
            <input
              type='email'
              name='email'
              placeholder='johndoe@gmail.com'
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input type='password' name='password' className={styles.input} />
            <button type='button' className={styles.showPassword}>
              <img src={eyeIcon} alt='Show password button' />
            </button>
          </label>
          <label className={styles.label}>
            <span className={styles.checkboxField}>
              <input
                type='checkbox'
                name='termsCheckbox'
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I Agree all Statements in Terms od Service
              </span>
            </span>
          </label>
          <button type='submit' className={styles.submitBtn}>
            Sign Up
          </button>
        </form>
        <p>
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
