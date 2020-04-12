import React from "react";
import { NavLink, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'


class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      user: '',
      password: '',
      rememberMe: 0
    };
    this.rememberMe = this.rememberMe.bind(this);
    this.submit = this.submit.bind(this)
  }

  changeHandle (type, e) {
    this.setState({
      [type]: e.target.value
    })
  }

  rememberMe (e) {
    this.setState({
      rememberMe: + e.target.checked
    })
  }

  submit () {
    this.setState({disabled: true});
    this.$api.login(this.state).then(res => {
      this.setState({disabled: false});
      if (res.code === '0') {
        localStorage.setItem('token', res.data.token);
        this.props.loginHandle(res.data.token);
        const fromPath = this.props.location.state && this.props.location.state.from;
        this.props.history.push({pathname: fromPath || "/chinaexpressair", query:{ test: "test" }})
      }
    }).catch(error => {
      this.setState({disabled: false});
      console.log(error);
    })
  }

  render () {
    const { user, password, disabled } = this.state;
    return (
      this.props.token ?
      <Redirect to='/chinaexpressair' />  :
      <div className="flex ai-c bg-e h-p-100 relative">
        <Link to='/' className="absolute l-80 t-40"><img src="/assets/img/nav-logo.png" alt=""/></Link>
        <div className="w-360 m-h-auto form bg-f p-h-30 p-v-40">
          <div className="t-c fs-22 c-9">
            <NavLink className="c-9" to='/login' activeClassName='c-red'>登录</NavLink>
            <span> | </span>
            <NavLink className="c-9" to='/register' activeClassName='c-red'>注册</NavLink>
          </div>
          <div className="form-item">
            <i className='iconfont iconuser'/>
            <input onChange={this.changeHandle.bind(this, 'user')} type="text" value={user} placeholder='手机号或邮箱'/>
          </div>
          <div className="form-item">
            <i className='iconfont iconpwd'/>
            <input onChange={this.changeHandle.bind(this, 'password')} type="password" value={password} placeholder='密码'/>
          </div>
          <button
            disabled={!user || !password || disabled}
            onClick={this.submit}
            className='form-submit bg-blue br-24 transition'
          >登录</button>
          <div className="m-t-16 fs-14 c-9">
            <label><input value='1' onChange={this.rememberMe} className='va-2' type="checkbox"/>记住我</label>
            <Link to='' className='f-r c-9 h-b'>登录遇到问题?</Link></div>
        </div>
      </div>
    )
  }
}
const stateMap = (state) => {
  return {
    token: state.getIn(['basic', 'token'])
  }
};

const dispatchMap = (dispatch) => {
  return {
    loginHandle (value) {
      dispatch(actionCreator.login(value))
    }
  }
};

export default connect(stateMap, dispatchMap)(Login)