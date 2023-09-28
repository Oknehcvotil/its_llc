import styled from '@emotion/styled';

export const AddrList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  font-style: normal;

  &.footer_adress_list {
    align-items: flex-start;

    @media (min-width: 1200px) {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (min-width: 1200px) {
    gap: 15px;
    flex-direction: row;
  }
`;

export const AddressLink = styled.a`
  font-weight: 400;
  font-size: 11px;
  line-height: 1.3;
  color: var(--main-color);
  letter-spacing: 0.04em;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--secondary-color);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
`;

export const Location = styled.p`
  font-weight: 400;
  font-size: 11px;
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
