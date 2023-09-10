import styled from '@emotion/styled';

export const FleetListTitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-family: Calibri;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-around;
  }
`;

export const FleetListCont = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const FleetListImg = styled.img`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-height: 300px;
  }

  @media (min-width: 1200px) {
    max-height: 400px;
  }
`;

export const FleetUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FleetListItem = styled.li`
  font-family: Calibri;
  color: var(--title-text-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  @media (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;
