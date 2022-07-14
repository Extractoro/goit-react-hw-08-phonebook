import { Loading } from 'notiflix';
import { NavLink } from 'react-router-dom';
import { useGetContactsQuery } from 'redux/contactsApi';

const ProfilePage = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  return (
    <>
      {isFetching && Loading.remove()}
      <h1>This is a page of your profile!</h1>
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
