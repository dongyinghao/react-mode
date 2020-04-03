import styled from 'styled-components'

export const HeaderWrap = styled.div`
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: #fff;
  .wrap {
    min-width: 800px;
    max-width: 1600px;
    .nav-main {
      max-width: 1200px;
      margin: 0 auto;
      .slide-enter {
        transition: all 0.2s ease-out;
      }
      .slide-enter-active {
        width: 240px;
      }
      .slide-exit {
        transition: all 0.2s ease-out;
      }
      .slide-exit-active {
        width: 140px;
      }
    }
  }
`;