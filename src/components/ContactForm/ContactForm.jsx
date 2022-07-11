import { useState } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

const Form = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const hasName = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (hasName) {
      Notify.failure(`${name} is already in contacts.`);
      reset();
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      createContact(contact);
      reset();
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={s['label']}>
        <p>Name</p>
        <input
          className={s['input']}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Petro Ivanov"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={numberInputId} className={s['label']}>
        <p>Number</p>
        <input
          className={s['input']}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="+380-38-038-03-80"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={s['button']}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
