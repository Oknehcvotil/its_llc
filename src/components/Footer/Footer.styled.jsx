import styled from '@emotion/styled';


export const Foot = styled.footer`
  background-color: var(--head-bcg);
  padding: 100px 0;

  @media (min-width: 1200px) {
    padding: 120px 0;
  }
`;

export const FooterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
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


