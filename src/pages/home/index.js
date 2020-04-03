import React from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { IndexWrap } from "./style"
import BackTop from '../../components/backTop'
import Article from './components/article'
import Recommend from "./components/recommend";
import toast from "../../utils/toast";

class Home extends React.Component {
  test () {
    toast.show()
  }
  render () {
    return (
      <IndexWrap className='f-auto m-h-a p-t-92'>
        <BackTop />
        <div className='main o-h f-l'>
          <div className="banner">
            <img className='w-p-100 br-6'
                 src='https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png'
                 alt="banner"/>
            <button style={{margin: '10px 0'}} onClick={this.test}>测试按钮</button>
          </div>
          <Article />
        </div>
        <div className='aside o-h f-l'>
          <div><img className='w-p-100' src='/assets/img/nav-img-1.png' alt=""/></div>
          <div><img className='w-p-100 m-t-6' src='/assets/img/nav-img-2.png' alt=""/></div>
          <div><img className='w-p-100 m-t-6' src='/assets/img/nav-img-3.png' alt=""/></div>
          <div><img className='w-p-100 m-t-6' src='/assets/img/nav-img-4.png' alt=""/></div>
          <div className='flex ai-c fs-15 m-t-10 b-e br-6 p-10'>
            <img className='wh-60 m-r-10' src='/assets/img/qrcode.png' alt="二维码"/>
            <div>
              <p>下载简书手机APP ></p>
              <p className='c-6 m-t-6'>随时随地发现和创作内容</p>
            </div>
          </div>
          <Recommend />
        </div>
      </IndexWrap>
    )
  }
  componentDidMount () {
    this.props.dataInit()
  }
}
const mapDispatch = (dispatch) => {
  return {
    dataInit () {
      dispatch(actionCreator.init())
    }
  }
};
export default connect(null, mapDispatch)(Home)