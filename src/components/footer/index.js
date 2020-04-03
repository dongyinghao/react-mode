import React from 'react'
import { Link } from 'react-router-dom'
import { FooterWrap } from './style'
import { withRouter  } from 'react-router-dom';

class Footer extends React.Component {
  test () {
    return (
      <FooterWrap className='t-c b-t-e m-t-20'>
        <Link to=''>关于简书</Link>
        <Link to=''>联系我们</Link>
        <Link to=''>加入我们</Link>
        <Link to=''>简书出版</Link>
        <Link to=''>帮助中心</Link>
        <Link to=''>合作伙伴</Link>
        <div className='c-9 m-t-10 fs-14'>©2012-2020 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / <a href='http://baidu.com'>沪公网安备31010402002252号</a></div>
      </FooterWrap>
    )
  }

  render () {
    return (
      <React.Fragment>
        {this.props.location.pathname === '/author' ? null : this.test()}
      </React.Fragment>
    )
  }
}

export default withRouter(Footer)