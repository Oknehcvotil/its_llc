import styled from '@emotion/styled';
import truck from '../../..//images/background/truck_L.jpg';
import truckM from '../../../images/background/truck_M.jpg';
import truckS from '../../../images/background/truck_S.jpg';

export const Hero = styled.section`
  text-align: center;
  margin: 0 auto;
  padding-top: 72px;
  padding-bottom: 40px;
  max-width: 1440px;
  min-height: 432px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${truckS});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${truckM});

    padding-top: 128px;
    padding-bottom: 60px;
    min-height: 600px;
  }

  @media (min-width: 1200px) {
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${truck});
  }
`;

export const HeroCont = styled.div`
  max-width: 426px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const Tagline = styled.h1`
  font-family: 'Calibri', sans-serif;
  line-height: 1.3;
  color: var(--secondary-color);
  font-weight: 400;
  letter-spacing: 0.5em;
  text-align: center;
  opacity: 0;
  font-size: 44px;
  margin-bottom: 40px;
  animation: fadeIn 800ms ease forwards;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const AboutText = styled.p`
  color: var(--main-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  animation: fadeInText 1200ms ease forwards;
`;

export const CompName = styled.strong`
  color: var(--secondary-color);
`;
