import smileBeamIcon from './img/smile-beam.png';
import eyeIcon from './img/eye.png';
import styles from './LoginForm.module.css';

function LoginFormHtml(props) {
  return (
    <>
      <div className='formContainer'>
        <div className='imageWrapper'>
          <img src={smileBeamIcon} alt='Smile face icon' />
        </div>
        <h1>Create Your Account</h1>
        <form>
          <label>
            <span>Full Name</span>
            <input
              type='text'
              name='fullName'
              placeholder='John Doe'
              autoFocus
            />
          </label>
          <label>
            <span>Email address</span>
            <input type='email' name='email' placeholder='johndoe@gmail.com' />
          </label>
          <label>
            <span>Password</span>
            <input type='password' name='password' />
            <button type='button'>
              <img src={eyeIcon} alt='Show password button' />
            </button>
          </label>
          <label>
            <input type='checkbox' name='termsCheckbox' />
            <span>I Agree all Statements in Terms od Service</span>
          </label>
          <button type='submit'>Sign Up</button>
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
