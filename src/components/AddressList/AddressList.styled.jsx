import styled from "@emotion/styled";

export const AddrList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;

  @media (min-width: 1200px) {
    gap: 15px;
    flex-direction: row;
  }
`;

export const AddressLink = styled.a`
  font-family: Calibri;
  font-size: 12px;
  line-height: 1.3;
  color: var(--main-color);
  letter-spacing: 0.04em;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--accent-color);
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
`;
