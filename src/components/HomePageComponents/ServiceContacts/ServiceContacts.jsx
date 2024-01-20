import { ContactsItem, ContactsLink } from './ServiceContacts.styled';

const ServiceContacts = ({ index, telLink, telNumb }) => {
  return (
    <ContactsItem key={index}>
      <ContactsLink href={telLink}>{telNumb}</ContactsLink>
    </ContactsItem>
  );
};

export default ServiceContacts;
