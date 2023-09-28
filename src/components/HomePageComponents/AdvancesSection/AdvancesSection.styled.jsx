import styled from "@emotion/styled";

export const AdvSect = styled.section`
  padding: 96px 0;
`;

export const AdvCont = styled.div`
  margin: 0 auto;
  max-width: 426px;
  padding: 0 15px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const AdvTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 30px;
  color: var(--secondary-color);

  @media (min-width: 1200px) {
    margin-bottom: 80px;
  }
`;