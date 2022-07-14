import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ProfilePage from 'pages/ProfilePage';
import RegisterPage from 'pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import Container from './Container';
import Header from './Header/Header';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Section from './Section';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Section>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<PublicRoute />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route path="/contacts" element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
              <Route path="/" element={<PublicRoute restricted />}>
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route path="/" element={<PublicRoute restricted />}>
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Route>
          </Routes>
        </Section>
      </Container>
    </>
  );
};
