import React from 'react'
import { HeaderWrap } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { actionCreator as loginAction } from '@/pages/basic/store'
import { Link, NavLink, withRouter } from 'react-router-dom'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.searchHandle = this.searchHandle.bind(this)
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) this.props.loginHandle(token)
  }

  goCenter = () => {
    this.props.history.push({pathname: '/easybook/user/1'})
  };

  searchHandle () {
    const val = this.input.value;
    if (val) window.open('http://localhost:3000/easybook/search?search=' + val)
  };
  render() {
    const { token, logoutHandle, blurHandle, focusHandle, focus } = this.props;
    return (
      <HeaderWrap>
        <div className='wrap m-h-auto'>
          <div className='nav-left f-l'>
            <NavLink activeClassName='c-red' to='/'>
              <img className='w-100 h-56' src='/assets/img/nav-logo.png' alt=""/>
            </NavLink>
          </div>
          <div className='f-r'>
            <div className='p-h-16 inline-block'><span className='iconfont va-3 iconAa fs-22' /></div>
            {token ?
              <>
                <div className='p-h-16 c-6 pointer inline-block' onClick={logoutHandle}>退出</div>
                <div className='p-h-16 c-6 pointer inline-block' onClick={this.goCenter}>
                  <img className='wh-40 br-p-50 va-12 m-r-10' src="https://upload.jianshu.io/users/upload_avatars/17010818/078f9f1a-b5b6-4f69-a67d-878a9193c493" alt=""/>
                  <i className='inline-block arrow'/>
                </div>
              </> :
              <>
                <Link className='p-h-16 c-6 inline-block' to='/login'>登录</Link>
                <Link className='p-h-16 c-6 inline-block' to='/register'>注册</Link>
              </>
            }
            <Link className='c-f bg-red br-20 h-40 p-h-16 inline-block lh-40' to='/write'><i className='iconfont iconpen fs-18' />写文章</Link>
          </div>
          <div className="nav-main">
            <div className='inline-block p-h-16 c-red'>
              <NavLink activeClassName='c-red' to='/easybook' exact><i className='iconfont iconcompass va-3 fs-22' />{token ? '发现' : '首页'}</NavLink>
            </div>
            {
              token ?
                <>
                  <div className='inline-block p-h-16 pointer'>
                    <NavLink activeClassName='c-red' to='/easybook/focus'><i className='iconfont va-1 iconbook fs-18'/> 关注</NavLink>
                  </div>
                  <div className='inline-block p-h-16 pointer'>
                    <NavLink activeClassName='c-red' to='/easybook/news'><i className='iconfont va-2 iconbell fs-22'/>消息</NavLink>
                  </div>
                </> :
                <div className='inline-block p-h-16 pointer'>
                  <NavLink activeClassName='c-red' to='/easybook/news'><i className='iconfont va-3 icondownload fs-22'/>下载</NavLink>
                </div>
            }
            <div className='inline-block p-h-16'>
              <div className='bg-e p-l-16 h-30 lh-n br-15 p-t-2 relative p-r-40'>
                <CSSTransition in={focus} timeout={600} classNames='slide'>
                  <input
                    onBlur={blurHandle}
                    onFocus={focusHandle}
                    ref={(input) => {this.input = input}}
                    className={'b-none bg-e fs-14 ' + (focus ? 'w-240' : 'w-140')}
                    type="text" placeholder='搜索'/>
                </CSSTransition>
                <i onMouseDown={this.searchHandle}
                  className={'iconfont iconsearch fs-14 ta-c br-p-50 absolute wh-22 r-10 v-0 m-v-auto pointer lh-24 border-box p-l-2 ' + (focus ? 'bg-a c-f' : 'c-6')}/>
              </div>
            </div>
          </div>
        </div>
      </HeaderWrap>
    )
  }
}

const stateMapToProps = (state) => {
  return {
    token: state.getIn(['basic', 'token']),
    focus: state.getIn(['header', 'focus'])
  }
};

const dispatchMapToProps = (dispatch) => {
  return {
    focusHandle () {
      dispatch(actionCreator.onFocus())
    },
    blurHandle () {
      dispatch(actionCreator.onBlur())
    },
    loginHandle (token) {
      dispatch(loginAction.login(token))
    },
    logoutHandle () {
      dispatch(loginAction.logout())
    }
  }
};

export default connect(stateMapToProps, dispatchMapToProps)(withRouter(Header))