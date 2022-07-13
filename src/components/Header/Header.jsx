import Navigation from 'components/Navigation/Navigation';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Head>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Head>
      <Outlet />
    </>
  );
};

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  align-items: center;
`;

export default Header;
