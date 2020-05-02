import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Tab from '@/components/tab'
import Article from "./article"
import { actionCreator } from "../../user/store";

class Read extends React.Component {
  state = {
    currentTab: 1,
    tabList: [
      {
        title: '全部推荐',
        id: 1
      },
      {
        title: '推荐作者',
        id: 2,
        icon: 'iconuser'
      },
      {
        title: '推荐专题',
        id: 3,
        icon: 'iconother'
      }
    ]
  };

  tabChange = (id) => {
    this.setState({
      currentTab: id
    })
  };

  render () {
    const { tabList, currentTab } = this.state;
    return (
      <div className="">
        <div className='flex jc-b ai-c'>
          <div className='flex ai-c'>
            <img className='wh-80 br-6' src="https://upload.jianshu.io/collections/images/16/computer_guy.jpg" alt=""/>
            <div className='m-l-10'>
              <div className='fs-22 m-b-10 bold'>程序员</div>
              <div className='c-9 fs-14'><span className='c-blue'>简书</span> 编 · 收录了110701篇文章 · 1475657人关注</div>
            </div>
          </div>
          <div>
            <div className='fs-14 p-h-16 p-v-10 inline-block c-green br-20 b-green pointer'>投稿</div>
            <div className='fs-14 p-h-20 p-v-10 c-green inline-block br-20 b-green m-l-10 pointer'>专题主页 ></div>
          </div>
        </div>
        <Tab tabList={ tabList } currentTab={currentTab} tabChange={this.tabChange}/>
        <Article />
      </div>
    )
  }
  componentDidMount() {
    this.props.dataInit()
  }
}

const mapDispatch = (dispatch) => ({
  dataInit () {
    dispatch(actionCreator.init())
  }
});
export default connect(null, mapDispatch)(withRouter(Read))