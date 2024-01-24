import styled from '@emotion/styled';

export const Foot = styled.footer`
  background-color: var(--head-bcg);
  padding: 100px 0 50px 0;

  @media (min-width: 1200px) {
    padding: 120px 0 60px 0;
  }
`;

export const FooterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 0 auto 50px;
  max-width: 426px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
    padding: 70px 10px;
  }
`;

export const PoweredCont = styled.div`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);

  & > a {
    color: rgba(255, 255, 255, 0.8);

    transition: color 200ms ease-out;

    &:hover,
    &:focus {
      color: #dd5454;
    }
  }
`;

