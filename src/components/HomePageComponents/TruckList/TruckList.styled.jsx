import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 20px;
  margin: 0;
  overflow: hidden;
  font-family: Calibri;
  color: var(--secondary-color);
`;

export const TruckItem = styled.li`
    transform: translateX(-200%);

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
    }
`;

export const TruckName = styled.p`
  color: var(--main-color);
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
