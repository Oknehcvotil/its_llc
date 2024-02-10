import styled from '@emotion/styled';
import truckS from '../../../assets/images/background/truckS.jpg';
import truckL from '../../../assets/images/background/TruckL.jpg';
import truckM from '../../../assets/images/background/truckM.jpg';

export const Hero = styled.section`
  text-align: center;
  margin: 0 auto;
  padding-top: 72px;
  padding-bottom: 40px;
  max-width: 1440px;
  min-height: 600px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.5),
      rgba(46, 47, 66, 0.5)
    ),
    url(${truckS});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media (min-width: 768px) {
    background-size: center;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.5),
        rgba(46, 47, 66, 0.5)
      ),
      url(${truckM});

    padding-top: 100px;
    padding-bottom: 60px;
    min-height: 530px;
  }

  @media (min-width: 1200px) {
    padding-top: 220px;
    min-height: 680px;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.5),
        rgba(46, 47, 66, 0.5)
      ),
      url(${truckL});
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

export const WelcomText = styled.p`
  color: var(--main-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  animation: fadeInText 1200ms ease forwards;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const AboutText = styled.p`
  color: var(--main-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  animation: fadeInText 1200ms ease forwards;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const CompName = styled.strong`
  color: var(--secondary-color);
`;
