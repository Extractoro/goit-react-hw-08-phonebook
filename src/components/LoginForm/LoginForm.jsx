import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <input
          className={s['input']}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$"
          required
        />
      </label>

      <button type="submit" className={s['button']}>
        Register
      </button>
    </form>
  );
};

export default LoginForm;
