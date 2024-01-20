import styled from '@emotion/styled';

export const AdvList = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    gap: 0;
  }
`;