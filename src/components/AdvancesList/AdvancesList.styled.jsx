import styled from '@emotion/styled';

export const AdvList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-around;
  }
`;

export const AdvItem = styled.li`
  flex-basis: calc(100% / 4);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    :nth-of-type(-n + 2) {
      animation: fadeLeft 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
    }

    :nth-last-of-type(-n + 2) {
      animation: fadeRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
    }
  }
`;

export const ImgCont = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: var(--secondary-background-color);

  transform: scale(0);
  transition: transform 800ms ease 0ms;

  &.visible {
    transform: scale(1);
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const AdvText = styled.p`
  color: var(--title-text-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 800ms ease-in-out 0ms, opacity 800ms ease-in-out 0ms;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
