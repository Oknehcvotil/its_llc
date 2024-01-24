import styled from '@emotion/styled';

export const AdvList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  gap: 40px;

  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  @media (min-width: 330px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
  }

  @media (min-width: 768px) {
    gap: 0;
  }
`;