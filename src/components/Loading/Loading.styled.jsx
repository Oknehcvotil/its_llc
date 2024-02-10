import styled from '@emotion/styled';

export const LoadingWrapper = styled.div`
  position: fixed;

  z-index: 999;
  background-color: ${props =>
    props.noBackdrop ? 'transparent' : 'rgba(10, 10, 10, 0.495)'};
  width: 100%;
  height: 100%;
`;

export const LoadingCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
