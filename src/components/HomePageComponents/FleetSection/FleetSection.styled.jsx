import styled from '@emotion/styled';

export const FleetSect = styled.section`
  background-color: #aeaeae;
  padding: 100px 0;
  margin: 0 auto;
`;

export const FleetCont = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 0 15px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const FleetTitle = styled.h2`
  font-family: Calibri;
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 30px;
  color: var(--secondary-color);

  @media (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;
