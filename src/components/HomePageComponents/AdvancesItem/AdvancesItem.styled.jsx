import styled from '@emotion/styled';

export const AdvItem = styled.li`
  flex-basis: calc(100% / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  transition: transform 500ms ease 0ms;

  &.visible {
    transform: scale(1);
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const AdvText = styled.p`
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  transform: translateY(100%);
  transition: transform 1100ms ease 0ms;
  text-align: center;

  &.visible {
    transform: translateY(0);
  }
`;
