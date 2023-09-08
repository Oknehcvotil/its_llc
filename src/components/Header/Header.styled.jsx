import styled from "@emotion/styled";

export const HeadCont = styled.div`
  background-color: var(--head-bcg);
  border-bottom: 0.5px solid rgba(18, 18, 18, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
  gap: 5px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const LogoLink = styled.a`
  transition: transform var(--transition);

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
