import styled from 'styled-components'

export const FooterWrap = styled.div`
  padding: 20px 0;
  a {
    color: #999;
    margin-left: 20px;
    transition: all 0.3s linear;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: #333;
    }
  }
`