import styled from '@emotion/styled';

export const ServListCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px 24px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    gap: 13px;
  }
`;

export const ServItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 30px 5px;
  border: 1px solid #e7e9fc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(239, 235, 235, 0.1);
  min-height: 306px;
  width: 100%;
  opacity: 0;
  transform: translateY(1000%);
  transition: all 800ms ease 0ms;

  :nth-of-type(2) {
    transition: all 800ms ease 200ms;
  }

  :nth-of-type(3) {
    transition: all 800ms ease 400ms;
  }

  :last-child {
    transition: all 800ms ease 600ms;
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 24px) / 2);
    transform: translateX(-1000%);
    transition: all 800ms ease 0ms;

    :nth-of-type(2) {
      transform: translateX(1000%);
      transition: all 800ms ease 0ms;
    }

    :nth-of-type(3) {
      transform: translateX(-1000%);
      transition: all 800ms ease 300ms;
    }

    :last-child {
      transform: translateX(1000%);
      transition: all 800ms ease 300ms;
    }
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 40px) / 4);
    transform: translateX(-1000%);
    transition: all 800ms ease 300ms;

    :nth-of-type(2) {
      transform: translateX(-1000%);
      transition: all 800ms ease 0ms;
    }

    :nth-of-type(3) {
      transform: translateX(1000%);
      transition: all 800ms ease 0ms;
    }

    :last-child {
      transform: translateX(1000%);
      transition: all 800ms ease 300ms;
    }
  }

  &.visible {
    opacity: 1;
    transform: translate(0);
  }
`;

export const ServImgCont = styled.div`
  margin-bottom: 30px;
`;

export const ServTitles = styled.p`
  color: var(--accent-background-color);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  text-align: center;
  min-height: 81px;

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
