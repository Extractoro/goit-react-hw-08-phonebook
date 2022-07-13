import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const reset = () => {
    setName('');
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
        <p>Name</p>
        <input
          className={s['input']}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Petro Ivanov"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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

export default RegisterForm;
