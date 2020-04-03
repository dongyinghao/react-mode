import React from 'react';
import { Link } from 'react-router-dom'

class pageNotFount extends React.Component {
  render() {
    return (
      <div className='t-c p-t-92 fs-22'>
        <div className='c-red fs-68'>404!</div>
        <div className='m-v-20'>您访问的页面不存在...</div>
        <Link to='/'><button className='bg-blue br-20 c-f h-40 w-240 fs-16'>返回首页</button></Link>
      </div>
    );
  }
}

export default pageNotFount;