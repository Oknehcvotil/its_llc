import styled from "@emotion/styled";

export const List = styled.ul`
  padding-left: 20px;
  margin: 0;
  overflow: hidden;
  font-family: Calibri;
  color: var(--secondary-color);
`;

export const TruckItem = styled.li`
  @media (min-width: 768px) {
    animation: fadeLeft 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;

    :nth-of-type(even) {
      animation: fadeRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
    }
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
