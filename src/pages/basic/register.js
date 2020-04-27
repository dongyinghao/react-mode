import React from "react";
import { NavLink, Link } from 'react-router-dom'

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      mobile: '',
      password: ''
    };
    this.changeHandle = this.changeHandle.bind(this)
    this.submit = this.submit.bind(this)
  }
  changeHandle (type, e) {
    this.setState({
      [type]: e.target.value
    })
  }

  submit () {
    console.log(this.state);
  }

  render() {
    return (
      <div className="bg-e h-p-100 flex ai-c relative">
        <Link to='/' className="absolute l-80 t-40"><img src="/assets/img/nav-logo.png" alt=""/></Link>
        <div className="w-360 m-h-auto form bg-f p-h-30 p-v-40">
          <div className="ta-c fs-22 c-9">
            <NavLink className="c-9" to='/login' activeClassName='c-red'>登录 </NavLink>
            <span>|</span>
            <NavLink className="c-9" to='/register' activeClassName='c-red'> 注册</NavLink>
          </div>
          <div className="form-item">
            <i className='iconfont'>&#xe602;</i>
            <input onChange={(e) => {this.changeHandle('user', e)}} value={this.state.user} type="text" placeholder='你的昵称'/>
          </div>
          <div className="form-item">
            <i className='iconfont'>&#xe625;</i>
            <input onChange={(e) => {this.changeHandle('mobile', e)}} value={this.state.mobile} type="text" placeholder='手机号'/>
          </div>
          <div className="form-item">
            <i className='iconfont'>&#xe60d;</i>
            <input onChange={(e) => {this.changeHandle('password', e)}} value={this.state.password} type="password" placeholder='设置密码'/>
          </div>
          <button onClick={this.submit} className='form-submit bg-green br-24'>注册</button>
          <div className="m-t-16 fs-14 ta-c p-h-40 c-9 lh-p-140">点击 “注册” 即表示您同意并愿意遵守简书 用户协议 和 隐私政策</div>
        </div>
      </div>
    )
  }
}

export default Register