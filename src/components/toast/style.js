import styled from 'styled-components'

export const ToastWrap = styled.div`
  .content {
    position: fixed;
    width: 70%;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 120px;
    border-radius: 10px;
    border: 1px solid red;
    padding: 10px;
    z-index: 3;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
  }
  .slide-enter {
    opacity: 0;
    transform: translateY(-200px);
    transition: all 0.3s ease-out;
  }
  .slide-enter-active {
    opacity: 1;
    transform: translateY(0);
  }
  .slide-enter-done {
    opacity: 1;
    transform: translateY(0px);
  }
  .slide-exit {
    transition: all 0.3s ease-out;
    opacity: 1;
    transform: translateY(0px);
  }
  .slide-exit-active {
    opacity: 0;
    transform: translateY(-120px);
  }
  .slide-exit-done {
    opacity: 0;
    transform: translateY(-120px);
  }
`;