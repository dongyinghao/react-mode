import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return (<div>加载中...</div>)
  }
});

export default () => <LoadableComponent />

// 或者如下写法亦可
// export default class componentName extends Component {
//   render () {
//     return <LoadableComponent />
//   }
// }