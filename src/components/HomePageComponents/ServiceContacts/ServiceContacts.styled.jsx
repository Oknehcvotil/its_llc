import styled from '@emotion/styled';

export const ContactsItem = styled.li`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ContactsLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  color: var(--main-color);
  letter-spacing: 0.04em;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--secondary-color);
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
`;
