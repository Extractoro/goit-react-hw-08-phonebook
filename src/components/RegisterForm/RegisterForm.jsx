import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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

      <div className={s['info']}>
        8 to 24 characters.
        <hr />
        Must include uppercase and lowercase letters, a number and a special
        character.
        <hr />
        Allowed special characters: !, _, -, $
      </div>

      <button type="submit" className={s['button']}>
        Register
      </button>

      <h4 className={s['h4']}>
        If you have an account, <NavLink to="/login">login</NavLink>!
      </h4>
    </form>
  );
};

export default RegisterForm;
