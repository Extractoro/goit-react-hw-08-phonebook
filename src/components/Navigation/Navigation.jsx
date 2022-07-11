import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" exact="true">
        Home
      </NavLink>
      <NavLink to="/contacts" exact="true">
        Contacts
      </NavLink>
      <NavLink to="/register" exact="true">
        Register
      </NavLink>
      <NavLink to="/login" exact="true">
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;
