import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
