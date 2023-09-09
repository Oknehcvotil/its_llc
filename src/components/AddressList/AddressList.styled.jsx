import styled from '@emotion/styled';

export const AddrList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;

  &.footer_adress_list {
    align-items: flex-start;

    @media (min-width: 1200px) {
      align-items: flex-start;
      flex-direction: column;
    }

    /* :nth-of-type(1)::before {
      content: '';
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
    } */
  }

  @media (min-width: 1200px) {
    gap: 15px;
    flex-direction: row;
  }
`;

export const AddressLink = styled.a`
  font-family: Calibri;
  font-size: 16px;
  line-height: 1.3;
  color: var(--main-color);
  letter-spacing: 0.04em;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--accent-color);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
`;

export const Location = styled.p`
  font-family: Calibri;
  font-size: 16px;
  line-height: 1.3;
  color: var(--main-color);
  letter-spacing: 0.04em;
  transition: color var(--transition);

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
`;
