import { Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsApi';
import { getFilter } from 'redux/contactsSlice';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const contactsFilter = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  const renderContacts = filter === '' ? contacts : contactsFilter();

  return (
    <>
      {!isFetching && Loading.remove()}
      {contacts && <p>Total contacts: {renderContacts.length}</p>}
      <ul className={s['list']}>
        {contacts &&
          renderContacts.map(({ id, name, number }) => (
            <li key={id} id={id} className={s['item']}>
              <button
                onClick={() => deleteContact(id)}
                className={s['button']}
                type="Submit"
              >
                x
              </button>
              <div className={s['wrapper']}>
                <p className={s['text']}>{name}:</p>
                <p className={s['number']}>{number}</p>
              </div>
            </li>
          ))}
      </ul>
      {isFetching && Loading.circle()}
    </>
  );
};

export default ContactList;
