import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'password':
        setPassword(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit}>
      <label className={s['label']}>
        <p>Email</p>
        <input
          className={s['input']}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="qwerty@gmail.com"
          value={email}
          required
        />
      </label>

      <label className={s['label']}>
        <p>Password</p>
        <div className={s['div']}>
          <input
            className={s['input-pass']}
            onChange={handleChange}
            type={show ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            value={password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,24}$"
            required
          />

          <button
            type="button"
            className={s['button-hide']}
            onClick={handleClick}
          >
            {show ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>

      <button type="submit" className={s['button']}>
        Login
      </button>

      <h4 className={s['h4']}>
        If you don’t have an account, <NavLink to="/register">register</NavLink>{' '}
        it!
      </h4>
    </form>
  );
};

export default LoginForm;
