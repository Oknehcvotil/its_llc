import styled from '@emotion/styled';

export const ServListCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ServItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServImgCont = styled.div`
  transform: scale(0);
  transition: transform 800ms ease 0ms;

  &.visible {
    transform: scale(1);
  }
`;

export const ServTitles = styled.h4`
  color: var(--secondary-background-color);
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const ContactsList = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const ContactsItem = styled.li`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ContactsLink = styled.a`
  font-family: 'DM Sans', sans-serif;
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
