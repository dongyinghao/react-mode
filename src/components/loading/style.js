import styled from 'styled-components'

export const LoadingWrap = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0,0,0,.6);
  img {
    position: absolute;
    width: 32px;
    height: 32px;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;