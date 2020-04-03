import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  // 样式初始化
	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
	big, cite, code,	del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt,	b, u, i, center,
	dl, dt, dd, ol, ul, li,	fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside,
	canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, 
	mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}
	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
	body {line-height: 1;}
	input, button {font-size: inherit;outline: none;border: 0}
	a {text-decoration: none;color: #333;}
	html,body,#root {height: 100%;}
	ol, ul {list-style: none;}
	table {border-collapse: collapse;border-spacing: 0;}
	.b {border: 1px solid red}
	
  // 字体色
  .c-f {color: #fff}
  .c-3 {color: #333}
  .c-6 {color: #666}
  .c-9 {color: #999}
  .c-d {color: #ddd}
  .c-red {color: #ea6f5a}
  .c-green {color: #42c02e}
  
  // 背景色
  .bg-f {background-color: #fff}
  .bg-e {background-color: #eee}
  .bg-c {background-color: #ccc}
  .bg-a {background-color: #aaa}
  .bg-red {background-color: #ea6f5a}
  .bg-blue {background-color: #3194d0}
  .bg-green {background-color: #42c02e}
  
  // 字体尺寸
  .fs-68 {font-size: 68px}
  .fs-30 {font-size: 30px}
  .fs-22 {font-size: 22px}
  .fs-20 {font-size: 20px}
  .fs-16 {font-size: 16px}
  .fs-15 {font-size: 15px}
  .fs-14 {font-size: 14px}
  .fs-12 {font-size: 12px}
  .fs-10 {font-size: 10px}
  .bold {font-weight: bold}
  
  // 外间距
  .m-h-a {margin-right: auto;margin-left: auto;}
  .m-v-a {margin-bottom: auto;margin-top: auto;}
  .m-r-10 {margin-right: 10px;}
  .m-l-10 {margin-left: 10px;}
  .m-r-30 {margin-right: 30px;}
  .m-r-6 {margin-right: 6px;}
  .m-v-20 {margin-top: 20px;margin-bottom: 20px}
  .m-t-80 {margin-top: 80px;}
  .m-t-60 {margin-top: 60px;}
  .m-t-30 {margin-top: 30px;}
  .m-t-20 {margin-top: 20px;}
  .m-t-16 {margin-top: 16px;}
  .m-t-10 {margin-top: 10px;}
  .m-t-6 {margin-top: 6px;}
  .m-t--40 {margin-top: -40px;}
  .m-b-20 {margin-bottom: 20px;}
  .m-b-10 {margin-bottom: 10px;}
  
  // 内间距
  .p-30 {padding: 30px;}
  .p-16 {padding: 16px;}
  .p-10 {padding: 10px;}
  .p-v-40 {padding-top: 40px;padding-bottom: 40px;}
  .p-v-30 {padding-top: 30px;padding-bottom: 30px;}
  .p-v-10 {padding-top: 10px;padding-bottom: 10px;}
  .p-v-6 {padding-top: 6px;padding-bottom: 6px;}
  .p-v-2 {padding-top: 2px;padding-bottom: 2px;}
  .p-h-40 {padding-left: 40px;padding-right: 40px;}
  .p-h-30 {padding-left: 30px;padding-right: 30px;}
  .p-h-16 {padding-left: 16px;padding-right: 16px;}
  .p-h-12 {padding-left: 12px;padding-right: 12px;}
  .p-h-8 {padding-left: 8px;padding-right: 8px;}
  .p-t-92 {padding-top: 92px}
  .p-t-72 {padding-top: 72px}
  .p-t-30 {padding-top: 30px}
  .p-t-10 {padding-top: 10px}
  .p-t-2 {padding-top: 2px}
  .p-b-20 {padding-bottom: 20px}
  .p-b-10 {padding-bottom: 10px}
  .p-l-6 {padding-left: 6px}
  .p-r-40 {padding-right: 40px}
  .p-r-20 {padding-right: 20px}
  
  // 定位和距离
  .p-r {position: relative}
  .p-a {position: absolute}
  .p-f {position: fixed}
  .r-10 {right: 10px}
  .l-80 {left: 80px}
  .t-40 {top: 40px}
  .t-0 {top: 0}
  .r-0 {right: 0}
  .r-100 {right: 100px}
  .b-0 {bottom: 0}
  .b-100 {bottom: 100px}
  .l-0 {left: 0}
  .v-0 {top: 0;bottom: 0;}
  .h-0 {right: 0;left: 0;}
  .a-0 {top: 0;bottom: 0;left: 0;right: 0;}
  
  // 圆角
  .br-6 {border-radius: 6px}
  .br-15 {border-radius: 15px}
  .br-20 {border-radius: 20px}
  .br-24 {border-radius: 24px!important;}
  .br-40 {border-radius: 40px}
  .br-p-50 {border-radius: 50%}
  
  // 边框
  .b-none {border: 0;}
  .b-b-e {border-bottom: 1px solid #eee;}
  .b-t-e {border-top: 1px solid #eee;}
  .b-l-4-red {border-left: 4px solid #ea6f5a;}
  .b-e {border: 1px solid #eee;}
  .b-c {border: 1px solid #ccc;}
  .b-red {border: 1px solid #ea6f5a;}
  
  // 行高
  .lh-n {line-height: normal;}
  .lh-p-100 {line-height: 1;}
  .lh-p-140 {line-height: 1.4;}
  .lh-p-240 {line-height: 2.4;}
  .lh-100 {line-height: 100px;}
  
  // 宽高度
  .h-p-100 {height: 100%}
  .h-56 {height: 56px}
  .h-44 {height: 44px}
  .h-40 {height: 40px}
  .h-30 {height: 30px}
  .h-100 {height: 100px}
  .w-p-100 {width: 100%}
  .h-p-100 {height: 100%}
  .wh-p-100 {height: 100%;width: 100%;}
  .wh-80 {width: 80px;height: 80px;}  
  .wh-60 {width: 60px;height: 60px;}  
  .wh-48 {width: 48px;height: 48px;}  
  .wh-32 {width: 32px;height: 32px;}  
  .wh-22 {width: 22px;height: 22px;}  
  .w-960 {width: 960px;}
  .w-360 {width: 360px;}
  .w-300 {width: 300px;}
  .w-240 {width: 240px;}
  .w-150 {width: 150px;}
  .w-140 {width: 140px;}
  .w-100 {width: 100px;}
  
  // 对齐
  .t-c {text-align: center;}
  .t-l {text-align: left;}
  .t-r {text-align:right;}
  .va-7 {vertical-align: -7px;}
  .va-5 {vertical-align: -5px;}
  .va-3 {vertical-align: -3px;}
  .va-2 {vertical-align: -2px;}
  .va-m {vertical-align: middle;}
  
  // 弹性布局
  .flex {display: flex}
  .fw-w {flex-wrap: wrap}
  .fd-c {flex-direction: column}
  .f-auto {flex: auto}
  .f-none {flex: none}
  .jc-c {justify-content: center}
  .jc-b {justify-content: space-between}
  .jc-a {justify-content: space-around}
  .ai-c {align-items: center}
  
  // 其他常用属性
  .transition {transition: all 0.3s linear;}
  .f-l {float: left}
  .f-r {float: right}
  .d-b {display: block}
  .d-ib {display: inline-block}
  .d-i {display: inline}
  .bs-bb {box-sizing: border-box}
  .pointer {cursor: pointer}
  .hide {display: none}
  .o-h {overflow: hidden}
  .nowrap {white-space: nowrap;}
  .linear {transition: all 0.2s linear}
  .pointer {cursor: pointer}
  .h-b:hover{text-decoration: underline}
  
  // 组件样式
  button[disabled] {background-color: #ddd;cursor: not-allowed;}
  .form { // 表单
    .form-item {
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-top: 30px;
      padding: 0 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      i {
        flex: none;
        display: inline-block;
        color: #999;
        margin-right: 6px;
      }   
      input {
        flex: auto;
        background-color: transparent;
        height: 40px;
        width: 100%;
      }
    }
    .form-submit {
      margin-top: 30px;
      border-radius: 8px;
      width: 100%;
      height: 48px;
      color: #fff;
    }
  } 
`;
