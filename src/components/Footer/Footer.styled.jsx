import styled from '@emotion/styled';

export const FooterCont = styled.div`
  background-color: var(--head-bcg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 90px 10px;
  margin: 0 auto;
  max-width: 426px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
    padding: 70px 10px;
  }
`;
