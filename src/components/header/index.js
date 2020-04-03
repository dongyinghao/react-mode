import React from 'react'
import { HeaderWrap } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { actionCreator as loginAction } from '../../pages/basic/store'
import { Link, NavLink } from 'react-router-dom'

class Header extends React.Component{
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) this.props.loginHandle()
  }

  render() {
    const { login, logoutHandle, blurHandle, focusHandle, focus } = this.props;
    return (
      <HeaderWrap>
        <div className='wrap m-h-a'>
          <div className='nav-left f-l'>
            <NavLink activeClassName='c-red' to='/'>
              <img className='w-100 h-56' src='/assets/img/nav-logo.png' alt=""/>
            </NavLink>
          </div>
          <div className='f-r'>
            <div className='p-h-16 d-ib'><span className='iconfont va-3'>&#xe636;</span></div>
            {login ?
              <div className='p-h-16 c-6 pointer d-ib' onClick={logoutHandle}>退出</div> :
              <React.Fragment>
                <Link className='p-h-16 c-6 d-ib' to='/login'>登录</Link>
                <Link className='p-h-16 c-6 d-ib' to='/register'>注册</Link>
              </React.Fragment>
            }
            <div className='p-h-16 c-f d-ib'>
              <div className='bg-red br-20 h-40 p-h-16' style={{lineHeight: '40px'}}>
                <span className='iconfont'>&#xe616;</span>写文章
              </div>
            </div>
          </div>
          <div className="nav-main">
            <div className='d-ib p-h-16 c-red'><NavLink activeClassName='c-red' to='/'><span className='iconfont va-3'>&#xe60c;</span>首页</NavLink></div>
            <div className='d-ib p-h-16'><span className='iconfont va-3'>&#xe640;</span>下载</div>
            <div className='d-ib p-h-16'>
              <div className='bg-e p-h-16 h-30 lh-n br-15 p-t-2 p-r p-r-40'>
                <CSSTransition in={focus} timeout={600} classNames='slide'>
                  <input
                    onBlur={blurHandle}
                    onFocus={focusHandle}
                    className={['b-none bg-e fs-14 ' + (focus ? 'w-240' : 'w-140')]}
                    type="text" placeholder='搜索'/>
                </CSSTransition>
                <span className='iconfont bg-a br-p-50 p-a wh-22 r-10 v-0 m-v-a pointer c-f'>&#xe621;</span>
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
    login: state.getIn(['login', 'login']),
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
    loginHandle () {
      dispatch(loginAction.login())
    },
    logoutHandle () {
      dispatch(loginAction.logout())
    }
  }
};

export default connect(stateMapToProps, dispatchMapToProps)(Header)