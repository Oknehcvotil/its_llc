import styled from '@emotion/styled';

export const ServSect = styled.section`
  padding: 96px 0;
  background-color: var(--accent-background-color);
`;

export const ServCont = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 426px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const ServTitle = styled.h2`
  font-family: Calibri;
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 10px;
  color: var(--secondary-color);

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 30px;
  }
`;
