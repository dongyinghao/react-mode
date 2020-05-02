import styled from 'styled-components'

export const TabWrap = styled.li`
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    width: 0;
    left: 50%;
    height: 2px;
    background-color: #666;
    transition: all 0.2s linear;
  }
  &:hover {
    &:after {
    width: 100%;
    left: 0;
  }
  }
`;