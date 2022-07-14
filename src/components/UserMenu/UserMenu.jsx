import styled from 'styled-components';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Main>
      <span>
        <FaRegUser />
        <Link to="/profile">My Profile</Link>
      </span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
    </Main>
  );
};

const Main = styled.div`
  background-color: #f4f4f4;
  box-shadow: inset 5px -4px 13px 4px #d0d0d0;
  display: flex;
  justify-content: space-around;
  width: 375px;
  padding: 10px;
  align-items: center;
`;

const Link = styled(NavLink)`
  margin-left: 10px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding-right: 15px;
`;

const Button = styled.button`
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  &:active {
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
    top: 1px;
  }
`;

export default UserMenu;
