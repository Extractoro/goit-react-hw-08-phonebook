import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavigation = () => {
  return (
    <div>
      <Link to="/register" exact="true">
        Register
      </Link>
      <Link to="/login" exact="true">
        Login
      </Link>
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

export default AuthNavigation;
