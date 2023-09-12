import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 20px;
  margin: 0 auto 20px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: var(--secondary-color);

  @media (min-width: 1200px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const TruckItem = styled.li`
  transform: translateX(-200%);

  @media (min-width: 1200px) {
    transform: translateY(1000%);
    margin-bottom: 30px;

    :last-child {
      margin-bottom: 0;
    }
  }

  :nth-of-type(1) {
    transition: transform 800ms ease-in-out 0ms;
  }

  :nth-of-type(2) {
    transition: transform 800ms ease-in-out 200ms;
  }

  :nth-of-type(3) {
    transition: transform 800ms ease-in-out 400ms;
  }

  :nth-of-type(4) {
    transition: transform 800ms ease-in-out 600ms;
  }

  &.active {
    transform: translateX(0);

    @media (min-width: 1200px) {
      transform: translateY(0);
    }
  }
`;

export const TruckName = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  color: var(--main-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
