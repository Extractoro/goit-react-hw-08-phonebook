import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <h2>
        <NavLink to="/">Click here</NavLink> to go to the home page
      </h2>
    </>
  );
};

export default NotFound;
