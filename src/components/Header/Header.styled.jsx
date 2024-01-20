import styled from '@emotion/styled';

export const Head = styled.header`
  background-color: var(--head-bcg);
`;

export const HeadCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 0 auto;
  max-width: 426px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const HeadOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;
