import styled from "@emotion/styled";
import truck from "../../images/truck_L.jpg";
import truckM from "../../images/truck_M.jpg";
import truckS from "../../images/truck_M.jpg";

export const Hero = styled.section`
  text-align: center;
  margin: 0 auto;
  padding: 60px 10px 20px;
  max-width: 426px;
  min-height: 400px;

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
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${truck});
    padding: 70px 10px 40px;
    max-width: 1158px;
  }
`;

export const HeroCont = styled.div`
  max-width: 426px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const Tagline = styled.h1`
  font-family: Calibri;
  line-height: 1.3;
  color: var(--secondary-color);
  letter-spacing: 0.5em;
  text-align: center;
  opacity: 0;
  font-size: 36px;
  margin-bottom: 40px;
  animation: fadeIn 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const AboutTitle = styled.h5`
  color: var(--title-text-color);
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;

export const AboutText = styled.p`
  color: var(--main-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const CompName = styled.strong`
  color: var(--secondary-color);
`;
