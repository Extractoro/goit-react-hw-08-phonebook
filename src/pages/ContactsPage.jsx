import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import styled from 'styled-components';

const ContactsPage = () => {
  return (
    <Wrapper>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 20px;
`;

export default ContactsPage;
