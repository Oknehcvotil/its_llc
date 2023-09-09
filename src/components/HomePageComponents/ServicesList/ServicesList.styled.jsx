import styled from '@emotion/styled';

export const ServList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ServItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServImgCont = styled.div`
  transform: scale(0);
  transition: transform 800ms ease 0ms;

  &.visible {
    transform: scale(1);
  }
`;

export const ServTitles = styled.h4`
  color: var(--secondary-background-color);
  font-family: Calibri;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;
