import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import styled from 'styled-components';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Link to="/" exact="true">
        Home
      </Link>
      {isLoggedIn ? (
        <Link to="/contacts" exact="true">
          Contacts
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

const Link = styled(NavLink)`
  margin-right: 18px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  border-right: 1px solid black;
  padding-right: 15px;

  &:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: 0;
  }
`;

export default Navigation;
