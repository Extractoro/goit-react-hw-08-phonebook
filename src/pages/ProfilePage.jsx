import { Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetContactsQuery } from 'redux/contactsApi';
import styled from 'styled-components';
import defaultImg from '../profile-default.png';

const ProfilePage = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      {isFetching && Loading.remove()}
      <Wrapper>
        <Img src={defaultImg} alt="Profile Img" />
        <Container>
          <Text>Welcome, {name}!</Text>
          <Text>This is a page of your profile!</Text>
          <Text>You have {contacts ? contacts.length : ''} contacts.</Text>
          <Text>
            If you want to edit some contacts{' '}
            <NavLink to="/contacts">click here</NavLink>!
          </Text>
        </Container>
      </Wrapper>

      {isFetching && Loading.circle()}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #d7d7d7;
  align-items: center;
  padding: 30px;
  border: 1px solid #000;
  border-radius: 25px;
`;

const Container = styled.div`
  border-left: 1px solid #000;
  padding-left: 50px;
`;

const Img = styled.img`
  width: 300px;
  border: 1px solid black;
  margin-right: 50px;
  border-radius: 50%;
`;

const Text = styled.h1`
  color: #040c4a;
`;

export default ProfilePage;
