import { useState } from 'react';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

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
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
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
          placeholder="+380-38-038-03-80"
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
