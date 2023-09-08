import styled from "@emotion/styled";

export const ServCont = styled.div`
  background-color: var(--accent-background-color);
  margin: 0 auto;
  padding: 30px 10px;
  max-width: 426px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 766px;
    padding: 50px 10px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
    padding: 70px 10px;
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
