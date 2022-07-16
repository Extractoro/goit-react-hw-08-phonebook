import { Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetContactsQuery } from 'redux/contactsApi';

const ProfilePage = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      {isFetching && Loading.remove()}
      <h1>Welcome, {name}!</h1>
      <h2>This is a page of your profile!</h2>
      <h2>You have {contacts ? contacts.length : ''} contacts.</h2>
      <h2>
        If you want to edit some contacts{' '}
        <NavLink to="/contacts">click here</NavLink>!
      </h2>
      {isFetching && Loading.circle()}
    </>
  );
};

export default ProfilePage;
