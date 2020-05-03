import React from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { IndexWrap } from "./style"
import BackTop from '@/components/backTop'
import Article from './components/article.js'
import Recommend from "./components/recommend.js";
// import toast from "@/utils/toast";
// import loading from "@/utils/loading";

class Home extends React.Component {
  render () {
    // todo 为什么渲染了两次
    return (
      <IndexWrap className='f-auto m-h-auto p-t-92'>
        <BackTop />
        <div className='main hidden f-l'>
          <div className="banner">
            <img className='w-p-100 br-6' src='https://upload.jianshu.io/admin_banners/web_images/4933/4569c554a279c00bee30ee4ed42fc454db7cce1b.jpg' alt="banner"/>
          </div>
          <Article />
        </div>
        <div className='aside hidden f-l'>
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
    // loading.show();
    // // toast.show();
    // setTimeout(() => {
    //   this.forceUpdate(()=> {
    //     console.log(44);
    //   });
    // }, 1000);
    this.props.dataInit()
  }
}
const mapDispatch = (dispatch) => ({
    dataInit () {
      dispatch(actionCreator.init())
    }
  });
export default connect(null, mapDispatch)(Home)