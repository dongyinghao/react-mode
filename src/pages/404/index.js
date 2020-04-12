import React from 'react';
import { Link } from 'react-router-dom'

class pageNotFount extends React.Component {
  render() {
    return (
      <div className='t-c p-t-200 fs-14'>
        <Link className='fixed l-80 t-40' to='/'><img src="/assets/img/nav-logo.png" alt=""/></Link>
        <div className='c-red fs-68'>404!</div>
        <div className='m-v-20'>您要找的页面不存在</div>
        <div className='m-t-20'>可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</div>
        <Link to='/'><button className='bg-green br-20 c-f h-40 w-200 m-t-40'>返回首页</button></Link>
      </div>
    );
  }
}

export default pageNotFount;