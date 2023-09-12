import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const LogoLink = styled(Link)`
  transition: transform var(--transition);
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 500ms ease;
  max-width: 84px;

  @media (min-width: 768px) {
    margin-bottom: 168px;
  }

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const LogPicture = styled.picture`
  margin-bottom: 3px;

  @media (min-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const Tag = styled.p`
  font-family: 'Calibri', sans-serif;
  color: var(--secondary-color);
  font-weight: 400;
  letter-spacing: 0.45em;
  text-align: center;
  font-size: 5px;

  @media (min-width: 768px) {
    font-size: 10px;
  }
`;
