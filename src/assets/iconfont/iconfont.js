import { createGlobalStyle } from 'styled-components'

export const Iconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1585551959090'); /* IE9 */
  src: url('./iconfont.eot?t=1585551959090#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1585551959090') format('woff'),
  url('./iconfont.ttf?t=1585551959090') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1585551959090#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;