import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { LinkBox, LinkOverlay, Box, Heading, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <MainText>Welcome to the home page!</MainText>
      {isLoggedIn ? (
        <>
          <Container>
            <LinkBox
              as="article"
              maxW="25em"
              p="25"
              mb="30"
              borderWidth="1px"
              rounded="1em"
              bgColor="#f4f4f4"
            >
              <Box
                as="time"
                fontWeight="700"
                dateTime="2022-07-15 15:30:00 +0000 UTC"
              >
                1 day ago
              </Box>
              <Heading size="48em" my="10">
                <LinkOverlay color="black" textDecoration="none" href="#">
                  Ukraine. War
                </LinkOverlay>
              </Heading>
              <Text my="10">
                Catch up on what’s been cookin’ at Smashing and explore some of
                the most popular community resources.
              </Text>
            </LinkBox>
            <LinkBox
              as="article"
              maxW="25em"
              p="25"
              mb="30"
              borderWidth="1px"
              rounded="1em"
              bgColor="#f4f4f4"
            >
              <Box
                as="time"
                fontWeight="700"
                dateTime="2022-07-15 15:30:00 +0000 UTC"
              >
                1 day ago
              </Box>
              <Heading size="48em" my="10">
                <LinkOverlay color="black" textDecoration="none" href="#">
                  Ukraine. War
                </LinkOverlay>
              </Heading>
              <Text my="10">
                Catch up on what’s been cookin’ at Smashing and explore some of
                the most popular community resources.
              </Text>
            </LinkBox>
            <LinkBox
              as="article"
              maxW="25em"
              p="25"
              mb="30"
              borderWidth="1px"
              rounded="1em"
              bgColor="#f4f4f4"
            >
              <Box
                as="time"
                fontWeight="700"
                dateTime="2022-07-15 15:30:00 +0000 UTC"
              >
                1 day ago
              </Box>
              <Heading size="48em" my="10">
                <LinkOverlay color="black" textDecoration="none" href="#">
                  Ukraine. War
                </LinkOverlay>
              </Heading>
              <Text my="10">
                Catch up on what’s been cookin’ at Smashing and explore some of
                the most popular community resources.
              </Text>
            </LinkBox>
            <LinkBox
              as="article"
              maxW="25em"
              p="25"
              mb="30"
              borderWidth="1px"
              rounded="1em"
              bgColor="#f4f4f4"
            >
              <Box
                as="time"
                fontWeight="700"
                dateTime="2022-07-15 15:30:00 +0000 UTC"
              >
                1 day ago
              </Box>
              <Heading size="48em" my="10">
                <LinkOverlay color="black" textDecoration="none" href="#">
                  Ukraine. War
                </LinkOverlay>
              </Heading>
              <Text my="10">
                Catch up on what’s been cookin’ at Smashing and explore some of
                the most popular community resources.
              </Text>
            </LinkBox>
          </Container>
        </>
      ) : (
        <SubText>
          <NavLink to="/login">Login</NavLink> to watch the news
        </SubText>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MainText = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const SubText = styled.h2`
  text-align: center;
`;

export default HomePage;
