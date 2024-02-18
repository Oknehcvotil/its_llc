import { ContactsItem, ContactsLink } from './ServiceContacts.styled';

const ServiceContacts = ({ telLink, telNumb }) => {
  return (
    <ContactsItem>
      <ContactsLink href={telLink}>{telNumb}</ContactsLink>
    </ContactsItem>
  );
};

export default ServiceContacts;
